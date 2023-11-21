import { useState, createContext } from 'react'

export const MenusContext = createContext()

export default function MenusProvider ({ children }) {
  const [menus, setMenus] = useState({
    openProductDetail: false,
    openDropdownMenu: false,
    openMobileMenu: false,
    openShoppingCart: false
  })

  const handleShoppingCart = () => {
    setMenus(prev => {
      return {
        ...prev,
        openShoppingCart: !menus.openShoppingCart,
        openDropdownMenu: false,
        openMobileMenu: false
      }
    })
  }
  const handleDropdownMenu = () => {
    setMenus(prev => {
      return {
        ...prev,
        openDropdownMenu: !menus.openDropdownMenu,
        openShoppingCart: false
      }
    })
  }

  const handleProductDetail = () => {
    setMenus(prev => {
      return {
        ...prev,
        openProductDetail: !menus.openProductDetail,
        openShoppingCart: false,
        openDropdownMenu: false,
        openMobileMenu: false
      }
    })
  }

  const handleMobileMenu = () => {
    setMenus(prev => {
      return {
        ...prev,
        openMobileMenu: !menus.openMobileMenu,
        openShoppingCart: false,
        openDropdownMenu: false,
        openProductDetail: false
      }
    })
  }

  return (
    <MenusContext.Provider
      value={{
        handleShoppingCart,
        handleDropdownMenu,
        handleProductDetail,
        handleMobileMenu,
        menus
      }}
    >
      {children}
    </MenusContext.Provider>
  )
}
