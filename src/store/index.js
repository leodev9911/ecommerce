import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/slice'
import { toast } from 'sonner'

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action)
  window.localStorage.setItem('__cart__state__', JSON.stringify(store.getState()))
}

const addToCartMiddleware = (store) => (next) => (action) => {
  const { type, payload } = action
  next(action)
  if (type === 'cart/addToCart') {
    toast.success(`Product ${payload.title} added to cart`)
  }
}

export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
  middleware: [persistanceLocalStorageMiddleware, addToCartMiddleware]
})
