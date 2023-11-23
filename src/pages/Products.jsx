import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import './Products.css'
import { useSizes } from '../hooks/useSizes'
import arrowDown from '../assets/icons/dashboard-arrow-down.svg'
import { FormDashboardModal } from '../containers/FormDashboardModal'
import CreateProduct from '../components/CreateProduct'
import { useCategories } from '../hooks/useCategories'

export default function DashboardProducts () {
  const [formIsActive, setFormIsActive] = useState(false)
  const { categories, subcategories } = useCategories()
  const { products } = useContext(AppContext)
  const { actualWidth } = useSizes()

  return (
    <>
      <section className='dashboard-products-header'>
        <h2>List of products</h2>
        <div className='filters-container'>
          <div className='select-container'>
            <select
              name='dashboardProductsCategory'
              className='dashboard-products__category'
              id=''
            >
              <option value='All'>All</option>
              {categories?.map(categorie => {
                return <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
              })}
            </select>
            <img
              src={arrowDown}
              alt='Arrow down icon'
              className='select-arrow-down'
            />
          </div>
          <button
            className='add-product__button'
            onClick={() => setFormIsActive(true)}
          >
            + Add product
          </button>
        </div>
      </section>
      <section className='dashboard-products-table'>
        <div className='products-table__header'>
          {actualWidth > 1000
            ? <div className='products-table-header__section'>
                <div>Name</div>
                <div>ID</div>
                <div>Category</div>
                <div>Subcategories</div>
                <div>Price</div>
                <div>Quantity</div>
              </div>
            : products?.map((product, index) => (
              <div
                className='products-table-header__section'
                key={product?.id}
              >
                <div className={`first-row ${index === 0 && 'first-header-item'}`}>Name</div>
                <div>ID</div>
                <div>Category</div>
                <div>Subcategories</div>
                <div>Price</div>
                <div>Quantity</div>
              </div>
            ))}
        </div>
        <div className='products-table-row'>
          {products?.map((product, index) => (
            <div
              className='products-table-row__section'
              key={product?.id}
            >
              <div className={`first-row ${index === 0 && 'first-row-item'}`}>
                <p>{product?.attributes.title}</p>
                <img src={product?.attributes.image.data.attributes.url} alt={product?.attributes.title} />
              </div>
              <div>{product?.id}</div>
              <div>{product?.attributes?.categories?.data[0]?.attributes?.name}</div>
              <div>{product?.attributes?.subcategories?.data[0]?.attributes?.name}</div>
              <div>${product?.attributes.price}</div>
              <div className={index === products.length - 1 ? 'last-row-item' : ''}>{product?.attributes.quantity}</div>
            </div>
          ))}
        </div>
      </section>
      {formIsActive &&
        <FormDashboardModal>
          <CreateProduct
            setFormIsActive={setFormIsActive}
            subcategories={subcategories}
            categories={categories}
          />
        </FormDashboardModal>}
    </>
  )
}
