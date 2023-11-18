import './ProductCard.css'
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg'

export const ProductCard = ({
  title,
  id,
  image,
  price,
  product,
  handleAddToCart,
  showProductDetail
}) => {
  const handleClick = item => {
    handleAddToCart(item)
  }

  return (
    <article className='card' key={id}>
      <img src={image} alt={title} onClick={() => showProductDetail(id)} />
      <div className='card-below__container'>
        <div className='card-text__container'>
          <p className='roboto-text'>${price}</p>
          <p>{title}</p>
        </div>
        <figure className='car-icon' onClick={() => handleClick(product)}>
          <img src={iconAddToCart} alt='Add to cart icon' />
        </figure>
      </div>
    </article>
  )
}
