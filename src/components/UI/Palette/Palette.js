import React from 'react'
import './Palette.scss'

const Palette = ({ children, width, height, shadow }) => (
  <div className="palette" style={{ width: `${width}`, height: `${height}`, boxShadow: `${shadow}` }}>
    {children}
  </div>
)

export default Palette
