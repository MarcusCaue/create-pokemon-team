import styled from "styled-components"

import { StyledButton, StyledInput } from "../../styles/components/index.style";
import { InputRadio } from "../InputRadio";
import React from "react";

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
const StyledInputsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

interface GetFormPokemonProps {
  submitFormFunction: React.FormEventHandler<HTMLFormElement>,
  addPokemonOnTeamFunction: React.MouseEventHandler<HTMLButtonElement>,
  refInput: React.RefObject<HTMLInputElement>,
  refNicknameInput: React.RefObject<HTMLInputElement>,
  optionImageChoiced: string,
  changeOptionImage: Function,
}

export function GetFormPokemon(props : GetFormPokemonProps) {
  return (
    <section>
      <StyledFormContainer onSubmit={props.submitFormFunction}>
        <StyledInputsContainer>
          <StyledInput type="text" name="pokemonName" id="pokemonName" ref={props.refInput} placeholder="Digite o nome do Pokemon: " />

          <StyledInput maxLength={20} type="text" name="pokemonNickname" id="pokemonNickname" ref={props.refNicknameInput} placeholder="Digite o apelido do seu Pokemon: " />
        </StyledInputsContainer>

        {/* Input Radios */}
        <StyledRadiosContainer>
          <InputRadio optionName="official" title="Oficial" onChangeFunction={props.changeOptionImage} optionImageVar={props.optionImageChoiced} />
          <InputRadio optionName="pixelated" title="Pixelada" onChangeFunction={props.changeOptionImage} optionImageVar={props.optionImageChoiced} />
          <InputRadio optionName="animated" title="Animada" onChangeFunction={props.changeOptionImage} optionImageVar={props.optionImageChoiced} />
        </StyledRadiosContainer>

        <StyledButtonsContainer>
          <StyledButton $textColor="#343434" $bgColor="#00D9FF" type="button" onClick={props.addPokemonOnTeamFunction}> Adicionar </StyledButton>
          <StyledButton $textColor="#343434" $bgColor="#EC9D08" type="submit"> Pesquisar </StyledButton>
        </StyledButtonsContainer>
      </StyledFormContainer>
    </section>
  )
}