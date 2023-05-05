import React, { useContext, useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { getUser, login } from '../services/users'
import UserContext from '../context/UserProvider'
import CartContext from '../context/CartProvider'

const Login = () => {
  const [username, setUsername] = useState("johnd")
  const [password, setPassword] = useState("m38rmF$")
  const [, setUser] = useContext(UserContext)
  const [cart, cartDispatch] = useContext(CartContext)

  const onHandleLogin = (e) => {
    if (username && login) {
      e.preventDefault()
      // const token = login({username, password})
      //   .then(res => res)
      getUser(1).then(res => res).then(res => {
        setUser(res.data)
        localStorage.setItem("userKey", JSON.stringify(res.data))
        cartDispatch({type: 'init', payload: {id: res.data.id}})
      })

    }
  }

  return (
    <div className='login'>
      <Form onSubmit={onHandleLogin} >
        <FormGroup >
          <h2>Login</h2>
          <FormControl type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <FormControl type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type='submit'>Login</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default Login