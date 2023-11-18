import './TotalCardShoppingCart.css'

export const TotalCardShoppingCart = ({ cart }) => {
  const totalPrice = cart.reduce((acumulator, car) => acumulator + car?.attributes.price, 0)

  return (
    <article className='total-card__container'>
      <div className='left-text__container'>
        <span>Total</span>
      </div>
      <p>${totalPrice}</p>
    </article>
  )
}
