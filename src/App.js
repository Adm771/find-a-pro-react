import React from 'react'
import AllOffers from './components/AllOffers'
import AllRequests from './components/AllRequests'
import Requests from './components/Requests'
import './App.css';

function App() {

  const[offers, setOffers]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/offers")
    .then(res=>res.json())
    .then((result)=>{setOffers(result)})
  })

  const[requests, setRequests]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/requests")
    .then(res=>res.json())
    .then((result)=>{setRequests(result)})
  })

  return (
    <div className="container">
        <AllOffers offers={offers}/>
        {/* <Requests/> */}
        <AllRequests requests={requests}/>
    </div>
  );
}

export default App;
