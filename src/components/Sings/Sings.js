import React, { useContext } from 'react'
import Button from '../UI/Button/Button'
import Palette from '../UI/Palette/Palette'
import { IDS } from '../../consts'
import { StateContext } from '../StateProvider/StateProvider'

const Sings = ({ onDragStart, onDragOver, onDragEnd, onDragLeave, draggable, onDrop, shadow }) => {
  const { state, dispatch } = useContext(StateContext)
  const sings = ['/', 'x', '-', '+']

  const clickHandler = elem => {
    dispatch({ type: 'SIGN', payload: elem })
  }
  return (
    <div
      id={IDS.SINGS}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragLeave={onDragLeave}
      draggable={draggable}
      onDrop={onDrop}
    >
      <Palette width="240px" height="56px" shadow={shadow}>
        {sings.map(item => (
          <Button width="52px" height="48px" name={item} key={item} onClick={() => clickHandler(item)} />
        ))}
      </Palette>
    </div>
  )
}

export default Sings
