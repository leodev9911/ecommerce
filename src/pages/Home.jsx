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
import { useProducts } from '../hooks/useProducts'
import CreateProduct from '../components/CreateProduct'

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
    deleteProductCart
  } = useContext(AppContext)

  const { products } = useProducts()

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
              key={product.id}
              title={product.title}
              id={product.id}
              image={product.images[0]}
              price={product.price}
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
        <CreateProduct />
      </main>
    </section>
  )
}
