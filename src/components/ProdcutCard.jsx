import './ProductCard.css'
// import fridge from '../assets/img/fridge.png'
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg'
import React from 'react'
import { AppContext } from '../logic/AppContext'

export const ProductCard = () => {
    const { 
        handleAddToCart,
        setOpenProductDetail,
        setOpenDropdownMenu,
        setOpenMobileMenu,
        setOpenShoppingCart,
        products
     } = React.useContext(AppContext)

     const handleClick = item => {
        handleAddToCart(item)
     }

    return (
        products.slice(0, 20).map(product => (
            <article className="card" key={product.id}>
                <img src={product.category.image} alt={product.title} onClick={() => {
                    setOpenProductDetail(openProductDetail => !openProductDetail)
                    setOpenDropdownMenu(false)
                    setOpenMobileMenu(false)
                    setOpenShoppingCart(false)
                }}/>
                <div className="card-below__container">
                    <div className="card-text__container">
                        <p className="roboto-text">${product.price}</p>
                        <p>{product.title}</p>
                    </div>
                    <figure className="car-icon" onClick={() => handleClick(product)}>
                        <img src={iconAddToCart} alt=""/>
                    </figure>
                </div>
            </article>
        ))
    )
}