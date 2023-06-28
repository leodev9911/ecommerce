import './ProductInfo.css'
import whiteCart from '../assets/icons/white-cart.svg'

export const ProductInfo = () => {
    return (
        <div className="product-detail-text__container">
            <h1>$ 130,00</h1>
            <p>Retro refrigerator</p>
            <p className="detail-p">With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.</p>
            <button className="product-detail__button">
                <figure>
                    <img src={whiteCart} alt=""/>
                </figure>
                Add to cart
            </button>
        </div>
    )
}