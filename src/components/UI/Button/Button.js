import React from 'react'
import './Button.scss'

const Button = ({ name, width, height, style, onClick, disabled }) => {
      
return (
  <button onClick={onClick} className={`${disabled ? 'button' : 'button-activ'} ${style}`} style={{ width: `${width}`, height: `${height}` }} disabled={disabled}>
    {name}
  </button>
)
}

export default Button
