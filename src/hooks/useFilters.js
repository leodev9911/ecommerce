import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

export function useFilters () {
  const [filters, setFilters] = useState({
    category: 'All'
  })
  const { products } = useContext(AppContext)

  const handleOnChangeFilter = (event) => {
    const { name, value } = event.target

    setFilters(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const filterProducts = (products) => {
    return products.filter(product => {
      if (filters.category !== 'All') {
        return filters.category === product?.attributes?.categories?.data[0]?.attributes?.name
      }
      return product
    })
  }

  const filteredProducts = filterProducts(products)

  return { handleOnChangeFilter, filteredProducts }
}
