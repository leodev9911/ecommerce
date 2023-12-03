import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openProductDetail: false,
  openDropdownMenu: false,
  openMobileMenu: false,
  openShoppingCart: false
}

export const menusSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleOpenShoppingCart: (state) => {
      return {
        openShoppingCart: !state.openShoppingCart,
        openProductDetail: false,
        openDropdownMenu: false,
        openMobileMenu: false
      }
    },
    handleOpenDropdownMenu: (state) => {
      return {
        openDropdownMenu: !state.openDropdownMenu,
        openShoppingCart: false,
        openProductDetail: false,
        openMobileMenu: false
      }
    },
    handleOpenProductDetail: (state) => {
      return {
        openProductDetail: !state.openProductDetail,
        openShoppingCart: false,
        openDropdownMenu: false,
        openMobileMenu: false
      }
    },
    handleOpenMobileMenu: (state) => {
      return {
        openMobileMenu: !state.openMobileMenu,
        openProductDetail: false,
        openShoppingCart: false,
        openDropdownMenu: false
      }
    },
    handleCloseAllMenus: () => {
      return {
        openMobileMenu: false,
        openProductDetail: false,
        openShoppingCart: false,
        openDropdownMenu: false
      }
    }
  }

})

export default menusSlice.reducer

export const {
  handleOpenShoppingCart,
  handleOpenDropdownMenu,
  handleOpenProductDetail,
  handleOpenMobileMenu,
  handleCloseAllMenus
} = menusSlice.actions
