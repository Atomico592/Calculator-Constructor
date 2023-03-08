import React from 'react'
import Button from '../UI/Button/Button'
import Palette from '../UI/Palette/Palette'

const Sings = () => {
  const sings = ['/', 'x', '-', '+']
  return (
    <Palette width="240px" height="56px">
      {sings.map(item => (
        <Button width="52px" height="48px" name={item} />
      ))}
    </Palette>
  )
}

export default Sings
