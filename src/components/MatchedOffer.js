import React from 'react'
import Button100 from './Button100'
import Button from './Button'

const Offer = ({offer}) => {
  return (
    <div className='offer'>
      <h3>
      <p> handyman: {offer.handymanId}</p>
      <p> services: {offer.serviceId}</p>
      <p> area: {offer.postCode}</p>
      <p> hourly salary rate: {offer.hourlySalaryRate}</p>
      <p> message: {offer.message}</p>
      </h3>
      <div className='btnContainer'> 
          <Button text={"Send request to handyman"} color={"green"} />
          <Button text={"Back to request details"} color={"red"} />
          <Button text={"Show handyman details"} color={"grey"} />
      </div>
    </div>
  )}

export default Offer;
