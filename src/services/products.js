const url = 'https://fakestoreapi.com/products'

export const getProducts = async() => {
  const res = await fetch(url)
  const data = await res.json()
  return(data)
}

export const getProductById = async (id) => {
  const res = await fetch(`${url}/${id}`)
  const data = await res.json()
  return(data)
}

