import styled from "styled-components"

import { StyledButton } from "../../styles/StyledButton.style";
import { StyledInput } from "../../styles/StyledInput.style";
import { InputRadio } from "../InputRadio";
const StyledFormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
const StyledRadiosContainer = styled.div`
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
const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.25rem;
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
      <StyledFormContainer onSubmit={submitFormFunction}>
        <div>
          <StyledInput type="text" name="pokemonName" id="pokemonName" ref={refInput} placeholder="Digite o nome do Pokemon: " />
        </div>

        {/* Input Radios */}
        <StyledRadiosContainer>
          <InputRadio optionName="official" title="Oficial" onChangeFunction={changeOptionImage} optionImageVar={optionImageChoiced} />
          <InputRadio optionName="pixelated" title="Pixelada" onChangeFunction={changeOptionImage} optionImageVar={optionImageChoiced} />
          <InputRadio optionName="animated" title="Animada" onChangeFunction={changeOptionImage} optionImageVar={optionImageChoiced} />
        </StyledRadiosContainer>

        <StyledButtonsContainer>
          <StyledButton $textColor="#343434" $bgColor="#00D9FF" type="button"> Adicionar </StyledButton>
          <StyledButton $textColor="#343434" $bgColor="#EC9D08" type="submit"> Pesquisar </StyledButton>
        </StyledButtonsContainer>
      </StyledFormContainer>
    </section>
  )
}