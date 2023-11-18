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
import CreateProduct from '../components/CreateProduct'
import { useAuth } from '../hooks/auth'
export const Home = () => {
  const {
    openProductDetail,
    openDropdownMenu,
    openMobileMenu,
    openShoppingCart,
    handleAddToCart,
    showProductDetail,
    productDetail,
    setOpenDropdownMenu,
    setOpenMobileMenu,
    setOpenProductDetail,
    setOpenShoppingCart,
    cart,
    deleteProductCart,
    products
  } = useContext(AppContext)

  const { user } = useAuth()

  return (
    <section className='home'>
      <header>
        <Header
          setOpenProductDetail={setOpenProductDetail}
          setOpenDropdownMenu={setOpenDropdownMenu}
          setOpenMobileMenu={setOpenMobileMenu}
          setOpenShoppingCart={setOpenShoppingCart}
          cart={cart}
        />
        {openMobileMenu ? (<MobileMenuContainer />) : null}
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
          {openProductDetail ? <ProductDetail setOpenProductDetail={setOpenProductDetail} productDetail={productDetail} /> : null}
          {openDropdownMenu ? <DropdownMenu /> : null}
          {openShoppingCart
            ? (
              <ShoppingCartAside>
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
        {user?.role === 'admin' && <CreateProduct />}
      </main>
    </section>
  )
}
