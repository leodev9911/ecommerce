import './Header.css'
import iconList from '../assets/icons/list.svg'
import arrowDown from '../assets/icons/arrow-down.svg'
import shape from '../assets/icons/shape.svg'
import { useAuth } from '../hooks/auth'
import { Logo } from './Logo'
import { Link, useLocation } from 'react-router-dom'
import { useMenusActions } from '../hooks/useMenuActions'

const classN = 'logo-nav__container'

export const Header = ({
  cart
}) => {
  const { user } = useAuth()

  const {
    handleShoppingCart,
    handleDropdownMenu,
    handleMobileMenu,
    closeAllMenus
  } = useMenusActions()

  const locaction = useLocation().pathname

  return (
    <nav className='nav__container'>
      <figure className='file-icon__container'>
        <img
          src={iconList}
          alt='Hamburger menu icon'
          onClick={() => handleMobileMenu()}
        />
      </figure>
      <Logo classN={classN} />
      <div className='nav-right__container'>
        <li>
          {user !== null ? <p>{user.email}</p> : <Link to='/Login'>Log in</Link>}
          {user &&
            <img
              src={arrowDown}
              alt='Arrow down icon'
              className='arrow-down'
              onClick={() => handleDropdownMenu()}
            />}
          {user?.role === 'admin' &&
            <Link
              className='dashboard-link'
              to={locaction === '/' ? '/Dashboard/Products' : '/'}
              onClick={closeAllMenus}
            >
              {locaction === '/' ? 'Dashboard' : 'Home'}
            </Link>}
        </li>
        {user?.role !== 'admin' &&
          <li
            className='shop-car__container'
            onClick={() => {
              handleShoppingCart()
            }}
          >
            <img src={shape} alt='Cart icon' />
            {cart?.length > 0 ? <span>{cart.length}</span> : null}
          </li>}
      </div>
    </nav>
  )
}
