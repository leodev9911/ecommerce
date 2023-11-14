import './ProductInfo.css'
import whiteCart from '../assets/icons/white-cart.svg'
import React from 'react'
import { AppContext } from '../context/AppContext'

export const ProductInfo = () => {
    const {
        productDetail,
        handleAddToCart
    } = React.useContext(AppContext)
  
    const handleClick = item => {
        handleAddToCart(item)
    }

    return (
        <div className="product-detail-text__container">
            <h1>${productDetail.price}</h1>
            <p>{productDetail.title}</p>
            <p className="detail-p">{productDetail.description}</p>
            <button className="product-detail__button" onClick={() => handleClick(productDetail)}>
                <figure>
                    <img src={whiteCart} alt=""/>
                </figure>
                Add to cart
            </button>
        </div>
    )
}