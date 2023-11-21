import { useState, createContext, useContext } from 'react'
import { useProducts } from '../hooks/useProducts'
import { MenusContext } from './MenusContext'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const { products } = useProducts()
  const [cart, setCart] = useState([])
  const [productDetail, setProductDetail] = useState(null)
  const { handleProductDetail } = useContext(MenusContext)

  const handleAddToCart = (payload) => {
    const newCart = [...cart, payload]
    setCart(newCart)
  }
  const deleteProductCart = (index) => {
    const deleteProductCart = [...cart]
    deleteProductCart.splice(index, 1)
    setCart(deleteProductCart)
  }

  const showProductDetail = (id) => {
    const productsDetail = [...products]
    handleProductDetail()

    const productDetailIndex = productsDetail.findIndex(product => {
      return product.id === id
    })
    setProductDetail(productsDetail[productDetailIndex])
  }

  return (
    <AppContext.Provider
      value={{
        setCart,
        handleAddToCart,
        cart,
        products,
        deleteProductCart,
        productDetail,
        showProductDetail
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
