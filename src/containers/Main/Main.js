import React, { useState } from 'react'
import Display from '../../components/Display/Display'
import NumPad from '../../components/NumPad/NumPad'
import Result from '../../components/Result/Result'
import Sings from '../../components/Sings/Sings'
import ConstructorPanel from '../../components/ConstructorPanel/ConstructorPanel'
import './Main.scss'

const Main = () => {
  const [elemList, setElemList] = useState([
    { id: 1, order: 1, content: <Display /> },
    { id: 2, order: 2, content: <Sings /> },
    { id: 3, order: 3, content: <NumPad /> },
    {
      id: 4,
      order: 4,
      content: <Result />,
    },
  ])
  const [currentElem, setCurrentElem] = useState(null)

  const dragStartHandler = (e, item) => {
    e.target.style.opacity = '0.5'
    setCurrentElem(item)
  }

  const dragEndHandler = e => {
    e.target.style.opacity = '1'
  }

  const dragOverHandler = e => {
    e.preventDefault()
    e.target.style.opacity = '0.5'
  }

  const dropHandler = (e, item) => {
    e.preventDefault()
    setElemList(
      elemList.map(elem => {
        if (elem.id === item.id) {
          return { ...elem, order: currentElem.order }
        }
        if (elem.id === currentElem.id) {
          return { ...elem, order: item.order }
        }
        return elem
      }),
    )
  }

  const sortElem = (a, b) => {
    if (a.order > b.order) {
      return 1
    }
    return -1
  }
  return (
    <div className="main">
      <div className="main__inner-block">
        <div>
          {elemList.sort(sortElem).map(item => (
            <div
              key={item.id}
              draggable
              onDragStart={e => dragStartHandler(e, item)}
              onDragLeave={e => dragEndHandler(e)}
              onDragEnd={e => dragEndHandler(e)}
              onDragOver={e => dragOverHandler(e)}
              onDrop={e => dropHandler(e, item)}
            >
              {item.content}
            </div>
          ))}
        </div>

        <div className="test">
          <ConstructorPanel />
        </div>
      </div>
    </div>
  )
}

export default Main
