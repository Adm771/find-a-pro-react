import { useAuthContext, useAuthContextUpdate, useAuthUserContext, useAuthUserContextUpdate } from '../contexts/AuthContextProvider';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const LogOn = () => {

  const isAuthenticatedValue = useAuthContext();
  const isAuthenticatedValueUpdate = useAuthContextUpdate();
  const isAuthenticatedUserValue = useAuthUserContext();
  const isAuthenticatedUserValueUpdate = useAuthUserContextUpdate();

  const [email, setEmai] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  // proper logging needed - this only for creating context purposes
  const [users, setUsers] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();

    // proper async await needed
    await fetch('http://localhost:8080/api/v1/users')
    .then(response => response.json())
    .then((result) => setUsers(result))
    // .then(result => console.log(result))

    console.log(users)
    const verifiedUsers = users.filter(user => user.email === email && user.password === password);
    const verifiedUser = verifiedUsers[0]
    console.log(verifiedUsers[0]);
    console.log(verifiedUser);
    console.log(isAuthenticatedValue)
    if (verifiedUser) {
      isAuthenticatedValueUpdate()
      isAuthenticatedUserValueUpdate(verifiedUser)
      console.log(isAuthenticatedUserValue)
    }

    navigate("/customerRequests")
  }

  return (
    <div>
        {/* < Button100 text={"Customer log on"} color={"DodgerBlue"} onClick={showCustomerDashboard}/>
        < Button100 text={"Handyman log on"} color={"DodgerBlue"} onClick={showHandymanDashboard}/> */}
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
