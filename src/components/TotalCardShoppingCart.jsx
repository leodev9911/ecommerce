import './TotalCardShoppingCart.css'
import { AppContext } from '../logic/AppContext'
import React from 'react'

export const TotalCardShoppingCart = () => {
    const {
        cart
    } = React.useContext(AppContext)

    const totalPrice = cart.reduce((acumulator, car) => acumulator + car.price, 0)

    return (
        <article className="total-card__container">
            <div className="left-text__container">
                <span>Total</span>
            </div>
            <p>${totalPrice}</p>
        </article>
    )
}