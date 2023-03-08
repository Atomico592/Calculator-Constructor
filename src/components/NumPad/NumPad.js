import React from 'react'
import Palette from '../UI/Palette/Palette'
import Button from '../UI/Button/Button'

const NumPad = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Palette width="240px" height="224px">
      <div>
        {number.map(item => (
          <Button key={item} width="72px" height="48px" name={item} />
        ))}
        <Button width="152px" height="48px" name="0" />
        <Button width="72px" height="48px" name="," />
      </div>
    </Palette>
  )
}

export default NumPad
