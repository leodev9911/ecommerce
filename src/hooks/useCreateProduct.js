import axios from 'axios'

export function useCreateProduct (formData, file) {
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
            console.log(response)
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

  return { handleSubmit }
}
