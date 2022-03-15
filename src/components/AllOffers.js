import React, {useContext} from 'react'
import Offer from './Offer'
import Header from './Header'
import OfferContext from '../contexts/OfferContextProvider'

const AllOffers = () => {

  const {offers, getOffers} = useContext(OfferContext);

  React.useEffect(()=>{
   getOffers()
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
