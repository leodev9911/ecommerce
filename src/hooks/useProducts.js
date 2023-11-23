import { useState, useEffect } from 'react'

const APIS_URL = 'http://localhost:1337/api'
const GET_PRODUCTS = '/products?populate[image][fields][0]=url&populate[categories][fields][0]=name&populate[subcategories][fields][0]=name'

export function useProducts () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(APIS_URL + GET_PRODUCTS)
        if (res.status !== 200) {
          console.log(res.status)
        } else {
          const products = await res.json()
          console.log(products.data)
          setProducts(products.data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return { products }
}
