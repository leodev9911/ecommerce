import { useState } from 'react'

export default function CreateProduct () {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: ''
  })

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

    const res = await fetch('https://api.escuelajs.co/api/v1/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: formData.title,
        price: formData.price,
        description: formData.description,
        categoryId: 1,
        images: ['https://i.imgur.com/KQc4OZZ.jpeg']
      })
    })

    console.log(res)
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
      <input type='submit' onClick={(event) => handleSubmit(event)} />
    </form>
  )
}
