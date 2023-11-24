import { useState, useEffect } from 'react'

const APIS_URL = 'http://localhost:1337/api'
const GET_PRODUCTS = '/products?populate[image][fields][0]=url&populate[categories][fields][0]=name&populate[subcategories][fields][0]=name'

export function useProducts () {
  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(APIS_URL + GET_PRODUCTS)
        if (res.status !== 200) {
          console.log(res.status)
        } else {
          const products = await res.json()
          const productsArray = []
          products.data.map(product => {
            productsArray.push({
              id: product.id,
              title: product.attributes.title,
              price: product.attributes.price,
              quantity: product.attributes.quantity,
              description: product.attributes.description,
              image: product.attributes.image.data.attributes.url,
              categories: product?.attributes?.categories?.data[0]?.attributes?.name,
              subcategories: product?.attributes?.subcategories?.data[0]?.attributes?.name
            })
          })

          setProducts(productsArray)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return { products }
}
