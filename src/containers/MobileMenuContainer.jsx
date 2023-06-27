import './MobileMenuContainer.css'

export const MobileMenuContainer = () => {
    return (
        <section className="mobile-menu__container inactive">
            <ul className="first-list__container">
                <li>CATEGORIES</li>
                <li><a href="">All</a></li>
                <li><a href="">Clothes</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Furnitures</a></li>
                <li><a href="">Toys</a></li>
                <li><a href="">Others</a></li>
            </ul>
            <ul className="second-list__container">
                <li><a href="">My orders</a></li>
                <li><a href="">My account</a></li>
            </ul>
            <ul className="third-list__container">
                <li className="email-text">leonardo@gmail.com</li>
                <li><a href="" className="green-text">Sign out</a></li>
            </ul>
        </section>
    )
}