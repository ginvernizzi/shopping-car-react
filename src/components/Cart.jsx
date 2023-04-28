import { useContext, useEffect } from 'react'
import CartContext from '../context/CartProvider'
import { Table } from "react-bootstrap";

const Cart = () => {
  const [cart, cartDispatch] = useContext(CartContext)
  // alert(JSON.stringify(cart))

  const onHandleDelete = (id) => {
    cartDispatch({ type: "delete", payload: { id } })
  }

  // useEffect(() => {
  //   // localStorage.setItem("products-cart", JSON.stringify(cart))
  // }, [cart])

  return (
    <div className='navbar container' style={{ padding: '5px', display: 'flex', justifyContent: 'center', height: 'auto' }}>
      <h3>Carrito</h3>
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
            cart.products.map((prod) =>
            (
              <tr key={prod.productId} style={{ textAlign: 'left' }}>
                <td>{prod.title} </td>
                <td>{prod.price} </td>
                <td>{prod.quantity} </td>
                <td><button onClick={() => onHandleDelete(prod.id)} className='btn-eliminar'>-</button></td>
              </tr>
            )
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Cart