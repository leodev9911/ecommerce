import './ProductCard.css'
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg'
import { useCartActions } from '../hooks/useCartActions'

export const ProductCard = ({
  title,
  id,
  image,
  price,
  product,
  showProductDetail
}) => {
  const { handleAddToCart } = useCartActions()

  return (
    <article className='card'>
      <img
        src={image}
        alt={title}
        onClick={() => showProductDetail(id)}
      />
      <div className='card-below__container'>
        <div className='card-text__container'>
          <p className='roboto-text'>${price}</p>
          <p>{title}</p>
        </div>
        <figure className='car-icon' onClick={() => handleAddToCart(product)}>
          <img src={iconAddToCart} alt='Add to cart icon' />
        </figure>
      </div>
    </article>
  )
}
