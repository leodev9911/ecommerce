import React from "react"
import { DropdownMenu } from "../components/DropdownMenu"
import { Header } from "../components/Header"
import { ProductCard } from "../components/ProdcutCard"
import { ProductDetail } from "../containers/ProductDetail"
import { ProductCardSection } from "../containers/ProductCardSection"
import { ShoppingCartAside } from "../containers/ShoppingCartAside";
import { ShoppingCartProductCard } from "../components/ShoppingCartProductCard"
import { TotalCardShoppingCart } from "../components/TotalCardShoppingCart"
import { MobileMenuContainer } from "../containers/MobileMenuContainer"
import { AppContext } from "../logic/AppContext"

export const Home = () => {
    const {
        openProductDetail,
        openDropdownMenu,
        openMobileMenu,
        openShoppingCart
    } = React.useContext(AppContext)

    return (
        <section className="home">
            <header>
                <Header/>
                {openMobileMenu ? (<MobileMenuContainer/>) : null}
            </header>
            <main>
                <ProductCardSection>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    {openProductDetail ? (<ProductDetail/>) : null}
                    {openDropdownMenu ? (<DropdownMenu/>) : null}
                    {openShoppingCart ? (<ShoppingCartAside>
                        <ShoppingCartProductCard/>
                        <ShoppingCartProductCard/>
                        <ShoppingCartProductCard/>
                        <TotalCardShoppingCart/>
                    </ShoppingCartAside>) : null}
                </ProductCardSection>
            </main>
        </section>
    )
}