import axios from 'axios'
import { useEffect, useState } from 'react'

const APIS_URL = 'https://strapi-ecommerce-pgvd.onrender.com/'
const CATEGORIES_ENDPOINT = 'api/categories'
const SUBCATEGORIES_ENDPOINT = 'api/subcategories'

export function useCategories () {
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${APIS_URL}${CATEGORIES_ENDPOINT}`)
        const data = response.data.data
        const categoriesArray = []
        data.forEach(categorie => {
          const { attributes } = categorie
          categoriesArray.push({
            id: categorie.id,
            name: attributes.name
          })
        })
        setCategories(categoriesArray)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchSubcategories = async () => {
      try {
        const response = await axios.get(`${APIS_URL}${SUBCATEGORIES_ENDPOINT}`)
        const data = response.data.data
        const subcategoriesArray = []
        data.forEach(subcategorie => {
          const { attributes } = subcategorie
          subcategoriesArray.push({
            id: subcategorie.id,
            name: attributes.name
          })
        })
        setSubcategories(subcategoriesArray)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCategories()
    fetchSubcategories()
  }, [])

  return { categories, subcategories }
}
