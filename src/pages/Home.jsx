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
export const Home = () => {
  const {
    handleAddToCart,
    showProductDetail,
    productDetail,
    cart,
    deleteProductCart,
    products
  } = useContext(AppContext)

  const {
    handleProductDetail,
    handleShoppingCart,
    handleDropdownMenu,
    handleMobileMenu,
    menus
  } = useContext(MenusContext)

  return (
    <section className='home'>
      <header>
        <Header
          handleDropdownMenu={handleDropdownMenu}
          handleMobileMenu={handleMobileMenu}
          handleShoppingCart={handleShoppingCart}
          cart={cart}
        />
        {menus.openMobileMenu ? (<MobileMenuContainer />) : null}
      </header>
      <main>
        <ProductCardSection>
          {products.map(product => (
            <ProductCard
              key={product?.id}
              title={product?.attributes.title}
              id={product?.id}
              image={product?.attributes.image.data.attributes.url}
              price={product?.attributes.price}
              product={product}
              handleAddToCart={handleAddToCart}
              showProductDetail={showProductDetail}
            />
          ))}
          {menus.openProductDetail ? <ProductDetail handleProductDetail={handleProductDetail} productDetail={productDetail} /> : null}
          {menus.openDropdownMenu ? <DropdownMenu /> : null}
          {menus.openShoppingCart
            ? (
              <ShoppingCartAside handleShoppingCart={handleShoppingCart}>
                <ShoppingCartProductCard
                  cart={cart}
                  deleteProductCart={deleteProductCart}
                />
                <TotalCardShoppingCart
                  cart={cart}
                />
              </ShoppingCartAside>
              )
            : null}
        </ProductCardSection>
      </main>
    </section>
  )
}
