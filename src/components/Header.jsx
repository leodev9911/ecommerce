import './Header.css'
import iconList from '../assets/icons/list.svg'
import arrowDown from '../assets/icons/arrow-down.svg'
import shape from '../assets/icons/shape.svg'
import { useAuth } from '../hooks/auth'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'

const classN = 'logo-nav__container'

export const Header = ({
  setOpenDropdownMenu,
  setOpenMobileMenu,
  setOpenProductDetail,
  setOpenShoppingCart,
  cart
}) => {
  const { user } = useAuth()

  return (
    <nav className='nav__container'>
      <figure className='file-icon__container'>
        <img
          src={iconList}
          alt='Hamburger menu icon'
          onClick={() => {
            setOpenMobileMenu(openMobileMenu => !openMobileMenu)
            setOpenProductDetail(false)
            setOpenShoppingCart(false)
          }}
        />
      </figure>
      <Logo classN={classN} />
      <ul className='nav-left__container'>
        <li
          className='.green-list__item'
        >
          <a href='' className='green-list__item-a'>All</a>
        </li>
        <li><a href=''>Clothes</a></li>
        <li><a href=''>Electronics</a></li>
        <li><a href=''>Furnitures</a></li>
      </ul>
      <div className='nav-right__container'>
        <li>
          {user !== null ? <p>{user.email}</p> : <Link to='/Login'>Log in</Link>}
          {user &&
            <img
              src={arrowDown}
              alt='Arrow down icon'
              className='arrow-down'
              onClick={() => {
                setOpenDropdownMenu(openDropdownMenu => !openDropdownMenu)
                setOpenShoppingCart(false)
              }}
            />}
        </li>
        <li
          className='shop-car__container'
          onClick={() => {
            setOpenShoppingCart(openShoppingCart => !openShoppingCart)
            setOpenMobileMenu(false)
            setOpenDropdownMenu(false)
          }}
        >
          <img src={shape} alt='Cart icon' />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </li>
      </div>
    </nav>
  )
}
