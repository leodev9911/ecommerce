import { useContext } from 'react'
import { DropdownMenu } from '../components/DropdownMenu'
import { Header } from '../components/Header'
import { ProductCard } from '../components/ProdcutCard'
import { ProductDetail } from '../containers/ProductDetail'
import { ProductCardSection } from '../containers/ProductCardSection'
import { ShoppingCartAside } from '../containers/ShoppingCartAside'
import { ShoppingCartProductCard } from '../components/ShoppingCartProductCard'
import { TotalCardShoppingCart } from '../components/TotalCardShoppingCart'
import { MobileMenuContainer } from '../containers/MobileMenuContainer'
import { AppContext } from '../context/AppContext'
import { MenusContext } from '../context/MenusContext'
import CategoryFilters from '../components/CategoryFilter'
import { useFilters } from '../hooks/useFilters'
import { useAppSelector } from '../hooks/useStore'
import { Toaster } from 'sonner'

export const Home = () => {
  const {
    showProductDetail,
    productDetail,
    products
  } = useContext(AppContext)

  const cart = useAppSelector(state => state.cart)
  console.log(cart)

  const {
    handleProductDetail,
    handleShoppingCart,
    menus
  } = useContext(MenusContext)

  const { filteredProducts, handleOnChangeFilter } = useFilters(products)

  return (
    <section className='home'>
      <header>
        <Header
          cart={cart}
        />
        {menus.openMobileMenu ? (<MobileMenuContainer />) : null}
      </header>
      <main>
        <CategoryFilters
          handleOnChangeFilter={handleOnChangeFilter}
        />
        <ProductCardSection>
          {filteredProducts.map(product => (
            <ProductCard
              key={product?.id}
              title={product?.title}
              id={product?.id}
              image={product?.image}
              price={product?.price}
              product={product}
              showProductDetail={showProductDetail}
            />
          ))}
          {menus.openProductDetail
            ? <ProductDetail
                handleProductDetail={handleProductDetail}
                productDetail={productDetail}
              />
            : null}
          {menus.openDropdownMenu ? <DropdownMenu /> : null}
          {menus.openShoppingCart
            ? (
              <ShoppingCartAside handleShoppingCart={handleShoppingCart}>
                <ShoppingCartProductCard
                  cart={cart}
                />
                <TotalCardShoppingCart
                  cart={cart}
                />
              </ShoppingCartAside>
              )
            : null}
        </ProductCardSection>
        <Toaster richColors />
      </main>
    </section>
  )
}
