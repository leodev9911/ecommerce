import axios from 'axios'

const APIS_URL = 'http://localhost:1337/'
const UPLOAD_ENDPOINT = 'api/upload'
const POST_ENDPOINT = 'api/products'

export function useCreateProduct (formData, file, setFormIsActive, setNeedToRefresh) {
  const handleCreateProduct = async (event) => {
    event.preventDefault()
    const formData12 = new FormData()
    formData12.append('files', file[0])

    axios.post(`${APIS_URL}${UPLOAD_ENDPOINT}`, formData12)
      .then((response) => {
        const imageId = response.data[0].id
        axios.post(`${APIS_URL}${POST_ENDPOINT}`, {
          data: {
            title: formData.title,
            description: formData.description,
            price: formData.price,
            image: imageId,
            quantity: formData.quantity
          }
        })
          .then((response) => {
            console.log(response)
            const productId = response.data.data.id
            if (formData.productCategorie !== '') {
              axios.put(`${APIS_URL}${POST_ENDPOINT}/${productId}`, {
                data: {
                  categories: [Number(formData.productCategorie)]
                }
              })
                .then(response => {
                  if (formData.productSubcategorie === '') {
                    console.log(response)
                    setNeedToRefresh(prev => !prev)
                  }
                })
                .then(response => {
                  if (formData.productSubcategorie === '') {
                    setFormIsActive(false)
                  }
                })
            }
            if (formData.productSubcategorie !== '') {
              axios.put(`${APIS_URL}${POST_ENDPOINT}/${productId}`, {
                data: {
                  subcategories: [Number(formData.productSubcategorie)]
                }
              })
                .then(response => {
                  console.log(response)
                  setNeedToRefresh(prev => !prev)
                })
                .then(setFormIsActive(false))
            }
          })
          .then(() => {
            if (formData.productCategorie === '' && formData.productSubcategorie === '') {
              setNeedToRefresh(prev => !prev)
            }
          })
          .then(setFormIsActive(false))
          .catch((error) => console.error(error))
      })
      .catch((error) => {
        console.error(error)
      })
    setNeedToRefresh(prev => !prev)
  }

  return { handleCreateProduct }
}
