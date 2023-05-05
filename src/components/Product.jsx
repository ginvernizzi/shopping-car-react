/* eslint-disable react/prop-types */
import { useContext } from "react"
import UserContext from "../context/UserProvider";
import CartContext from "../context/CartProvider";

const Product = ({ product }) => {
  const [, cartDispatch] = useContext(CartContext)
  const [user,] = useContext(UserContext)

  const onAddToCart = (id, title, price) => {
    cartDispatch({ type: "add", payload: { id, title, price } })
    //guardarCartEnAPI
  }

  return (
    <div className="product">
      <div className="product-body">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <img src={product.image} alt="" />
      </div>
      <div className="product-footer">
        {user ? <button className="btn-add" onClick={() => onAddToCart(product.id, product.title, product.price)} >Add to Cart </button> : <div>Debe loguearse para agregar al carrito</div>}
      </div>
    </div>
  )
}

export default Product