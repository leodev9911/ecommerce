import './ProductCardSection.css'

export const ProductCardSection = ({ children }) => {
  return (
    <section className='card__container'>
      {children}
    </section>
  )
}
