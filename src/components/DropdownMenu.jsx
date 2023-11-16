import { useAuth } from '../hooks/auth'
import './DropdownMenu.css'

export const DropdownMenu = () => {
  const { handleLogOut } = useAuth()

  return (
    <div id='dropdown-menu' className='dropdown-menu__container inactive'>
      <ul className='dropdown__list'>
        <li><a href=''>My order</a></li>
        <li><a href=''>My account</a></li>
        <li>
          <button
            className='red-button'
            onClick={handleLogOut}
          >
            Sign out
          </button>
        </li>
      </ul>
    </div>
  )
}
