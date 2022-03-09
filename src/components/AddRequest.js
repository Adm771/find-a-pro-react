import React, { useState } from 'react'
import Button from './Button'
import { useNavigate } from "react-router-dom";
import { useAuthUserContext } from '../contexts/AuthContextProvider';

const AddRequest = () => {
  const isAuthenticatedUserValue = useAuthUserContext();
  
  const[title, setTitle]=React.useState()
  const[payment, setPayment]=React.useState()
  const[description, setDescription]=React.useState()
  const[publishedOn, setPublishedOn]=React.useState(new Date().toLocaleDateString + ' ' + new Date().toLocaleTimeString)
  const[archived, setArchived]=React.useState(false)
  const[serviceCategory, setServiceCategory]=React.useState()
  const[postCode, setPostCode]=React.useState()
  const[daySlot, setDaySlot]=React.useState('')
  const[timeSlot, setTimeSlot]=React.useState('')
  const[userId, setUserId]=React.useState(isAuthenticatedUserValue.userId)
  const[handymanId, setHandymanId]=React.useState('')
  const[confirmed, setConfirmed]=React.useState(false)

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

      console.log(isAuthenticatedUserValue)
      console.log(isAuthenticatedUserValue.id)
      const newRequest={title : title, payment : payment, description : description, publishedOn: publishedOn,
        archived: archived, serviceCategory : serviceCategory, postCode : postCode, daySlot : daySlot, 
        timeSlot : timeSlot, userId : userId, handymanId : handymanId, confirmed : confirmed}
      console.log(newRequest)
      fetch("http://localhost:8080/api/v1/requests",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newRequest)})
        .then(()=>(alert("New request added")))
        .catch((err)=>{console.log(err)})

      navigate("/")
  }
    
    const getServicesFromList = () => {
      listOfServiceCategories.map((service) => { 
            console.log(service); 
            return (<option key={service.id} value={service.id}>{service.name}</option>) 
        })
    }

    let navigate = useNavigate();

  return (
    <div id="addRequest" className="container">
        <form >
        <div className='form-control'>
              <input type="text" 
              placeholder='Set title' 
              value={title} onChange={(e) => setTitle(e.target.value)} 
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
              value={daySlot} onChange={(e) => setDaySlot(e.target.value)} 
              />
          </div>
          <div className='form-control'>
              <input type="time" 
              placeholder='Set time' 
              value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} 
              />
          </div>
          <div className='form-control'>
              <input type="number" 
              placeholder='Set max salary' 
              value={payment} onChange={(e) => setPayment(e.target.value)} 
              />
          </div>
          <div className='form-control'>
              <input type="text" 
              placeholder='Set post code' 
              value={postCode} onChange={(e) => setPostCode(e.target.value)} 
              />
          </div>
          <div>
              <textarea type="textarea" 
              placeholder='Task description' 
              value={description} onChange={(e) => setDescription(e.target.value)} 
              />
          </div>
          <input type="submit" value='Send' className='btn' onClick={onSubmit} style={{ background : "green", textAlign : "center" }} />
          <Button text={"Cancel"} color={"red"} onClick={()=>{navigate("/")}}/>
        </form>    
    </div>

  )
}

export default AddRequest
