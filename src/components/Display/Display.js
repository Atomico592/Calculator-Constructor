import React from 'react'
import './Display.scss'

const Display = ({ content }) => (
  <div className="display">
    <div className="display__inner-panel">
      <span className="display__content">{content}</span>
    </div>
  </div>
)

export default Display
