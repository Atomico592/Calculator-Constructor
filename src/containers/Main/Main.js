import React, { useEffect, useRef, useState } from 'react'
import ConstructorPanel from '../../components/ConstructorPanel/ConstructorPanel'
import { IDS } from '../../consts'
import Display from '../../components/Display/Display'
import Sings from '../../components/Sings/Sings'
import NumPad from '../../components/NumPad/NumPad'
import Result from '../../components/Result/Result'
import './Main.scss'

const Main = () => {
  const [items, setItems] = useState([])
  const [runtime, setRuntime] = useState(true)
  const [dragble, setDragble] = useState(null)
  const [overId, setOverId] = useState(null)
  const [activBtn, setActivBtn] = useState(true)

  const isDisplayDraggble = !items.includes(IDS.DISPLAY)
  const isNotNumPadDraggble = items.includes(IDS.NUMPAD)
  const isNotNumSingsDraggble = items.includes(IDS.SINGS)
  const isNotNumResultDraggble = items.includes(IDS.RESULT)

  const ref = { dragble: useRef(dragble), overId: useRef(overId) }

  ref.dragble.current = dragble
  ref.overId.current = overId


    console.log(runtime)
  useEffect(() => {
    if (!runtime) {
      console.log(runtime)
      setActivBtn(false)
    } else {
      setActivBtn(true)
    }
  }, [runtime])
 




  // Перенос элементов на д оску
  const dragStartHandler = e => {
    e.target.style.opacity = '0.5'
    setDragble(e.target.id)
  }

  const dragOverHandler = e => {
    e.preventDefault()
  }
  const dropElemHandler = e => {
    e.preventDefault()
    if (dragble) {
      setItems(prev => [...prev, dragble])
    }
  }

  const onDragEnd = e => {
    setDragble(null)
  }

  // Перенос по доске
  const dragStartOnBoard = e => {
    setDragble(e.target.id)
  }

  const dragOverOnBoard = e => {
    setOverId(e.target.id)
    e.target.style.borderBottom = '2px solid red'
  }

  const dragEndOnBoard = e => {
    e.target.style.borderBottom = 'none'
  }

  const dropAndChangeIds = e => {
        console.log("Test")
    setItems(prev => {
      const next = [...prev]
      const firstId = prev.indexOf(ref.dragble.current)
      const secondId = prev.indexOf(ref.overId.current)
    
      next[firstId] = prev[secondId]
      next[secondId] = prev[firstId]
      return next
    })
  }

  const deleteItem = e => {
    console.log(e.target.id)
  }

  console.log(items)

  return (
    <div className="main">
      <div className="main__inner-block ">
        <div>
          {runtime ? (
            <div>
              <Display
                onDragStart={isDisplayDraggble ? dragStartHandler : null}
                onDragEnd={isDisplayDraggble ? onDragEnd : null}
                draggable={isDisplayDraggble}
                shadow={isDisplayDraggble ? null : 'none'}
                disabled={activBtn}
              />
              <Sings
                onDragStart={isNotNumSingsDraggble ? null : dragStartHandler}
                onDragEnd={isNotNumSingsDraggble ? null : onDragEnd}
                draggable={!isNotNumSingsDraggble}
                shadow={isNotNumSingsDraggble ? 'none' : null}
                disabled={activBtn}
              />
              <NumPad
                onDragStart={isNotNumPadDraggble ? null : dragStartHandler}
                onDragEnd={isNotNumPadDraggble ? null : onDragEnd}
                draggable={!isNotNumPadDraggble}
                shadow={isNotNumPadDraggble ? 'none' : null}
                disabled={activBtn}
              />
              <Result
                onDragStart={isNotNumResultDraggble ? null : dragStartHandler}
                onDragEnd={isNotNumResultDraggble ? null : onDragEnd}
                draggable={!isNotNumResultDraggble}
                shadow={isNotNumResultDraggble ? 'none' : null}
                disabled={activBtn}
              />
            </div>
          ) : null}
        </div>

        <div className="btn-wrapper">
          <div className="form_toggle">
            <div className="form_toggle-item item-1">
              <input id="fid-1" type="radio" name="control" value="Runtime" onChange={() => setRuntime(false)} />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="fid-1">
                <i>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginBottom: '-5px' }}
                  >
                    <path
                      d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z"
                      stroke="#4D5562"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z"
                      stroke="#4D5562"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                Runtime
              </label>
            </div>
            <div className="form_toggle-item item-2">
              <input
                id="fid-2"
                type="radio"
                name="control"
                value="Constructor"
                defaultChecked
                onChange={() => setRuntime(true)}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="fid-2">
                <i>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.5 8.33334L1.16666 5.00001L4.5 1.66668M9.5 1.66668L12.8333 5.00001L9.5 8.33334"
                      stroke="#4D5562"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                Constructor
              </label>
            </div>
          </div>
        </div>

        <div
          onDrop={items.length === 4 ? null : dropElemHandler}
          onDragOver={items.length === 4 ? null : dragOverHandler}
        >
          {items.length !== 0 ? (
            items?.map(id => {
              if (id === IDS.DISPLAY) {
                return (
                  <Display
                    key={IDS.DISPLAY}
                    shadow={isDisplayDraggble ? null : 'none'}
                    onDragStart={dragStartOnBoard}
                    draggable={items.indexOf(IDS.DISPLAY === 0)}
                    onDrop={dropAndChangeIds}
                  />
                )
              }
              if (id === IDS.NUMPAD) {
                return (
                  <NumPad
                    disabled={activBtn}
                    key={IDS.NUMPAD}
                    shadow={isNotNumPadDraggble ? 'none' : null}
                    draggable
                    onDragStart={dragStartOnBoard}
                    onDragOver={dragOverOnBoard}
                    onDrop={dropAndChangeIds}
                    // onDragEnd={dragEndOnBoard}
                    onDragLeave={dragEndOnBoard}
                    onDoubleClick={deleteItem}
                  />
                )
              }
              if (id === IDS.SINGS) {
                return (
                  <Sings
                    key={IDS.SINGS}
                    shadow={isNotNumSingsDraggble ? 'none' : null}
                    disabled={activBtn}
                    draggable
                    onDragStart={dragStartOnBoard}
                    onDragOver={dragOverOnBoard}
                    onDrop={dropAndChangeIds}
                    // onDragEnd={dragEndOnBoard}
                    onDragLeave={dragEndOnBoard}
                  />
                )
              }
              if (id === IDS.RESULT) {
                return (
                  <Result
                    key={IDS.RESULT}
                    disabled={activBtn}
                    shadow={isNotNumResultDraggble ? 'none' : null}
                    draggable
                    onDragStart={dragStartOnBoard}
                    onDragOver={dragOverOnBoard}
                    onDrop={dropAndChangeIds}
                    // onDragEnd={dragEndOnBoard}
                    onDragLeave={dragEndOnBoard}
                  />
                )
              }
              return null
            })
          ) : (
            <ConstructorPanel />
          )}
        </div>
      </div>
    </div>
  )
}

export default Main
