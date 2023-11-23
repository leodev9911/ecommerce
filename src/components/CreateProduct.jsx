import { useState } from 'react'
import placeholder from '../assets/img/placeholder.png'
import closeIcon from '../assets/icons/dashboard-close-icon.svg'
import './CreateProduct.css'
import axios from 'axios'

export default function CreateProduct ({ setFormIsActive, subcategories, categories }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    productCategorie: 'None',
    productSubcategorie: 'None'
  })
  const [file, setFile] = useState()
  const [imageUpload, setImageUpload] = useState()
  console.log(formData)

  const uploadImage = (event) => {
    setImageUpload(URL.createObjectURL(event.target.files[0]))
    setFile(event.target.files)
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData12 = new FormData()

    formData12.append('files', file[0])
    axios.post('http://localhost:1337/api/upload', formData12)
      .then((response) => {
        const imageId = response.data[0].id
        axios.post('http://localhost:1337/api/products', {
          data: {
            title: formData.title,
            description: formData.description,
            price: formData.price,
            image: imageId
          }
        })
          .then((response) => {
            const productId = response.data.data.id
            if (formData.productCategorie !== 'None' && formData.productSubcategorie !== 'None') {
              axios.put(`http://localhost:1337/api/products/${productId}`, {
                data: {
                  categories: [Number(formData.productCategorie)],
                  subcategories: [Number(formData.productSubcategorie)]
                }
              })
            }
          })
          .catch((error) => console.error(error))
      })
      .catch((error) => {
        console.error(error)
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
