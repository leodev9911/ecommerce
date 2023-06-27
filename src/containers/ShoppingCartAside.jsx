import './ShoppingCartAside.css'

export const ShoppingCartAside = () => {
    <aside class="shopping-cart__container inactive">
    <div class="title__container">
        <figure>
            <img src="./assets/icons/back-arrow.svg" alt="">
        </figure>
        <h1>Shopping cart</h1>
    </div>
    <article class="card-container-aside">
        <div class="left-card__container">
            <figure>
                <img src="./assets/img/round_shelf.png" alt="">
            </figure>
            <span class="articles">Round shelf</span>
        </div>
        <div class="right-card__container">
            <p>120.00</p>
            <figure class="close-icon">
                <img src="./assets/icons/close-icon.svg" alt="">
            </figure>
        </div>
    </article>
    <article class="card-container-aside">
        <div class="left-card__container">
            <figure>
                <img src="./assets/img/round_shelf.png" alt="">
            </figure>
            <span class="articles">Round shelf</span>
        </div>
        <div class="right-card__container">
            <p>120.00</p>
            <figure class="close-icon">
                <img src="./assets/icons/close-icon.svg" alt="">
            </figure>
        </div>
    </article>
    <article class="card-container-aside">
        <div class="left-card__container">
            <figure>
                <img src="./assets/img/round_shelf.png" alt="">
            </figure>
            <span class="articles">Round shelf</span>
        </div>
        <div class="right-card__container">
            <p>120.00</p>
            <figure class="close-icon">
                <img src="./assets/icons/close-icon.svg" alt="">
            </figure>
        </div>
    </article>
    <article class="card-container-aside">
        <div class="left-card__container">
            <figure>
                <img src="./assets/img/round_shelf.png" alt="">
            </figure>
            <span class="articles">Round shelf</span>
        </div>
        <div class="right-card__container">
            <p>120.00</p>
            <figure class="close-icon">
                <img src="./assets/icons/close-icon.svg" alt="">
            </figure>
        </div>
    </article>
    <article class="total-card__container">
        <div class="left-text__container">
            <span>Total</span>
        </div>
        <p>560.00</p>
    </article>
    <div class="cart-button__container">
        <button class="shopping-cart__button">Checkout</button>
    </div>
    </aside>
}