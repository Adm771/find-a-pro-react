import React, {useContext} from 'react'
import CustomerRequest from './CustomerRequest'
import Header from './Header'
import Button100 from './Button100'
import { useNavigate } from "react-router-dom";
import UserContext from '../contexts/UserContextProvider'
import RequestContext from '../contexts/RequestContextProvider'

const CustomerRequests = () => {
  const {loggedUser} = useContext(UserContext);
  console.log(loggedUser)
  const {requestsByUserId, getRequestsByUserId} = useContext(RequestContext);

  React.useEffect(()=>{
    getRequestsByUserId(loggedUser.userId)
  }, [])

  let navigate = useNavigate();

  return (
    <>
    <div id="customerRequests" className="container" >
      <Header title="Customers requests" />
      <Button100 color="DodgerBlue" text="Add request" onClick={()=>{navigate("/addrequest")}}/>
      {requestsByUserId.map((request) => (
      <CustomerRequest key={request.requestId} request={request}/>
      ))}
    </div>
    </>
  )
}

export default CustomerRequests;
