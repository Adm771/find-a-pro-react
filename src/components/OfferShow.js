import React from 'react'
import Header from './Header'
import Button from './Button';
import { useParams } from "react-router-dom";

const ShowOffer = () => {

  let { offerId } = useParams();

  const[offer, setOffer]=React.useState([])
  React.useEffect(()=>{
    fetch(`http://localhost:8080/api/v1/offer/${offerId}`)
    .then(res=>res.json())
    .then((result)=>{setOffer(result)})
    // .then((result) => console.log(result))
    getHandyman()
  }, [])

  const[proUser, setProUser]=React.useState([])

    const getHandyman = async () => {
        const response1 = await fetch(`http://localhost:8080/api/v1/user/${offer.handymanId}`)
        const data1 = await response1.json()
        console.log(data1)
        setProUser(data1)
}

  return (
    <div id="ShowOffer" className="container">
      < Header title="Offer details"/>
        <h3> Offer id: {offer.offerId}</h3> 
        <h3> Offer title: {offer.title}</h3>
        <h3> Min salary rate: {offer.payment}</h3>
        <h3> Offer description: {offer.description}</h3>
        <h3> Offer published on: {offer.publishedOn}</h3>
        <h3> {offer.archived ? "Offer archived" : "Offer active"}</h3>
        <h3> Offer category id's: {offer.serviceCategoryId}</h3>
        <h3> Post code: {offer.postCode}</h3>
        <h3> Handyman id: {offer.handymanId}</h3>
        < Header title="Handyman details"/>
        <h3> User id: {proUser.userId}</h3> 
        <h3> User first name: {proUser.firstName}</h3> 
        <h3> User last name: {proUser.lastName}</h3> 
        <h3> User description: {proUser.description}</h3> 
        <h3> User phone number: {proUser.phoneNumber}</h3> 
        <h3> User email: {proUser.email}</h3> 
    </div>
  )
}

export default ShowOffer
