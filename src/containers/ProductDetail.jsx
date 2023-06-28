import { ProductInfo } from '../components/ProductInfo'
import './ProductDetail.css'
import closeIcon from '../assets/icons/close-icon.svg'
import fridge from '../assets/img/fridge.jpg'

export const ProductDetail = () => {
    return (
        <aside className="product-detail__container">
            <figure className="close-icon">
                <img src={closeIcon} alt=""/>
            </figure>
            <figure className="product-image">
                <img src={fridge} alt=""/>
            </figure>
            <ProductInfo/>
        </aside>
    )
}