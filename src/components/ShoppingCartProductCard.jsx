import './ShoppingCartProductCard.css'
import roundShelf from '../assets/img/round_shelf.png'
import closeIcon from '../assets/icons/close-icon.svg'

export const ShoppingCartProductCard = () => {
    return (
        <article className="card-container-aside">
            <div className="left-card__container">
                <figure>
                    <img src={roundShelf} alt=""/>
                </figure>
                <span className="articles">Round shelf</span>
            </div>
            <div className="right-card__container">
                <p>120.00</p>
                <figure className="close-icon">
                    <img src={closeIcon} alt=""/>
                </figure>
            </div>
        </article>
    )
}