import { addToCart, deletefromCart } from '../store/cart/slice'
import { useAppDispatch } from './useStore'

export const useCartActions = () => {
  const dispatch = useAppDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleDeleteProductFromCart = (id) => {
    dispatch(deletefromCart(id))
  }

  return {
    handleAddToCart,
    handleDeleteProductFromCart
  }
}
