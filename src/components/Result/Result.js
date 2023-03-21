import React, { useContext } from 'react'
import Palette from '../UI/Palette/Palette'
import Button from '../UI/Button/Button'
import { IDS } from '../../consts'
import { StateContext } from '../StateProvider/StateProvider'
import "./Resilt.scss"

const Result = ({ onDragStart, onDragOver, onDragEnd, onDragLeave, draggable, onDrop, shadow }) => {
  const { state, dispatch } = useContext(StateContext)
  const showResult = () => {
    switch (state.sign) {
      case '+': {
        return dispatch({ type: 'RESULT', payload: eval(`state.firstNum + state.secondNum`) })
      }
      case '-': {
        return dispatch({ type: 'RESULT', payload: eval(`state.firstNum - state.secondNum`) })
      }
      case 'x': {
        return dispatch({ type: 'RESULT', payload: eval(`state.firstNum * state.secondNum`) })
      }
      case '/': {
        return dispatch({ type: 'RESULT', payload: eval(`state.firstNum / state.secondNum`) })
      }
      default:
        return state
    }
  }
  return (
    <div
      id={IDS.RESULT}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className='result-wrapper'
      style={{ boxShadow: `${shadow}`}}
    >
        <Button width="232px" height="64px" name="=" style="style" onClick={() => showResult()} />
    </div>
  )
}

export default Result
