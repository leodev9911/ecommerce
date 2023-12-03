import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import './MobileMenuContainer.css'
import { useMenusActions } from '../hooks/useMenuActions'

export const MobileMenuContainer = () => {
  const { user, handleLogOut } = useAuth()
  const { closeAllMenus } = useMenusActions()
  const locaction = useLocation().pathname

  return (
    <section className='mobile-menu__container inactive'>
      <ul className='first-list__container'>
        <li>CATEGORIES</li>
        <li><a href=''>All</a></li>
        <li><a href=''>Clothes</a></li>
        <li><a href=''>Electronics</a></li>
        <li><a href=''>Furnitures</a></li>
      </ul>
      <ul className='second-list__container'>
        {user && <li><a href=''>My orders</a></li>}
        {user && <li><a href=''>My account</a></li>}
      </ul>
      <ul className='third-list__container'>
        {user && <li className='email-text'>{user.email}</li>}
        {user === null
          ? <li><Link to='/Login' className='green-text' onClick={closeAllMenus}>Log in</Link></li>
          : <li>
              <button
                className='red-text'
                onClick={() => {
                  handleLogOut()
                  closeAllMenus()
                }}
              >
                Sign out
              </button>
            </li>}
        {user?.role === 'admin' &&
          <li>
            <Link
              to={locaction === '/' ? '/Dashboard/Products' : '/'}
              onClick={closeAllMenus}
              className='green-text'
            >
              {locaction === '/' ? 'Dashboard' : 'Home'}
            </Link>
          </li>}
      </ul>
    </section>
  )
}
