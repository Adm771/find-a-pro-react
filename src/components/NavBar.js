import React, {useState, useEffect} from 'react'
import Button from './Button';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const[serviceId, setServiceId]=React.useState('')
    const[postCode, setPostCode]=React.useState('')
    const[offers, setOffers]=React.useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        // endpoint needed
        // fetch(`http://localhost:8080/offers?serviceId=${serviceId}&postCode=${postCode}`)
        // .then(res=>res.json())
        // .then((result)=>{setOffers(result)})
        //   .then((result) => console.log(result))
        }

          let navigate = useNavigate();

  return (
    <div>
    {/* <form className='search-form'>
        <div className='search-form-control'>
            <input type="number" 
            placeholder='Chose service' 
            value={serviceId} 
            onChange={(e) => setServiceId(e.target.value)} 
            />
        </div>
        <div className='search-form-control'>
            <input type="text" 
            placeholder='Chose location' 
            value={postCode} 
            onChange={(e) => setPostCode(e.target.value)} 
            />
        </div>
    <button type="submit" value='Search' className='btn' onClick={onSubmit} style={{ background : "DodgerBlue", textAlign : "center" }}>Search</button>
    </form> */}
      <div className='btnContainer'> 
          <Button text={"Customer requests"} color={"DodgerBlue"} onClick={()=>{navigate("/customerRequests")}}/>        
          <Button text={"All requests"} color={"DodgerBlue"} onClick={()=>{navigate("/allrequests")}}/>
          <Button text={"Customer reviews"} color={"DodgerBlue"} onClick={()=>{navigate("/reviews")}}/>        
          <Button text={"All offers"} color={"DodgerBlue"} onClick={()=>{navigate("/alloffers")}}/>
          </div>
    </div>
  )
}

export default SearchBar
