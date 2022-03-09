import React from 'react'
import Request from './Request'
import Header from './Header'
import Button100 from './Button100'
import { useNavigate } from "react-router-dom";

const AllRequests = () => {

  const[requests, setRequests]=React.useState([])
  React.useEffect(()=>{
    fetch(`http://localhost:8080/api/v1/requests/`)
    .then(res=>res.json())
    // .then((result) => console.log(result))
    .then((result)=>{setRequests(result)})
    .catch((err)=>{console.log(err)})
  }, [])

  let navigate = useNavigate();

  return (
    <div id="allRequests" className="container">
      <Header title="All requests" />
      <Button100 color="DodgerBlue" text="Add request" onClick={()=>{navigate("/addrequest")}}/>
      {requests.map((request) => (
        <Request key={request.requestId} request={request}/>
      ))}
    </div>
  )
}

export default AllRequests;
