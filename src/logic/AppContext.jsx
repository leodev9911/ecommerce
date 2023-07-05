import React from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [cart, setCart] = React.useState([])
    const [openProductDetail, setOpenProductDetail] = React.useState(false)
    const [openDropdownMenu, setOpenDropdownMenu] = React.useState(false)
    const [openMobileMenu, setOpenMobileMenu] = React.useState(false)
    const [openShoppingCart, setOpenShoppingCart] = React.useState(false)

    const API = 'https://api.escuelajs.co/api/v1/products'
    const [products, setProducts] = React.useState([])
 
    React.useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(response => {
                setProducts(response)
            })
            .catch(err => console.error(err))
    }, [])

    const handleAddToCart = (payload) => {
        const newCart = [...cart, payload]
        setCart(newCart)
    }
    const deleteProductCart = () => {
        const deleteProductCart = [...cart]
        const indexProductCart = deleteProductCart.findIndex(
            product => product.id === product.id
        )
        deleteProductCart.splice(indexProductCart, 1)
        setCart(deleteProductCart)
    }

    console.log(cart)

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
            products,
            setProducts,
            deleteProductCart
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

