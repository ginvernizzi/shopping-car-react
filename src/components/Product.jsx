/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product-body">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <img src={product.image} alt="" />
      </div>
      <div className="product-footer">
        <button className="btn-add" >Add to Cart </button>
      </div>
    </div>
  )
}

export default Product