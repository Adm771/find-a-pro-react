import React from 'react'
import Button from './Button'

const CustomerAddReview = (request) => {
    const[message, setMessage]=React.useState('')
    //TODO customerId
    const[customerId, setCustomerId]=React.useState(request.customerId)
    //TODO handymanId
    const[handymanId, setHandymanId]=React.useState(request.handymanId)
    const[rating, setRating]=React.useState()


    const onSubmit = (e) => {
        e.preventDefault()
        // setCustomerId(request.customerId)
        // setHandymanId(request.handymanId)
        // console.log(customerId)
        // console.log(handymanId)
        // console.log(request.customerId)
        // console.log(request.handymanId)

        const newReview={message : message, customerId : customerId, handymanId : handymanId, rating : rating}
        console.log(newReview)
        fetch("http://localhost:8080/reviews",{
          method: "POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(newReview)})
          .then(()=>(alert("New review added")))
          .catch((err)=>{console.log(err)})

          hideAddReviewForm()
        }
    
    const hideAddReviewForm = () => {
        let allRequestsContainer = document.getElementById("allRequests")
        allRequestsContainer.style.display = "inline-block"
        let addReviewContainer = document.getElementById("addReview")
        addReviewContainer.style.display = "none"
    }

  return (
    <div id="addReview" className="container">
        <form >
          <div className='form-control'>
              <input type="number" 
              placeholder='Set rating' 
              value={rating} onChange={(e) => setRating(e.target.value)} 
              />
          </div>
          <div>
              <textarea type="textarea" 
              placeholder='Write review' 
              value={message} onChange={(e) => setMessage(e.target.value)} 
              />
          </div>
          <input type="submit" value='Send' className='btn' onClick={onSubmit} style={{ background : "green", textAlign : "center" }} />
          <Button text={"Cancel"} color={"red"} onClick={hideAddReviewForm}/>
        </form>    
    </div>

  )
}

export default CustomerAddReview
