import React from 'react'
import Button from './Button';

const Review = ({review}) => {
  return (
    <div className='review'> 
      <h1> {review.description} </h1>
      <h4>review</h4>
      <h2> {review.handymanId}</h2>
      <h5>handyman id</h5>
      <div>
        <Button text={"Edit"} color={"green"}/>
        <Button text={"Delete"} color={"red"}/>
        <Button text={"Show"} color={"grey"}/>
        </div>
    </div>
  )
}

export default Review;
