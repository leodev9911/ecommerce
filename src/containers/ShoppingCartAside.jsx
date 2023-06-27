import './ShoppingCartAside.css'

export const ShoppingCartAside = ({ children }) => {
    return (
        <aside className="shopping-cart__container inactive">
            <div className="title__container">
                <figure>
                    <img src="./assets/icons/back-arrow.svg" alt=""/>
                </figure>
                <h1>Shopping cart</h1>
            </div>
            {children}
            <div className="cart-button__container">
                <button className="shopping-cart__button">Checkout</button>
            </div>
        </aside>
    )
}