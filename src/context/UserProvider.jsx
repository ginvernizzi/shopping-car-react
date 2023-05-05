/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState('')
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext