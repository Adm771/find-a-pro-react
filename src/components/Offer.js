import React from 'react'
import Button100 from './Button100'
import Button from './Button'

const Offer = ({offer}) => {
  return (
    <div className='offer'>
        <p> Offer id: {offer.offerId}</p> 
        <p> Offer title: {offer.title}</p>
        <p> Min salary rate: {offer.payment}</p>
        <p> Offer description: {offer.description}</p>
        <p> Offer published on: {offer.publishedOn}</p>
        <p> {offer.archived ? "Offer archived" : "Offer active"}</p>
        <p> Offer category id's: {offer.serviceCategoryId}</p>
        <p> Post code: {offer.postCode}</p>
        <p> Handyman id: {offer.handymanId}</p>
      <div className='btnContainer'> 
          <Button text={"Ask handyman"} color={"black"} />
          <Button text={"Show handyman details"} color={"grey"} />
      </div>
    </div>
  )}

export default Offer;