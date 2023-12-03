import './ShoppingCartProductCard.css'
import closeIcon from '../assets/icons/close-icon.svg'
import { useCartActions } from '../hooks/useCartActions'

export const ShoppingCartProductCard = ({
  cart
}) => {
  const { handleDeleteProductFromCart } = useCartActions()

  return (
    cart.map((product, index) => (
      <article
        className='card-container-aside'
        key={index}
      >
        <div className='left-card__container'>
          <figure>
            <img src={product?.image} alt={product?.title} />
          </figure>
          <span className='articles'>{product?.title}</span>
        </div>
        <div className='right-card__container'>
          <p>${product?.price}</p>
          <figure className='close-icon'>
            <img
              src={closeIcon}
              alt='A close icon'
              onClick={() => handleDeleteProductFromCart(product.id)}
            />
          </figure>
        </div>
      </article>
    ))
  )
}
