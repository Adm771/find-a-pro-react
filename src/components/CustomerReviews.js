import React from 'react'
import Review from './Review'
import Header from './Header'
import Button100 from './Button100'
import { useAuthUserContext } from '../contexts/AuthContextProvider';

const CustomerReviews = () => {
  const isAuthenticatedUserValue = useAuthUserContext();

  const[reviews, setReviews]=React.useState([])
  React.useEffect(()=>{
    let userId = isAuthenticatedUserValue.userId
    // endpoint needed
    fetch(`http://localhost:8080/api/v1/reviews/${userId}`)
    .then(res=>res.json())
    .then((result)=>{setReviews(result)})
    .catch((err)=>{console.log(err)})
    // .then((result) => console.log(result))
  }, [])

  return (
    <div id="customerReviews" className="container">
      <Header title="Customer reviews"/>
      <Button100 color="DodgerBlue" text="Add review"/>
      {reviews.map((review) => (
          <Review key={review.reviewId} review={review}/>
      ))}
    </div>
  )
}

export default CustomerReviews;
