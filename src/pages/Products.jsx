import { useContext, useState } from 'react'
import './Products.css'
import { useSizes } from '../hooks/useSizes'
import { FormDashboardModal } from '../containers/FormDashboardModal'
import CreateProduct from '../components/CreateProduct'
import { useCategories } from '../hooks/useCategories'
import { useFilters } from '../hooks/useFilters'
import deleteIcon from '../assets/icons/delete-icon.svg'
import editIcon from '../assets/icons/edit-icon.svg'
import { useDeleteProduct } from '../hooks/useProductDelete'
import { AppContext } from '../context/AppContext'
import CategoryFilters from '../components/CategoryFilter'
import DashboardProductsLoading from '../components/DashboardProductsLoading'

export default function DashboardProducts () {
  const [formIsActive, setFormIsActive] = useState(false)
  const [isForEdit, setIsForEdit] = useState(false)
  const [productToEdit, setProductToEdit] = useState()
  const { categories, subcategories } = useCategories()
  const { products, setNeedToRefresh, loading } = useContext(AppContext)
  const { actualWidth } = useSizes()
  const { filteredProducts, handleOnChangeFilter } = useFilters(products)
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
        <CategoryFilters
          handleOnChangeFilter={handleOnChangeFilter}
        >
          <button
            className='add-product__button'
            onClick={() => setFormIsActive(true)}
          >
            + Add product
          </button>
        </CategoryFilters>
      </section>
      <section className={!loading ? 'dashboard-products-table' : ''}>
        <div className='products-table__header'>
          {loading && <DashboardProductsLoading />}
          {(actualWidth > 1000 && !loading) &&
            <div className='products-table-header__section'>
              <div><p>Name</p></div>
              <div><p>ID</p></div>
              <div><p>Category</p></div>
              <div><p>Subcategories</p></div>
              <div><p>Price</p></div>
              <div><p>Quantity</p></div>
            </div>}
          {(actualWidth < 1000 && !loading) &&
          filteredProducts?.map((product, index) => (
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
        {!loading &&
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
                <div>{product?.categories.name}</div>
                <div>{product?.subcategories.name}</div>
                <div>${product?.price}</div>
                <div className={index === filteredProducts.length - 1 ? 'last-row-item' : ''}>{product?.quantity}</div>
              </div>
            ))}
          </div>}
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
