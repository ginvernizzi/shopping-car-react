import axios from "axios"

const url = 'https://fakestoreapi.com/products'

export const getProducts = async() => {
  const res = await fetch(url)
  const data = await res.json()
  return(data)
}

export const getProductById = (id) => {
  const res = axios.get(`${url}/${id}`)
          .then(resp => resp.data);
  return(res)
}

export const updateAddProduct = async (id, count) => {
  const res = await fetch(`${url}/${id}`, {
    method: 'patch',
    data: {
      id: id,
      rating: {        
        count: count
      }
    }
  })
  return res
}


