import './Header.css'
import iconList from '../assets/icons/list.svg'
import arrowDown from '../assets/icons/arrow-down.svg'
import shape from '../assets/icons/shape.svg'
import { Logo } from './Logo'

const classN = 'logo-nav__container'

export const Header = () => {
    return (
        <nav className="nav__container">
            <figure className="file-icon__container">
                <img src={iconList} alt="" />
            </figure>
            <Logo classN={classN} />
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
                    <img src={arrowDown} alt="" className="arrow-down" />
                </li>
                <li className="shop-car__container">
                    <img src={shape} alt="" />
                    <span>2</span>
                </li>
            </div>
        </nav>
    )
}