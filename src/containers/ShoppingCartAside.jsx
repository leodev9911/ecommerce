import './ShoppingCartAside.css'
import backArrow from '../assets/icons/back-arrow.svg'
import { AppContext } from '../logic/AppContext'
import React from 'react'

export const ShoppingCartAside = ({ children }) => {
    const {
        setOpenShoppingCart
    } = React.useContext(AppContext)

    return (
        <aside className="shopping-cart__container">
            <div className="title__container">
                <figure>
                    <img src={backArrow} alt="" onClick={() => {
                        setOpenShoppingCart(false)
                    }}/>
                </figure>
                <h1>Shopping cart</h1>
            </div>
            {children}
            <div className="cart-button__container">
                <button className="shopping-cart__button">Checkout</button>
            </div>
        </aside>
    )
}