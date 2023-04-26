/* eslint-disable react/prop-types */
import Product from './Product'

const ProductList = ({products}) => {
  if(!products) {
    return <div>No se encontraron productos</div>
  }

  return (
    <div className='products-list'>
      {
        products.map(product => {
          return <Product key={product.id} product={product}/>
        })
      }
    </div>
  )
}

export default ProductList