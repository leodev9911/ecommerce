import { handleCloseAllMenus, handleOpenDropdownMenu, handleOpenMobileMenu, handleOpenProductDetail, handleOpenShoppingCart } from '../store/menus/slice'
import { useAppDispatch } from './useStore'

export const useMenusActions = () => {
  const dispatch = useAppDispatch()

  const handleShoppingCart = () => {
    dispatch(handleOpenShoppingCart())
  }
  const handleMobileMenu = () => {
    dispatch(handleOpenMobileMenu())
  }
  const handleProductDetail = () => {
    dispatch(handleOpenProductDetail())
  }
  const handleDropdownMenu = () => {
    dispatch(handleOpenDropdownMenu())
  }
  const closeAllMenus = () => {
    dispatch(handleCloseAllMenus())
  }

  return {
    handleMobileMenu,
    handleShoppingCart,
    handleProductDetail,
    handleDropdownMenu,
    closeAllMenus
  }
}
