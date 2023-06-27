import './ProductCard.css'

export const ProductCard = () => {
    return (        
            <article className="card">
                <img src="./assets/img/fridge.png" alt=""/>
                <div className="card-below__container">
                    <div className="card-text__container">
                        <p className="roboto-text">$ 120,00</p>
                        <p>Retro refrigerator</p>
                    </div>
                    <figure className="car-icon">
                        <img src="./assets/icons/bt_add_to_cart.svg" alt=""/>
                    </figure>
                </div>
            </article>
    )
}