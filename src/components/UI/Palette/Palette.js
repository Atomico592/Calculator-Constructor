import React from 'react'
import './Palette.scss'

const Palette = ({ children, width, height }) => (
  <div className="palette" style={{ width: `${width}`, height: `${height}` }}>
    {children}
  </div>
)

export default Palette
