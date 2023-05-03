
const NavBar = ({showCart, setShowCart }) => {
  return (
    <div className='NavBar'>
        <h1>Compras</h1>
        <img onClick={() => setShowCart(!showCart)} style={{width: '50px', height: '50px'}}  src="src/assets/images/cart-svgrepo-com.svg" alt="" />
    </div>
  )
}

export default NavBar