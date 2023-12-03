import { useState, createContext } from 'react'
import { useProducts } from '../hooks/useProducts'
import { useMenusActions } from '../hooks/useMenuActions'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { setNeedToRefresh } = useProducts(setProducts, setLoading)
  const [cart, setCart] = useState([])
  const [productDetail, setProductDetail] = useState(null)
  const { handleProductDetail } = useMenusActions()

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
        setNeedToRefresh,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
