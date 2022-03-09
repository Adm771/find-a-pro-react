import React from 'react'
import Offer from './MatchedOffer'
import Header from './Header'

const AllOffers = () => {

  const[offers, setOffers]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/api/v1/offers")
    .then(res=>res.json())
    .then((result)=>{setOffers(result)})
    // .then((result) => console.log(result))
    .catch((err)=>{console.log(err)})
  }, [])

  return (
    <div id="allOffers" className="container">
      < Header title="All offers"/>
      {offers.map((offer) => (
        <Offer key={offer.offerId} offer={offer}/>
      ))}
    </div>
  )
  
}

export default AllOffers;
