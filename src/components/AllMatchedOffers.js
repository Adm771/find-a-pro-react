import React from 'react'
import MatchedOffer from './MatchedOffer'
import Header from './Header'

const AllMatchedOffers = () => {

  const[offers, setOffers]=React.useState([])
  React.useEffect(()=>{
    //TODO matched offers
    fetch("http://localhost:8080/api/v1/offers")
    .then(res=>res.json())
    .then((result)=>{setOffers(result)})
    // .then((result) => console.log(result))
    .catch((err)=>{console.log(err)})
  }, [])

  return (
    <div id="AllMatchedOffers" className="container">
      < Header title="All matching offers"/>
      {offers.map((offer) => (
        <MatchedOffer key={offer.offerId} offer={offer}/>
      ))}
    </div>
  )
}

export default AllMatchedOffers;
