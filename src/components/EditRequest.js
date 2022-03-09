import React, { useState } from 'react'
import Button from './Button'
import { useNavigate, useParams } from "react-router-dom";

const EditRequest = () => {

    let { requestId } = useParams();

    const[request, setRequest]=React.useState([])
    React.useEffect(()=>{
      fetch(`http://localhost:8080/api/v1/request/${requestId}`)
      .then(res=>res.json())
      .then((result)=>{setRequest(result)})
    //   .then((result) => console.log(result))
    }, [])

    const[title, setTitle]=React.useState(request.title)
    const[payment, setPayment]=React.useState(request.payment)
    const[description, setDescription]=React.useState(request.description)
    const[publishedOn, setPublishedOn]=React.useState(request.publishedOn)
    const[archived, setArchived]=React.useState(request.archived)
    const[serviceCategory, setServiceCategory]=React.useState(request.serviceCategory)
    const[postCode, setPostCode]=React.useState(request.postCode)
    const[daySlot, setDaySlot]=React.useState(request.daySlot)
    const[timeSlot, setTimeSlot]=React.useState(request.timeSlot)
    const[userId, setUserId]=React.useState(request.userId)
    const[handymanId, setHandymanId]=React.useState(request.handymanId)
    const[confirmed, setConfirmed]=React.useState(request.confirmed)

    const[listOfServiceCategories, setListOfServiceCategories]=React.useState([])
    React.useEffect(() => {
      // endpoint needed
      fetch("http://localhost:8080/api/v1/services")
      .then(res=>res.json())
      // .then((result) => console.log(result))
      .then(result=>{setListOfServiceCategories(result)})
      .catch((err)=>{console.log(err)})
    }, [])

  const onSubmit = (e) => {
      e.preventDefault()

      const editedRequest={title : title, payment : payment, description : description, 
        serviceCategory : serviceCategory, postCode : postCode, daySlot : daySlot, 
        timeSlot : timeSlot, userId : userId, handymanId : handymanId, confirmed : confirmed}
      console.log(editedRequest)
      fetch(`http://localhost:8080/api/v1/request/${request.requestId}`,{
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(editedRequest)})
        .then(()=>(alert("Request datails changed")))
        .catch((err)=>{console.log(err)})

        navigate("/")
  }
    
    // const getServicesFromList = () => {
    //     listOfServices.map((service) => { 
    //         console.log(service); 
    //         return (<option key={service.id} value={service.id}>{service.name}</option>) 
    //     })
    // }

    let navigate = useNavigate();

  return (
    <div id="editRequest" className="container">
        <form >
        <div className='form-control'>
              <input type="text" 
              placeholder='Set title' 
              value={request.title} onChange={(e) => setTitle(e.target.value)} 
              />
          </div>
          <div className='form-control'>
            <select name='add-service' 
              value={serviceCategory} 
              onChange={(e) => setServiceCategory(e.target.value)}>
                <option value="" disabled hidden default>Set service</option>
                {listOfServiceCategories.map((serviceCategory) => (<option key={serviceCategory.id} value={serviceCategory.id}>{serviceCategory.name}</option>) )}
            </select>
          </div>
          <div className='form-control'>
              <input type="date" 
              placeholder='Set day' 
              value={request.daySlot} onChange={(e) => setDaySlot(e.target.value)} 
              />
          </div>
          <div className='form-control'>
              <input type="time" 
              placeholder='Set time' 
              value={request.timeSlot} onChange={(e) => setTimeSlot(e.target.value)} 
              />
          </div>
          <div className='form-control'>
              <input type="number" 
              placeholder='Set max salary rate' 
              value={request.payment} onChange={(e) => setPayment(e.target.value)} 
              />
          </div>
          <div className='form-control'>
              <input type="text" 
              placeholder='Set post code' 
              value={request.postCode} onChange={(e) => setPostCode(e.target.value)} 
              />
          </div>
          <div>
              <textarea type="textarea" 
              placeholder='Task description' 
              value={request.description} onChange={(e) => setDescription(e.target.value)} 
              />
          </div>
          <input type="submit" value='Change request details' className='btn' onClick={onSubmit} style={{ background : "green", textAlign : "center" }} />
          <Button text={"Cancel"} color={"red"} onClick={()=>{navigate("/")}}/>
        </form>    
    </div>

  )
}

export default EditRequest
