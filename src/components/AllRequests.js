import React, {useContext}  from 'react'
import Request from './Request'
import Header from './Header'
import Button100 from './Button100'
import { useNavigate } from "react-router-dom";
import RequestContext from '../contexts/RequestContextProvider'

const AllRequests = () => {
  
    const {requests, getRequests} = useContext(RequestContext);
  
    React.useEffect(()=>{
      getRequests()
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
