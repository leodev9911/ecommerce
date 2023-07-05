import './Header.css'
import iconList from '../assets/icons/list.svg'
import arrowDown from '../assets/icons/arrow-down.svg'
import shape from '../assets/icons/shape.svg'
import { Logo } from './Logo'
import { AppContext } from '../logic/AppContext'
import React from 'react'

const classN = 'logo-nav__container'

export const Header = () => {
    const {
        setOpenDropdownMenu,
        setOpenMobileMenu,
        setOpenProductDetail,
        setOpenShoppingCart,
        cart
    } = React.useContext(AppContext)

    return (
        <nav className="nav__container">
            <figure className="file-icon__container">
                <img src={iconList} alt="" onClick={() => {
                    setOpenMobileMenu(openMobileMenu => !openMobileMenu)
                    setOpenProductDetail(false)
                    setOpenShoppingCart(false)
                }}/>
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
                    <img src={arrowDown} alt="" className="arrow-down" onClick={() => {
                        setOpenDropdownMenu(openDropdownMenu => !openDropdownMenu)
                        setOpenShoppingCart(false)
                    }}/>
                </li>
                <li className="shop-car__container" onClick={() => {
                    setOpenShoppingCart(openShoppingCart => !openShoppingCart)
                    setOpenMobileMenu(false)
                    setOpenDropdownMenu(false)
                }}>
                    <img src={shape} alt="" />
                    {cart.length > 0 ? <span>{cart.length}</span> : null}
                </li>
            </div>
        </nav>
    )
}