import { DropdownMenu } from "../components/DropdownMenu";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProdcutCard";
import { ProductDetail } from "../components/ProductDetail";
import { ProductCardSection } from "../containers/ProductCardSection";
import { ShoppingCartAside } from "../containers/ShoppingCartAside";
import { ShoppingCartProductCard } from "../components/ShoppingCartProductCard"
import { TotalCardShoppingCart } from "../components/TotalCardShoppingCart"
import { MobileMenuContainer } from "../containers/MobileMenuContainer";

export const Home = () => {
    return (
        <section className="home">
            <header>
                <Header/>
                <MobileMenuContainer/>
            </header>
            <main>
                <ProductCardSection>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductDetail/>
                    <DropdownMenu/>
                    <ShoppingCartAside>
                        <ShoppingCartProductCard/>
                        <ShoppingCartProductCard/>
                        <ShoppingCartProductCard/>
                        <TotalCardShoppingCart/>
                    </ShoppingCartAside>
                </ProductCardSection>
            </main>
        </section>
    )
}