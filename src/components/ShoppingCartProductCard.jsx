import './ShoppingCartProductCard.css'
import React from 'react'
import { AppContext } from '../logic/AppContext'
import closeIcon from '../assets/icons/close-icon.svg'
// import roundShelf from '../assets/img/round_shelf.png'

export const ShoppingCartProductCard = () => {
    const {
        cart,
        deleteProductCart, 
    } = React.useContext(AppContext)

    return (
        cart.map((car, index) => (
            <article className="card-container-aside" key={index}>
                <div className="left-card__container">
                    <figure>
                        <img src={car.image} alt={car.title}/>
                    </figure>
                    <span className="articles">{car.title}</span>
                </div>
                <div className="right-card__container">
                    <p>${car.price}</p>
                    <figure className="close-icon">
                        <img src={closeIcon} alt="A close icon" onClick={() => deleteProductCart(index)}/>
                    </figure>
                </div>
            </article>
        ))
    )
}