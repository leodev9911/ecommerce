import { ProductInfo } from '../components/ProductInfo'
import './ProductDetail.css'
import closeIcon from '../assets/icons/close-icon.svg'

export const ProductDetail = ({
  handleProductDetail,
  productDetail
}) => {
  return (
    <aside className='product-detail__container'>
      <figure
        className='close-icon'
        onClick={() => handleProductDetail()}
      >
        <img src={closeIcon} alt='A close icon' />
      </figure>
      <figure className='product-image'>
        <img src={productDetail?.image} alt={productDetail?.title} />
      </figure>
      <ProductInfo />
    </aside>
  )
}
