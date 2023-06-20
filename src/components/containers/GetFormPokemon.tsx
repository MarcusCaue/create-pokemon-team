import styled from "styled-components"

import { StyledButton } from "../../styles/StyledButton.style";
import { StyledInput } from "../../styles/StyledInput.style";
import { InputRadio } from "../InputRadio";
const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
const RadiosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  div {
    display: flex;  
    gap: 0.4rem;
    font-size: 1.25rem;
  }

  input[type="radio"] {
    cursor: pointer;
  }
`

interface GetFormPokemonProps {
  submitFormFunction: React.FormEventHandler<HTMLFormElement>,
  refInput: React.RefObject<HTMLInputElement>,
  optionImageChoiced: string,
  changeOptionImage: Function,
}

export function GetFormPokemon({ submitFormFunction, refInput, optionImageChoiced, changeOptionImage }: GetFormPokemonProps) {
  return (
    <section>
      <FormContainer onSubmit={submitFormFunction}>
        <div>
          <StyledInput type="text" name="pokemonName" id="pokemonName" ref={refInput} placeholder="Digite o nome do Pokemon: " />
        </div>
        {/* Input Radios */}
        <RadiosContainer>
          <InputRadio optionName="official" title="Oficial" onChangeFunction={changeOptionImage} optionImageVar={optionImageChoiced} />
          <InputRadio optionName="pixelated" title="Pixelada" onChangeFunction={changeOptionImage} optionImageVar={optionImageChoiced} />
          <InputRadio optionName="animated" title="Animada" onChangeFunction={changeOptionImage} optionImageVar={optionImageChoiced} />
        </RadiosContainer>
        <div>
          <StyledButton type="submit"> Enviar </StyledButton>
        </div>
      </FormContainer>
    </section>
  )
}