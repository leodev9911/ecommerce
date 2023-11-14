import { useState, createContext } from "react"
import { useProducts } from "../hooks/useProducts"

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const { products } = useProducts()
    const [cart, setCart] = useState([])
    const [openProductDetail, setOpenProductDetail] = useState(false)
    const [openDropdownMenu, setOpenDropdownMenu] = useState(false)
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [openShoppingCart, setOpenShoppingCart] = useState(false)
    const [productDetail, setProductDetail] = useState(null)
    // const [carIndex, setCarIndex] = useState(null)

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
        setOpenProductDetail(openProductDetail => !openProductDetail)
        setOpenDropdownMenu(false)
        setOpenMobileMenu(false)
        setOpenShoppingCart(false)    
       
        const productDetailIndex =  productsDetail.findIndex(product => {
            return product.id === id
        })
        setProductDetail(productsDetail[productDetailIndex])
    }

    return(
        <AppContext.Provider value={{
            setCart,
            handleAddToCart,
            cart,
            openProductDetail,
            setOpenProductDetail,
            openDropdownMenu,
            setOpenDropdownMenu,
            openMobileMenu,
            setOpenMobileMenu,
            openShoppingCart,
            setOpenShoppingCart,
            // products,
            // setProducts,
            deleteProductCart,
            productDetail,
            showProductDetail,
            // carIndex
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

