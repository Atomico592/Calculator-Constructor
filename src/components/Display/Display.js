import React, { useContext, useEffect } from 'react'
import { IDS } from '../../consts'
import { StateContext } from '../StateProvider/StateProvider'
import './Display.scss'

const Display = ({ onDragStart, onDragOver, onDragEnd, onDragLeave, draggable, shadow }) => {
  const { state, dispatch } = useContext(StateContext)

  useEffect(() => {
    // console.log('asdas', state)
  }, [state])

  return (
    <div 
    className='wrapper' 
    style={{ boxShadow: `${shadow}`}}   
    id={IDS.DISPLAY}    
    draggable={draggable}
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDragEnd={onDragEnd}
    onDragLeave={onDragLeave}
    >
      <div className="display">
        <div className="display__inner-panel">
          <span className="display__content">{state.result === 0 ? state.firstNum : state.result}</span>
        </div>
      </div>
    </div>
  )
}
export default Display
