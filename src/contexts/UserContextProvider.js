import React, { useState, useEffect, createContext } from 'react';

const UserContext = createContext()

export function UserContextProvider({children}) {
    const [users, setUsers] = useState()
    const [loggedUser, setLoggedUser] = useState()

  useEffect(() => {
    getUsers()
    }, [])

  // Get users
  const getUsers = async () => {
      const response = await fetch('http://localhost:8080/api/v1/users')
      const data = await response.json()
      setUsers(data)
    }

    return (
      <UserContext.Provider 
            value={{
                users, 
                setUsers, 
                loggedUser, 
                setLoggedUser
                }}
      >
            {children}
      </UserContext.Provider>
    );
}

export default UserContext