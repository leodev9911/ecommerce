import './ProductDetail.css'

export const ProductDetail = () => {
    return (
        <aside className="product-detail__container">
            <figure className="close-icon">
                <img src="./assets/icons/close-icon.svg" alt=""/>
            </figure>
            <figure className="product-image">
                <img src="./assets/img/fridge.jpg" alt=""/>
            </figure>
            <div className="product-detail-text__container">
                <h1>$ 130,00</h1>
                <p>Retro refrigerator</p>
                <p className="detail-p">With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.</p>
                <button className="product-detail__button">
                    <figure>
                        <img src="./assets/icons/white-cart.svg" alt=""/>
                    </figure>
                    Add to cart
                </button>
            </div>
        </aside>
    )
}