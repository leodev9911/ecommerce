import './Header.css'

export const Header = () => {
    return (
        <nav className="nav__container">
            <figure className="file-icon__container">
                <img src="./assets/icons/list.svg" alt="" />
            </figure>
            <figure className="logo-nav__container">
                <img src="./assets/img/logo_yard_sale.svg" alt="" />
            </figure>
            <ul className="nav-left__container">
                <li className=".green-list__item"><a href="" className="green-list__item-a">All</a></li>
                <li><a href="">Clothes</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Furnitures</a></li>
                <li><a href="">Toys</a></li>
                <li><a href="">Others</a></li>
            </ul>
            <div className="nav-right__container">
                <li>
                    <p>leonardo@gmail.com</p>
                    <img src="./assets/icons/arrow-down.svg" alt="" className="arrow-down" />
                </li>
                <li className="shop-car__container">
                    <img src="./assets/icons/shape.svg" alt="" />
                    <span>2</span>
                </li>
            </div>
        </nav>
    )
}