import React, { useContext } from 'react'
import Palette from '../UI/Palette/Palette'
import Button from '../UI/Button/Button'
import { IDS } from '../../consts'
import { StateContext } from '../StateProvider/StateProvider'

const NumPad = ({ onDragStart, onDragOver, onDragEnd, onDragLeave, draggable, onDrop, shadow }) => {
  const { state, dispatch } = useContext(StateContext)
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const clickHandler = elem => {
    if (!state?.firstNum) {
      dispatch({ type: 'ADD_FIRST_NUM', payload: elem })
    } else {
      dispatch({ type: 'ADD_SECOND_NUM', payload: elem })
    }
  }
  return (
    <div
      id={IDS.NUMPAD}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <Palette width="240px" height="224px" shadow={shadow}>
        {number.map(item => (
          <Button key={item} width="72px" height="48px" name={item} onClick={() => clickHandler(item)} />
        ))}
        <Button width="152px" height="48px" name="0" onClick={() => clickHandler('0')} />
        <Button width="72px" height="48px" name="," onClick={() => clickHandler(',')} />
      </Palette>
    </div>
  )
}

export default NumPad
