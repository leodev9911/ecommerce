import './TotalCardShoppingCart.css'
import { AppContext } from '../logic/AppContext'
import React from 'react'

export const TotalCardShoppingCart = () => {
    const {
        cart
    } = React.useContext(AppContext)

    const price = cart.map(car => {
        return car.price
    })

    console.log(price)

    const totalPrice = price.reduce((acumulator, number) => acumulator + number, 0)

    return (
        <article className="total-card__container">
            <div className="left-text__container">
                <span>Total</span>
            </div>
            <p>${totalPrice}</p>
        </article>
    )
}