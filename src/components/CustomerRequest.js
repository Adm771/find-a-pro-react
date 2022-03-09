import React from 'react'
import Button from './Button';
import Button100 from './Button100';
import CustomerShowRequest from './CustomerShowRequest'
import CustomerAddReview from './CustomerAddReview'
import { useNavigate } from "react-router-dom";

const CustomerRequest = ({request}) => {

  const navigate = useNavigate();

  const deleteRequest = () => {
    fetch(`http://localhost:8080/request/${request.requestId}`, 
    {method: "DELETE"})
    .then(()=>(alert("Request deleted")))
    .catch((err)=>{console.log(err)})
  }

  return (
    <>
    <div className='request' style={request.archived ? {color:"grey"} : {color:"black" }}> 
      <h1> {request.title} </h1>
      <h4>title</h4>
      <h2> {request.description}</h2>
      <h5>description</h5>
        {/* <p> id: {request.requestId}</p>  */}
        {/* <p> title: {request.title}</p> */}
        {/* <p> payment: {request.payment}</p> */}
        {/* <p> description: {request.description}</p> */}
        {/* <p> publishedOn: {request.publishedOn}</p> */}
        {/* <p> archived: {request.archived}</p> */}
        {/* <p> serviceCategoryId: {request.serviceCategoryId}</p> */}
        {/* <p> postCode: {request.postCode}</p> */}
        {/* <p> day and time: {request.daySlot} {request.timeSlot}</p> */}
        {/* <p> userId: {request.userId}</p> */}
        {/* <p> handymanId: {request.handymanId}</p> */}
        {/* <p> confirmed: {request.confirmed}</p> */}
        <div >
        {request.archived ? (<Button100 text={"Write review"} />)        
        // onClick={showAddReview} color={"black"}
        : (
          <div className='btnContainer'> 
          <Button text={"Edit request details"} color={"green"} onClick={()=>{navigate(`/request/edit/${request.requestId}`)}}/>
          <Button text={"Delete request"} color={"red"} onClick={deleteRequest}/>
          <Button text={"Show request details"} color={"grey"} onClick={()=>{navigate(`/request/${request.requestId}`)}}/>
          </div>) }
        </div>
    </div>
    </>
  )
}

export default CustomerRequest;
