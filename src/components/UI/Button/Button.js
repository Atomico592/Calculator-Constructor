import React from 'react'
import './Button.scss'

const Button = ({ name, width, height, style }) => (
  <button className={`button ${style}`} style={{ width: `${width}`, height: `${height}` }}>
    {name}
  </button>
)

export default Button
