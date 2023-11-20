import { useState } from 'react'
import axios from 'axios'

export default function CreateProduct () {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: ''
  })
  const [file, setFile] = useState()

  const tryForm = (event) => {
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

    console.log(file[0])
    const formData12 = new FormData()

    formData12.append('files', file[0])
    axios.post('http://localhost:1337/api/upload', formData12)
      .then((response) => {
        const imageId = response.data[0].id
        console.log(imageId)
        axios.post('http://localhost:1337/api/products', {
          data: {
            title: formData.title,
            description: formData.description,
            price: formData.price,
            image: imageId
          }
        })
          .then((response) => console.log(response))
          .catch((error) => console.error(error))
      })
      .catch((error) => {
        console.error(error)
      })
    // const res = await fetch('http://localhost:1337/api/products?populate[image][fields][0]=url&populate[categories][fields][0]=name&populate[subcategories][fields][0]=name', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "data": {
    //       "title": "Prueba",
    //       "description": "Probando la api de POST",
    //       "price": 23,
    //       // "categories": "Armaduras",
    //       // "subcategories": "Armaduras 2 en 1"
    //   }
    //   })
    // })
    // console.log(res.status)
    // console.log(res)

    // const res = await fetch('https://api.escuelajs.co/api/v1/products/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title: formData.title,
    //     price: formData.price,
    //     description: formData.description,
    //     categoryId: 1,
    //     images: ['https://i.imgur.com/KQc4OZZ.jpeg']
    //   })
    // })

    // console.log(res)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='title'
        name='title'
        onChange={(event) => handleChange(event)}
      />
      <input
        type='text'
        placeholder='description'
        name='description'
        onChange={(event) => handleChange(event)}
      />
      <input
        type='text'
        placeholder='price'
        name='price'
        onChange={(event) => handleChange(event)}
      />
      <input
        type='text'
        placeholder='imageURL'
        name='imageURL'
        onChange={(event) => handleChange(event)}
      />
      <input
        type='file'
        name='image'
        onChange={(event) => tryForm(event)}
      />
      <input type='submit' onClick={(event) => handleSubmit(event)} />
    </form>
  )
}
