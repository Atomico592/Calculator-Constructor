import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from '../../store/reducer'

export const StateContext = createContext()
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>
    </div>
  )
}

export default StateProvider
