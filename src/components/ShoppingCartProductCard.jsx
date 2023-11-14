import './ShoppingCartProductCard.css'
import closeIcon from '../assets/icons/close-icon.svg'

export const ShoppingCartProductCard = ({ 
    cart,
    deleteProductCart
 }) => {

    return (
        cart.map((car, index) => (
            <article className="card-container-aside" key={index}>
                <div className="left-card__container">
                    <figure>
                        <img src={car.images[0]} alt={car.title}/>
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