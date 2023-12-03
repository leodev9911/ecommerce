import { useState, createContext, useContext } from 'react'
import { useProducts } from '../hooks/useProducts'
import { MenusContext } from './MenusContext'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const { setNeedToRefresh } = useProducts(setProducts)
  const [cart, setCart] = useState([])
  const [productDetail, setProductDetail] = useState(null)
  const { handleProductDetail } = useContext(MenusContext)

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
        cart,
        products,
        productDetail,
        showProductDetail,
        setNeedToRefresh
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
