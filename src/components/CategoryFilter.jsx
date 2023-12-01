import { useCategories } from '../hooks/useCategories'
import './CategoryFilter.css'
import arrowDown from '../assets/icons/dashboard-arrow-down.svg'

export default function CategoryFilters ({ handleOnChangeFilter, children }) {
  const { categories } = useCategories()

  return (
    <div className='filters-container'>
      <div className='select-container'>
        <select
          name='category'
          className='dashboard-products__category'
          id='dashboard-category-filter'
          onChange={handleOnChangeFilter}
        >
          <option value='All'>All</option>
          {categories?.map(categorie => {
            return <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
          })}
        </select>
        <img
          src={arrowDown}
          alt='Arrow down icon'
          className='select-arrow-down'
        />
      </div>
      {children}
    </div>
  )
}
