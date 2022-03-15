import React from 'react'
import Button100 from './Button100'
import Button from './Button'
import { useNavigate } from "react-router-dom";

const Offer = ({offer}) => {

  const navigate = useNavigate();
  
  return (
    <div className='offer'>
      <h3>
      {/* <p> Handyman id: {offer.handymanId}</p> */}
      <h1> Offer title: {offer.title}</h1>
      {/* <p> Offer category id's: {offer.serviceCategoryId}</p> */}
      {/* <p> Post code: {offer.postCode}</p> */}
      {/* <p> Min salary rate: {offer.payment}</p> */}
      <h2> Offer description: {offer.description}</h2>
      </h3>
      <div className='btnContainer'> 
          <Button text={"Send request to handyman"} color={"green"} />
          <Button text={"Back to request details"} color={"red"} />
          <Button text={"Show offer and handyman details"} color={"grey"} onClick={()=>{navigate(`/offer/${offer.offerId}`)}}/>
      </div>
    </div>
  )}

export default Offer;
