import { useState, useEffect } from 'react'

const APIS_URL = 'https://strapi-ecommerce-pgvd.onrender.com/'
const GET_PRODUCTS = 'api/products?populate[image][fields][0]=url&populate[categories][fields][0]=name&populate[subcategories][fields][0]=name'

export function useProducts (setProducts, setLoading) {
  const [needToRefresh, setNeedToRefresh] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(APIS_URL + GET_PRODUCTS)
        if (res.status !== 200) {
          console.log(res.status)
        } else {
          const products = await res.json()
          console.log(products.data)
          const productsArray = []
          products.data.map(product => {
            return productsArray.push({
              id: product.id,
              title: product.attributes.title,
              price: product.attributes.price,
              quantity: product.attributes.quantity,
              description: product.attributes.description,
              image: product.attributes.image.data.attributes.url,
              categories: {
                name: product?.attributes?.categories?.data[0]?.attributes?.name,
                id: product?.attributes?.categories?.data[0]?.id
              },
              subcategories: {
                name: product?.attributes?.subcategories?.data[0]?.attributes?.name,
                id: product?.attributes?.subcategories?.data[0]?.id
              }
            })
          })

          setProducts(productsArray)
          setLoading(false)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [needToRefresh])

  return { needToRefresh, setNeedToRefresh }
}
