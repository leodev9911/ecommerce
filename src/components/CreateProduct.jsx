import { useState } from 'react'
import placeholder from '../assets/img/placeholder.png'
import closeIcon from '../assets/icons/dashboard-close-icon.svg'
import './CreateProduct.css'
import { useUploadImage } from '../hooks/useUploadImage'
import { useCreateProduct } from '../hooks/useCreateProduct'

export default function CreateProduct ({ setFormIsActive, subcategories, categories }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    productCategorie: 'None',
    productSubcategorie: 'None'
  })
  const { file, imageUpload, uploadImage } = useUploadImage()
  const { handleSubmit } = useCreateProduct(formData, file)

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
          onClick={() => setFormIsActive(false)}
          className='create-product-close-icon'
        />
        <h3>Create a new product</h3>
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
            onChange={(event) => handleChange(event)}
          />
        </div>
        <select
          name='productCategorie'
          onChange={(event) => handleChange(event)}
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
                src={placeholder}
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
        <input
          className='create-product-submit'
          type='submit'
          onClick={(event) => handleSubmit(event)}
        />
      </form>
    </section>
  )
}
