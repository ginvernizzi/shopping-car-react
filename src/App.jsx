import { useContext, useEffect, useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import CategoriesFilter from './components/CategoriesFilter'
import PriceFilter from './components/PriceFilter'
import { parsePrice } from './utils/parsePrice'
import Cart from './components/Cart'
import { getProducts } from './services/products'
import NavBar from './components/NavBar'
import Login from './components/Login'
import UserContext from './context/UserProvider'


function App() {
  const [user,] = useContext(UserContext)
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
      const traerProducts = async () => {
        const allProducts = await getProducts()
        setProducts(allProducts);
      }
      traerProducts()
  }, [])  

  const setCategoryFilter = (filter) => {
    setCategory(filter)
  }

  const setPriceFilter = (filterPrice) => {
    setPrice(filterPrice)
  }

  let filterProducts = category !== '' ? products.filter((x) => x.category === category) : products
  filterProducts = price !== '' ? filterProducts.filter((x) => x.price >= Number(parsePrice(price).min) && x.price <= Number(parsePrice(price).max)) : filterProducts   

  if(products === null){
    return <div><h2>Cargando...</h2></div>
  }

  return (
    <div className='App'>
      <NavBar user={user} setShowCart={setShowCart} showCart={showCart}  />
      { showCart && <Cart setShowCart={setShowCart} showCart={showCart}/> }      
      {!user && <Login /> }
      <CategoriesFilter setCategoryFilter={setCategoryFilter}/>
      <PriceFilter setPriceFilter={setPriceFilter} />
      <ProductList products={filterProducts} />
    </div>
  )
}

export default App
