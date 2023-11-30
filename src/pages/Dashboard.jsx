import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { useContext } from 'react'
import { MenusContext } from '../context/MenusContext'
import { MobileMenuContainer } from '../containers/MobileMenuContainer'
import { DropdownMenu } from '../components/DropdownMenu'

export default function Dashboard () {
  const {
    menus
  } = useContext(MenusContext)

  return (
    <>
      <header>
        <Header />
        {menus.openMobileMenu ? (<MobileMenuContainer />) : null}
      </header>
      <main>
        <section className='dashboard-section'>
          <Outlet />
        </section>
        {menus.openDropdownMenu ? <DropdownMenu /> : null}
      </main>
    </>
  )
}
