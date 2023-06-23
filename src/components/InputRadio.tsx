import { styled } from "styled-components"

interface InputRadioProps {
  title: string, 
  optionName: string, 
  onChangeFunction: Function, 
  optionImageVar: string
}
const StyledContainerInput = styled.div`
  display: flex;
  align-items: center;

  input {
    -webkit-appearance: none;
  }

  input#optionImage {
    content: "";
    display: inline-block;
    width: 0.625rem; height: 0.625rem;
    padding: 0.625rem;
    border-radius: 9999px;
    background-color: #fff;
  }

  input#optionImage:checked {
    border: 0.3125rem solid var(--color-contrast-text);
    padding: 0.3125rem; 
  }

`
const StyledInput = styled.input`
  /* -webkit-appearance: none;
  padding: 0.1rem 0.7rem;
  border-color: var(--color-base-text);
  border-width: 1px;
  border-style: solid;
  border-radius: 1rem;

  input:checked {
    background-color: var(--color-contrast-text);
  } */
`

export function InputRadio({ title, optionName, onChangeFunction, optionImageVar } : InputRadioProps) {
  return (
    <StyledContainerInput>
      <StyledInput
        type="radio"
        name="optionImage"
        id="optionImage"
        checked={optionImageVar === optionName}
        onChange={() => onChangeFunction(optionName)}
      /> 
      <label> { title } </label>
    </StyledContainerInput>
  )
}