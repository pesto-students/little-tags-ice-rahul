import React, {useState} from 'react'
import './Input.scss'

const Input = ({
  type = 'text',
  name = 'inputElement',
  value = '',
  label = 'Input Label',
  placeholder = 'Enter a Value',
  className,
  onChange
}) => {

  const [ userInput, setUserInput ] = useState(value);

  const handleInput = (event) => {
    setUserInput(event.target.value)
    if(!!onChange){
      onChange(event.target.value)
    }
  }

  return (<>
    <div className={`Input ${className}`}>
      <label>{label}</label>
      <input type={type} name={name} value={userInput} placeholder={placeholder} onChange={handleInput} />
    </div>
  </>)
}

export default Input;