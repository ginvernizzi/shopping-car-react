/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

const CategoriesFilter = ({setCategoryFilter}) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(resp => resp.json())
      .then(data => setCategories(data))
  }, [])

  const onHandleCategory = (e) => {
    console.log(e.target.value);
    setCategoryFilter(e.target.value)
  }

  return (
    <>
    <p style={{textAlign: 'left'}}>Categories:</p>
    <div className='filter-categories'>
      <select  name="category" onChange={onHandleCategory} >
        {
          ["Select category", ...categories] .map((cat) => <option key={cat} value={cat}>{cat}</option> )
        }
      </select>
    </div>
    </>
  )
}

export default CategoriesFilter