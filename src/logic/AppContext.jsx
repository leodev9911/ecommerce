import React from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [cart, setCart] = React.useState('')
    const [openProductDetail, setOpenProductDetail] = React.useState(false)
    const [openDropdownMenu, setOpenDropdownMenu] = React.useState(false)
    const [openMobileMenu, setOpenMobileMenu] = React.useState(false)
    const [openShoppingCart, setOpenShoppingCart] = React.useState(false)
 

    const handleAddToCart = () => {
        setCart('hola')
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
            setOpenShoppingCart
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

