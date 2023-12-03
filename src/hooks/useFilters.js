import { useState } from 'react'

export function useFilters (products) {
  const [filters, setFilters] = useState({
    category: 'All'
  })

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
        return filters.category === product?.categories.name
      }
      return product
    })
  }

  const filteredProducts = filterProducts(products)

  return { filters, handleOnChangeFilter, filteredProducts }
}
