import React from 'react'
import Display from '../../components/Display/Display'
import NumPad from '../../components/NumPad/NumPad'
import Result from '../../components/Result/Result'
import Sings from '../../components/Sings/Sings'
import './Main.scss'

const Main = () => (
  <div className="main">
    <div className="main__inner-block">
      <Display />
      <Sings />
      <NumPad />
      <Result />
    </div>
  </div>
)

export default Main
