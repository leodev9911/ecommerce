import { useState } from 'react'
import './Products.css'
import { useSizes } from '../hooks/useSizes'
import arrowDown from '../assets/icons/dashboard-arrow-down.svg'
import { FormDashboardModal } from '../containers/FormDashboardModal'
import CreateProduct from '../components/CreateProduct'
import { useCategories } from '../hooks/useCategories'
import { useFilters } from '../hooks/useFilters'

export default function DashboardProducts () {
  const [formIsActive, setFormIsActive] = useState(false)
  const { categories, subcategories } = useCategories()
  const { actualWidth } = useSizes()
  const { handleOnChangeFilter, filteredProducts } = useFilters()

  return (
    <>
      <section className='dashboard-products-header'>
        <h2>List of products</h2>
        <div className='filters-container'>
          <div className='select-container'>
            <select
              name='category'
              className='dashboard-products__category'
              id='dashboard-category-filter'
              onChange={handleOnChangeFilter}
            >
              <option value='All'>All</option>
              {categories?.map(categorie => {
                return <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
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
            : filteredProducts?.map((product, index) => (
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
          {filteredProducts?.map((product, index) => (
            <div
              className='products-table-row__section'
              key={product?.id}
            >
              <div className={`first-row ${index === 0 && 'first-row-item'}`}>
                <p>{product?.title}</p>
                <img src={product?.image} alt={product?.title} />
              </div>
              <div>{product?.id}</div>
              <div>{product?.categories}</div>
              <div>{product?.subcategories}</div>
              <div>${product?.price}</div>
              <div className={index === filteredProducts.length - 1 ? 'last-row-item' : ''}>{product?.quantity}</div>
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
