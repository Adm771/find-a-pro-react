import React from 'react'
import CustomerRequest from './CustomerRequest'
import Header from './Header'
import Button100 from './Button100'
import { useNavigate } from "react-router-dom";
import { useAuthUserContext } from '../contexts/AuthContextProvider';

const CustomerRequests = () => {
  const isAuthenticatedUserValue = useAuthUserContext();

  const[requests, setRequests]=React.useState([])
  React.useEffect(()=>{
    let userId = isAuthenticatedUserValue.userId
    fetch(`http://localhost:8080/api/v1/requests/${userId}`)
    .then(res=>res.json())
    .then((result)=>{setRequests(result)})
    // .then((result) => console.log(result))
    .catch((err)=>{console.log(err)})
  }, [])

  let navigate = useNavigate();

  return (
    <>
    <div id="customerRequests" className="container" >
      <Header title="Customers requests" />
      <Button100 color="DodgerBlue" text="Add request" onClick={()=>{navigate("/addrequest")}}/>
      {requests.map((request) => (
      <CustomerRequest key={request.requestId} request={request}/>
      ))}
    </div>
    </>
  )
}

export default CustomerRequests;
