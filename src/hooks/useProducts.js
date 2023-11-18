import { useState, useEffect } from 'react'

const API_URL1 = 'https://api.escuelajs.co/api/v1/products'

export function useProducts () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL1)
        if (res.status !== 200) {
          console.log(res.status)
        } else {
          const data = await res.json()
          console.log(data)
          setProducts(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return { products }
}
