import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const persistedState = window.localStorage.getItem('__cart__state__')
  if (persistedState) {
    return JSON.parse(persistedState).cart
  } else {
    return []
  }
})()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id
      const isInCart = state.findIndex(product => product.id === id)
      if (isInCart >= 0) {
        state[isInCart].quantityInCart += 1
      } else {
        return [...state, {
          ...action.payload,
          quantityInCart: 1
        }]
      }
    },
    deletefromCart: (state, action) => {
      const id = action.payload
      return state.filter((product) => product.id !== id)
    }
  }
})

export default cartSlice.reducer

export const { addToCart, deletefromCart } = cartSlice.actions
