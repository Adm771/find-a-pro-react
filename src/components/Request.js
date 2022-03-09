import React from 'react'
import Button100 from './Button100';

const Request = ({request}) => {
  return (
    <div className='request' style={request.archived ? {color:"grey"} : {color:"black" }}> 
        <p> Request id: {request.requestId}</p> 
        <p> Request title: {request.title}</p>
        <p> Max salary rate: {request.payment}</p>
        <p> Request description: {request.description}</p>
        <p> Request published on: {request.publishedOn}</p>
        <p> {request.archived ? "Request archived" : "Request active"}</p>
        <p> Service category id: {request.serviceCategoryId}</p>
        <p> Post code: {request.postCode}</p>
        <p> Day and time slot: {request.daySlot} {request.timeSlot}</p>
        <p> User id: {request.userId}</p>
        <div >
       <Button100 text={"Offer your service to another customer"} color={"black"}/>
        </div>
    </div>
  )
}

export default Request;
