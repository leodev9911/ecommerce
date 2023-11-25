import axios from 'axios'

const APIS_URL = 'http://localhost:1337/'
// const UPLOAD_ENDPOINT = 'api/upload'
const POST_ENDPOINT = 'api/products'

export function useEditProduct (productToEdit, formData) {
  const handleEditProduct = async (event) => {
    event.preventDefault()
    axios.put(`${APIS_URL}${POST_ENDPOINT}/${productToEdit.id}`, {
      data: {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        quantity: formData.quantity,
        categories: [Number(formData.productCategorie)],
        subcategories: [Number(formData.productSubcategorie)]
      }
    })
      .then(res => console.log(res))
  }

  return { handleEditProduct }
}
