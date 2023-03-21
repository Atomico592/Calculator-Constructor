import React, { useContext } from 'react'
import Button from '../UI/Button/Button'
import { IDS } from '../../consts'
import { StateContext } from '../StateProvider/StateProvider'
import './Sings.scss'

const Sings = ({ onDragStart, onDragOver, onDragEnd, onDragLeave, draggable, onDrop, shadow, disabled }) => {
  const { state, dispatch } = useContext(StateContext)
  const sings = ['/', 'x', '-', '+']

  const clickHandler = elem => {
    dispatch({ type: 'SIGN', payload: elem })
  }
  return (
    <div
      className="sings-wrapper"
      id={IDS.SINGS}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragLeave={onDragLeave}
      draggable={draggable}
      onDrop={onDrop}
      style={{ boxShadow: `${shadow}`}}
    >
    
        <div>
        {sings.map(item => (
          <Button width="52px" height="48px" name={item} key={item} onClick={() => clickHandler(item)} disabled={disabled}/>
        ))}
    
      </div>
    </div>
  )
}

export default Sings
