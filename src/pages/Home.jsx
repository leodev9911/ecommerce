import { DropdownMenu } from "../components/DropdownMenu";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProdcutCard";
import { ProductDetail } from "../components/ProductDetail";
import { ProductCardSection } from "../containers/ProductCardSection";

export const Home = () => {
    return (
        <section className="home">
            <header>
                <Header/>
            </header>
            <main>
                <ProductCardSection>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductDetail/>
                    <DropdownMenu/>
                </ProductCardSection>
            </main>
        </section>
    )
}