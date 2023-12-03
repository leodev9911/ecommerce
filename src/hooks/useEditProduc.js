import axios from 'axios'

const APIS_URL = 'https://strapi-ecommerce-pgvd.onrender.com/'
// const UPLOAD_ENDPOINT = 'api/upload'
const POST_ENDPOINT = 'api/products'

export function useEditProduct (
  productToEdit,
  formData,
  setFormIsActive,
  setNeedToRefresh,
  setIsForEdit,
  setCreateLoading
) {
  const handleEditProduct = async (event) => {
    event.preventDefault()
    setCreateLoading(true)

    axios.put(`${APIS_URL}${POST_ENDPOINT}/${productToEdit.id}`, {
      data: {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        quantity: formData.quantity
      }
    })
      .then((response) => {
        console.log(response)
        if (formData.productCategorie !== '') {
          axios.put(`${APIS_URL}${POST_ENDPOINT}/${productToEdit.id}`, {
            data: {
              categories: [Number(formData.productCategorie)]
            }
          })
            .then(() => {
              if (formData.productSubcategorie === '' || formData.productSubcategorie === undefined) {
                setNeedToRefresh(prev => !prev)
              }
            })
            .then(() => {
              if (formData.productSubcategorie === '' || formData.productSubcategorie === undefined) {
                setFormIsActive(false)
              }
            })
        }
        if (formData.productSubcategorie !== undefined) {
          axios.put(`${APIS_URL}${POST_ENDPOINT}/${productToEdit.id}`, {
            data: {
              subcategories: [Number(formData.productSubcategorie)]
            }
          })
            .then(() => {
              setNeedToRefresh(prev => !prev)
            })
            .then(() => {
              setFormIsActive(false)
              setCreateLoading(false)
            })
        }
      })
      .then(() => {
        if (formData.productCategorie === '' && formData.productSubcategorie === '') {
          setNeedToRefresh(prev => !prev)
        }
      })
      .then(() => {
        setFormIsActive(false)
        setCreateLoading(false)
        setIsForEdit(false)
      })
  }

  return { handleEditProduct }
}
