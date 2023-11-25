import { useContext, useState } from 'react'
import './Products.css'
import { useSizes } from '../hooks/useSizes'
import arrowDown from '../assets/icons/dashboard-arrow-down.svg'
import { FormDashboardModal } from '../containers/FormDashboardModal'
import CreateProduct from '../components/CreateProduct'
import { useCategories } from '../hooks/useCategories'
import { useFilters } from '../hooks/useFilters'
import deleteIcon from '../assets/icons/delete-icon.svg'
import editIcon from '../assets/icons/edit-icon.svg'
import { useDeleteProduct } from '../hooks/useProductDelete'
import { AppContext } from '../context/AppContext'

export default function DashboardProducts () {
  const [formIsActive, setFormIsActive] = useState(false)
  const [isForEdit, setIsForEdit] = useState(false)
  const [productToEdit, setProductToEdit] = useState()
  const { categories, subcategories } = useCategories()
  const { products, setNeedToRefresh } = useContext(AppContext)
  const { actualWidth } = useSizes()
  const { handleOnChangeFilter, filteredProducts } = useFilters(products)
  const { handleDelete } = useDeleteProduct(setNeedToRefresh)

  const handleEditProduct = (id) => {
    setProductToEdit(filteredProducts.find(product => product.id === id))

    setIsForEdit(true)
    setFormIsActive(true)
  }

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
              <div><p>Name</p></div>
              <div><p>ID</p></div>
              <div><p>Category</p></div>
              <div><p>Subcategories</p></div>
              <div><p>Price</p></div>
              <div><p>Quantity</p></div>
            </div>
            : filteredProducts?.map((product, index) => (
              <div
                className='products-table-header__section'
                key={product?.id}
              >
                <div className={`first-row ${index === 0 && 'first-header-item'}`}><p>Name</p></div>
                <div><p>ID</p></div>
                <div><p>Category</p></div>
                <div><p>Subcategories</p></div>
                <div><p>Price</p></div>
                <div><p>Quantity</p></div>
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
                <div className='left-column'>
                  <p>{product?.title}</p>
                </div>
                <div className='right-column'>
                  <img src={product?.image} alt={product?.title} />
                  <img
                    src={deleteIcon}
                    alt='Delete icon'
                    className='action-icon'
                    onClick={() => handleDelete(product?.id)}
                  />
                  <img
                    src={editIcon}
                    alt='Edit icon'
                    className='action-icon'
                    onClick={() => handleEditProduct(product?.id)}
                  />
                </div>
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
            setIsForEdit={setIsForEdit}
            isForEdit={isForEdit}
            subcategories={subcategories}
            categories={categories}
            productToEdit={productToEdit}
            setNeedToRefresh={setNeedToRefresh}
          />
        </FormDashboardModal>}
    </>
  )
}
