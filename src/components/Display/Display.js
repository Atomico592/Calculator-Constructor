import React, { useContext, useEffect } from 'react'
import './Display.scss'
import { IDS } from '../../consts'
import Palette from '../UI/Palette/Palette'
import { StateContext } from '../StateProvider/StateProvider'

const Display = ({ onDragStart, onDragOver, onDragEnd, onDragLeave, draggable, shadow }) => {
  const { state, dispatch } = useContext(StateContext)

  useEffect(() => {
    console.log('asdas', state)
  }, [state])

  console.log(state.result)
  return (
    <Palette width="240px" height="60px" shadow={shadow}>
      <div
        className="display"
        id={IDS.DISPLAY}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        onDragLeave={onDragLeave}
      >
        <div className="display__inner-panel">
          <span className="display__content">{state.result === 0 ? state.firstNum : state.result}</span>
        </div>
      </div>
    </Palette>
  )
}
export default Display
