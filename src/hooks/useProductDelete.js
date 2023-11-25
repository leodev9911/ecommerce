import axios from 'axios'

const APIS_URL = 'http://localhost:1337/'
const DELETE_ENDPOINT = 'api/products'

export function useDeleteProduct (setNeedToRefresh) {
  const handleDelete = (id) => {
    axios.delete(`${APIS_URL}${DELETE_ENDPOINT}/${id}`)
      .then(res => {
        console.log(res)
        setNeedToRefresh(prev => !prev)
      })
  }

  return { handleDelete }
}
