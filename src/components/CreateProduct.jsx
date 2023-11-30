import { useState } from 'react'
import placeholder from '../assets/img/placeholder.png'
import closeIcon from '../assets/icons/dashboard-close-icon.svg'
import './CreateProduct.css'
import { useUploadImage } from '../hooks/useUploadImage'
import { useCreateProduct } from '../hooks/useCreateProduct'
import { useEditProduct } from '../hooks/useEditProduc'

export default function CreateProduct ({
  setFormIsActive,
  subcategories,
  categories,
  setIsForEdit,
  isForEdit,
  productToEdit,
  setNeedToRefresh
}) {
  const [formData, setFormData] = useState({
    title: isForEdit ? productToEdit.title : '',
    description: isForEdit ? productToEdit.description : '',
    price: isForEdit ? productToEdit.price : '',
    quantity: 1,
    productCategorie: isForEdit ? productToEdit.categories.id : '',
    productSubcategorie: isForEdit ? productToEdit.subcategories.id : ''
  })

  const { file, imageUpload, uploadImage } = useUploadImage()
  const { handleCreateProduct } = useCreateProduct(formData, file, setFormIsActive, setNeedToRefresh)
  const { handleEditProduct } = useEditProduct(productToEdit, formData, setFormIsActive, setNeedToRefresh)

  const handleChange = (event) => {
    const { value, name } = event.target
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <section className='create-form__dashboard'>
      <div className='create-product-header'>
        <img
          src={closeIcon}
          alt='Close icon'
          onClick={() => {
            setFormIsActive(false)
            setIsForEdit(false)
          }}
          className='create-product-close-icon'
        />
        <h3>{isForEdit ? 'Edit your product' : 'Create a new product'}</h3>
      </div>
      <form className='create-new-product__form'>
        <div className='title-input'>
          <label htmlFor='title'>
            Title
          </label>
          <input
            id='title'
            type='text'
            placeholder='Add a title for your product'
            name='title'
            value={formData.title}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className='description-input'>
          <label htmlFor='description'>
            Description
          </label>
          <textarea
            id='description'
            type='text'
            placeholder='Add a description of your product here'
            name='description'
            value={formData.description}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div>
          <label htmlFor='price'>
            Price
          </label>
          <input
            id='price'
            type='text'
            placeholder='4500'
            name='price'
            value={formData.price}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div>
          <label htmlFor='quantity'>
            Quantity
          </label>
          <input
            id='quantity'
            type='text'
            placeholder='12'
            name='quantity'
            value={formData.quantity}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <select
          name='productCategorie'
          onChange={(event) => handleChange(event)}
          value={formData.productCategorie}
          className='create-product-selects'
        >
          <option value='All'>None</option>
          {categories?.map(categorie => {
            return <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
          })}
        </select>
        <select
          name='productSubcategorie'
          onChange={(event) => handleChange(event)}
          className='create-product-selects'
          value={formData.productSubcategorie}
        >
          <option value='All'>None</option>
          {subcategories?.map(subcategorie => {
            return <option key={subcategorie.id} value={subcategorie.id}>{subcategorie.name}</option>
          })}
        </select>
        <div className='file-input'>
          {imageUpload
            ? <img
                src={imageUpload}
                alt='Placeholder image'
                className='placeholder-img'
              />
            : <img
                src={isForEdit ? productToEdit.image : placeholder}
                alt='Placeholder image'
                className='placeholder-img'
              />}
          <label
            htmlFor='upload-image'
            className='upload-image__label'
          >
            Add an image
          </label>
          <input
            id='upload-image'
            type='file'
            name='image'
            onChange={(event) => uploadImage(event)}
            className='image-input'
          />
        </div>
        {isForEdit
          ? <input
              className='create-product-submit'
              value='Edit'
              type='submit'
              onClick={(event) => handleEditProduct(event)}
            />
          : <input
              className='create-product-submit'
              value='Create'
              type='submit'
              onClick={(event) => handleCreateProduct(event)}
            />}
      </form>
    </section>
  )
}
