import { configureStore } from '@reduxjs/toolkit'

function bx24Reducer(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    bx24: bx24Reducer,
  }
})