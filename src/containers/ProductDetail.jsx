import { ProductInfo } from '../components/ProductInfo'
import './ProductDetail.css'
import closeIcon from '../assets/icons/close-icon.svg'

export const ProductDetail = ({ 
    setOpenProductDetail,
    productDetail
 }) => {
    
    return (
        <aside className="product-detail__container">
            <figure className="close-icon" onClick={() => {
                setOpenProductDetail(false)
            }}>
                <img src={closeIcon} alt="A close icon"/>
            </figure>
            <figure className="product-image">
                <img src={productDetail.images[0]} alt={productDetail.title}/>
            </figure> 
            <ProductInfo />
        </aside>
    )
}