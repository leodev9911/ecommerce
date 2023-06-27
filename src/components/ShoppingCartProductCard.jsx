import './ShoppingCartProductCard.css'

export const ShoppingCartProductCard = () => {
    return (
        <article className="card-container-aside">
            <div className="left-card__container">
                <figure>
                    <img src="./assets/img/round_shelf.png" alt=""/>
                </figure>
                <span className="articles">Round shelf</span>
            </div>
            <div className="right-card__container">
                <p>120.00</p>
                <figure className="close-icon">
                    <img src="./assets/icons/close-icon.svg" alt=""/>
                </figure>
            </div>
        </article>
    )
}