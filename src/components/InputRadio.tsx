import { styled } from "styled-components"

interface InputRadioProps {
  title: string, 
  optionName: string, 
  onChangeFunction: Function, 
  optionImageVar: string
}

const StyledInput = styled.input`
  /* -webkit-appearance: none;
  padding: 0.1rem 0.7rem;
  border-color: var(--color-base-text);
  border-width: 1px;
  border-style: solid;
  border-radius: 1rem;

  :checked {
    background-color: var(--color-contrast-text);
  } */
`

export function InputRadio({ title, optionName, onChangeFunction, optionImageVar } : InputRadioProps) {
  return (
    <div>
      <StyledInput
        type="radio"
        name="optionImage"
        id="optionImage"
        checked={optionImageVar === optionName}
        onChange={() => onChangeFunction(optionName)}
      /> 
      <label> { title } </label>
    </div>
  )
}