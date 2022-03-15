import UserContext from '../contexts/UserContextProvider'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const LogOn = () => {

  const [email, setEmai] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  const { users, loggedUser, setLoggedUser } = useContext(UserContext)

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(users)
    const verifiedUser = await users.filter(dataUser => dataUser.email === email && dataUser.password === password)[0];
    setLoggedUser(verifiedUser)
    
    navigate("/customerRequests")
  }

  return (
    <div>
        <Header title="Log in"/>
        < form className="form-control">
          <input value={email} type="text" placeholder="Login" onChange={(e) => setEmai(e.target.value)}></input>
          <input value={password} type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
          <input type="submit" value="Log in" onClick={onSubmit}></input>
        </form>
    </div>
  )
}

export default LogOn
