interface InputRadioProps {
  title: string, 
  optionName: string, 
  onChangeFunction: Function, 
  optionImageVar: string
}

export function InputRadio({ title, optionName, onChangeFunction, optionImageVar } : InputRadioProps) {
  return (
    <div>
      <input
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