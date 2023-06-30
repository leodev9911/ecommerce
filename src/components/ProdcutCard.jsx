import './ProductCard.css'
import fridge from '../assets/img/fridge.png'
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg'
import React from 'react'
import { AppContext } from '../logic/AppContext'

export const ProductCard = () => {
    const { 
        handleAddToCart,
        setOpenProductDetail,
        setOpenDropdownMenu,
        setOpenMobileMenu,
        setOpenShoppingCart
     } = React.useContext(AppContext)

    return (        
            <article className="card">
                <img src={fridge} alt="" onClick={() => {
                    setOpenProductDetail(openProductDetail => !openProductDetail)
                    setOpenDropdownMenu(false)
                    setOpenMobileMenu(false)
                    setOpenShoppingCart(false)
                }}/>
                <div className="card-below__container">
                    <div className="card-text__container">
                        <p className="roboto-text">$ 120,00</p>
                        <p>Retro refrigerator</p>
                    </div>
                    <figure className="car-icon" onClick={handleAddToCart}>
                        <img src={iconAddToCart} alt=""/>
                    </figure>
                </div>
            </article>
    )
}