import { useAuth } from '../hooks/auth'
import { useMenusActions } from '../hooks/useMenuActions'
import './DropdownMenu.css'

export const DropdownMenu = () => {
  const { handleLogOut } = useAuth()
  const { closeAllMenus } = useMenusActions()

  return (
    <div id='dropdown-menu' className='dropdown-menu__container inactive'>
      <ul className='dropdown__list'>
        <li><a href=''>My order</a></li>
        <li><a href=''>My account</a></li>
        <li>
          <button
            className='red-button'
            onClick={() => {
              handleLogOut()
              closeAllMenus()
            }}
          >
            Sign out
          </button>
        </li>
      </ul>
    </div>
  )
}
