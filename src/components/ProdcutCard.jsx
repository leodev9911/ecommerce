import './ProductCard.css'
import fridge from '../assets/img/fridge.png'
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg'

export const ProductCard = () => {
    const URL = 'https://api.escuelajs.co/api/v1/products'

    fetch(URL)
        .then(response => response.json())
        .then(products => {
            console.log(products[0])
        })

    return (        
            <article className="card">
                <img src={fridge} alt=""/>
                <div className="card-below__container">
                    <div className="card-text__container">
                        <p className="roboto-text">$ 120,00</p>
                        <p>Retro refrigerator</p>
                    </div>
                    <figure className="car-icon">
                        <img src={iconAddToCart} alt=""/>
                    </figure>
                </div>
            </article>
    )
}