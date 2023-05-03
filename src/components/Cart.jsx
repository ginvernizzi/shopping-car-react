import { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartProvider'
import { Table } from "react-bootstrap";

const Cart = ({showCart, setShowCart }) => {
  const [cart, cartDispatch] = useContext(CartContext)
  const [editQuantity, setEditQuantity] = useState(null)

  const onHandleDelete = (id) => {
    console.log("id", id);
    cartDispatch({ type: "delete", payload: { id } })
  }

  const onChangeQuantity = (e, id) => {
    if (e.key === 'Enter') {
      cartDispatch({ type: "update", payload: { id, quantity: e.target.value } })
      setEditQuantity(null)
    }
  }

  useEffect(() => {
    localStorage.setItem("products-cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className='cart'>
      <h3>Carro</h3>
      <Table className='cart-table' variant='dark' striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.products?.map((prod) =>
            (
              <tr key={prod.productId} style={{ textAlign: 'left' }}>
                <td>{prod.title} </td>
                <td>{prod.price} </td>
                <td onClick={() => setEditQuantity(prod.productId)}> {
                  (editQuantity !== null && prod.productId === editQuantity) ? 
                  <input className='input-quantity' type="text" onKeyDown={(e) => onChangeQuantity(e, prod.productId, 4)} defaultValue={prod.quantity} /> : 
                  prod.quantity }
                </td>
                <td><button onClick={() => onHandleDelete(prod.productId)} className='btn-eliminar'>-</button></td>
              </tr>
            )
            )
          }
        </tbody>
      </Table>
      <div>
        <button onClick={() => setShowCart(!showCart)}>Close</button>
      </div>
    </div>
  )
}

export default Cart