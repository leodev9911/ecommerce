import { ProductInfo } from '../components/ProductInfo';
import './ProductDetail.css';

export const ProductDetail = () => {
    return (
        <aside className="product-detail__container">
            <figure className="close-icon">
                <img src="./assets/icons/close-icon.svg" alt=""/>
            </figure>
            <figure className="product-image">
                <img src="./assets/img/fridge.jpg" alt=""/>
            </figure>
            <ProductInfo/>
        </aside>
    )
}