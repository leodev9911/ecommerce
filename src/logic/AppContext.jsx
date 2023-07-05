import React from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [products, setProducts] = React.useState([])
    const [cart, setCart] = React.useState([])
    const [openProductDetail, setOpenProductDetail] = React.useState(false)
    const [openDropdownMenu, setOpenDropdownMenu] = React.useState(false)
    const [openMobileMenu, setOpenMobileMenu] = React.useState(false)
    const [openShoppingCart, setOpenShoppingCart] = React.useState(false)
    const [productDetail, setProductDetail] = React.useState(null)
    // const [carIndex, setCarIndex] = React.useState(null)

    const API = 'https://fakestoreapi.com/products'
        
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
        console.log(newCart.length)
    }
    const deleteProductCart = (index) => {
        const deleteProductCart = [...cart]
        // const indexProductCart = deleteProductCart.findIndex(
        //     product => product.id === product.id
        // )
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
            products,
            setProducts,
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

