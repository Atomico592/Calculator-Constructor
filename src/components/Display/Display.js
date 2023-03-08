import React from 'react'
import './Display.scss'
import Palette from '../UI/Palette/Palette'

const Display = ({ content }) => (
  <Palette width="240px" height="60px">
    <div className="display">
      <div className="display__inner-panel">
        <span className="display__content">{content}</span>
      </div>
    </div>
  </Palette>
)

export default Display
