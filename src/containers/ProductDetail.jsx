import { ProductInfo } from '../components/ProductInfo'
import './ProductDetail.css'
import closeIcon from '../assets/icons/close-icon.svg'
// import fridge from '../assets/img/fridge.jpg'
import React from 'react'
import { AppContext } from '../logic/AppContext'

export const ProductDetail = () => {
    const { 
        setOpenProductDetail,
        productDetail
     } = React.useContext(AppContext)
    return (
        <aside className="product-detail__container">
            <figure className="close-icon" onClick={() => {
                setOpenProductDetail(false)
            }}>
                <img src={closeIcon} alt="A close icon"/>
            </figure>
            <figure className="product-image">
                <img src={productDetail.image} alt={productDetail.title}/>
            </figure> 
            <ProductInfo/>
        </aside>
    )
}