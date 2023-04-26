import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import CategoriesFilter from './components/CategoriesFilter'
import PriceFilter from './components/PriceFilter'
import { parsePrice } from './utils/parsePrice'
import NavBar from './components/NavBar'

const url = 'https://fakestoreapi.com/products'

function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')


  const getProducts = async() => {
      const resp = await fetch(url)
      const data = await resp.json() 
      // console.log(data);
      setProducts(data);
  }

  useEffect(() => {
    getProducts()
  }, [])


  const setCategoryFilter = (filter) => {
    console.log("setCategoryFilter", filter);
    setCategory(filter)
  }

  const setPriceFilter = (filterPrice) => {
    console.log(filterPrice);
    setPrice(filterPrice)
  }

  let filterProducts = category !== '' ? products.filter((x) => x.category === category) : products
  filterProducts = price !== '' ? filterProducts.filter((x) => x.price >= Number(parsePrice(price).min) && x.price <= Number(parsePrice(price).max)) : filterProducts   

  if(products === []){
    return <div><h2>Cargando...</h2></div>
  }

  return (
    <div className='App'>
      <h1>Compras</h1>
      <NavBar />
      <CategoriesFilter setCategoryFilter={setCategoryFilter}/>
      <PriceFilter setPriceFilter={setPriceFilter} />
      <ProductList products={filterProducts} />
    </div>
  )
}

export default App
