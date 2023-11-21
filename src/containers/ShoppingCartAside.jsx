import './ShoppingCartAside.css'
import backArrow from '../assets/icons/back-arrow.svg'

export const ShoppingCartAside = ({
  handleShoppingCart,
  children
}) => {
  return (
    <aside className='shopping-cart__container'>
      <div className='title__container'>
        <figure>
          <img
            src={backArrow}
            alt='Back arrow icon'
            onClick={() => handleShoppingCart()}
          />
        </figure>
        <h1>Shopping cart</h1>
      </div>
      {children}
      <div className='cart-button__container'>
        <button className='shopping-cart__button'>Checkout</button>
      </div>
    </aside>
  )
}
