import React from 'react'

export const initialState = {
  firstNum: 0,
  secondNum: 0,
  sign: 0,
  result: 0,
}
export const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGN':
      return {
        ...state,
        sign: action.payload,
      }
    case 'ADD_FIRST_NUM':
      return {
        ...state,
        firstNum: action.payload,
      }
    case 'ADD_SECOND_NUM':
      return {
        ...state,
        secondNum: action.payload,
      }
    case 'RESULT':
      return {
        ...state,
        result: action.payload,
      }
    default:
      return state
  }
}
