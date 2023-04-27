/* eslint-disable react/prop-types */
import { useContext } from "react"
import CartContext from "../context/CartProvider";

const Product = ({ product }) => {
  const [, cartDispatch] = useContext(CartContext)

  const onAddToCart = (id, title, price ) => {
    cartDispatch({ type: "add", payload: { id, title, price } })
  }

  return (
    <div className="product">
      <div className="product-body">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <img src={product.image} alt="" />
      </div>
      <div className="product-footer">
        <button className="btn-add" onClick={() => onAddToCart(product.id, product.title, product.price)} >Add to Cart </button>
      </div>
    </div>
  )
}

export default Product