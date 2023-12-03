import { useSizes } from '../hooks/useSizes'

export default function DashboardProductsLoading () {
  const { actualWidth } = useSizes()

  return (
    <section className='dashboard-products-table'>
      {actualWidth > 1000 &&
        <div className='products-table-header__section loading'>
          <div><p>Name</p></div>
          <div><p>ID</p></div>
          <div><p>Category</p></div>
          <div><p>Subcategories</p></div>
          <div><p>Price</p></div>
          <div><p>Quantity</p></div>
        </div>}
      {actualWidth < 1000 &&
        <div className='products-table-header__section'>
          <div className='first-row first-header-item'><p>Name</p></div>
          <div><p>ID</p></div>
          <div><p>Category</p></div>
          <div><p>Subcategories</p></div>
          <div><p>Price</p></div>
          <div><p>Quantity</p></div>
        </div>}
      <div className='products-table-row__section loading'>
        <div className='first-row'>
          <div className='left-column'>
            <p />
          </div>
          <div className='right-column'>
            <img />
            <img />
            <img />
          </div>
        </div>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  )
}
