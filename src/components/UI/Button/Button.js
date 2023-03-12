import React from 'react'
import './Button.scss'

const Button = ({ name, width, height, style, onClick }) => (
  <button onClick={onClick} className={`button ${style}`} style={{ width: `${width}`, height: `${height}` }}>
    {name}
  </button>
)

export default Button
