import './ProductInfo.css'
import whiteCart from '../assets/icons/white-cart.svg'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const ProductInfo = () => {
  const {
    productDetail,
    handleAddToCart
  } = useContext(AppContext)

  const handleClick = item => {
    handleAddToCart(item)
  }

  return (
    <div className='product-detail-text__container'>
      <h1>${productDetail?.attributes.price}</h1>
      <p>{productDetail?.attributes.title}</p>
      <p className='detail-p'>{productDetail?.attributes.description}</p>
      <button className='product-detail__button' onClick={() => handleClick(productDetail)}>
        <figure>
          <img src={whiteCart} alt='Add to cart icon' />
        </figure>
        Add to cart
      </button>
    </div>
  )
}
