import { useContext, useEffect } from 'react'
import CartContext from '../context/CartProvider'

const NavBar = () => {
  const [cart, cartDispatch] = useContext(CartContext)

  const onHandleDelete = (id) => {
    cartDispatch({ type: "delete", payload: { id } })
  }

  useEffect(() => {
    console.log("cartis",cart);
    localStorage.setItem("products-cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className='navbar' style={{ display: 'flex', justifyContent: 'center' , height: 'auto'}}>
      <table className='cart-table'>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((prod) => {
              return (
                <tr key={prod.id} style={{ textAlign: 'left' }}>
                  <td>{prod.title} </td>
                  <td>{prod.price} </td>
                  <td>{prod.count} </td>
                  <td>{prod.price * prod.count} </td>
                  <td><button onClick={() => onHandleDelete(prod.id)} className='btn-eliminar'>-</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default NavBar