import React from 'react'
import AllOffers from './components/AllOffers'
import AllRequests from './components/AllRequests'
import CustomerRequests from './components/CustomerRequests'
import Header from './components/Header'
import './App.css';
import CustomerReviews from './components/CustomerReviews'
import LogOn from './components/LogOn'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerShowRequest from './components/CustomerShowRequest'
import AddRequest from './components/AddRequest'
import EditRequest from './components/EditRequest'
import AllMatchedOffers from './components/AllMatchedOffers'
import OfferShow from './components/OfferShow'

import { UserContextProvider } from './contexts/UserContextProvider'
import { RequestContextProvider } from './contexts/RequestContextProvider'
import { OfferContextProvider } from './contexts/OfferContextProvider'


function App() {

  return (
    <div className="app">
      < UserContextProvider >
      < RequestContextProvider >
      < OfferContextProvider>
        <BrowserRouter>
          <Header title="Customer dashboard"/>
          <NavBar/>
            <Routes>
              <Route path="/" element={ <LogOn /> } />
              <Route path="/allrequests" element={ <AllRequests /> } />
              <Route path="/addrequest" element={ <AddRequest /> } />
              <Route path="/alloffers" element={ <AllOffers /> } /> 
              <Route path="/reviews" element={ <CustomerReviews /> } />
              <Route path="/request/:requestId" element={ <CustomerShowRequest /> } />
              <Route path="/offer/:offerId" element={ <OfferShow /> } />
              <Route path="/request/edit/:requestId" element={ <EditRequest /> } />
              <Route path="/customerrequests" element={ <CustomerRequests /> } />
              <Route path="*" element={ <CustomerRequests /> } />
              <Route path="/allmatchedoffers/:requestId" element={ <AllMatchedOffers /> } /> 
            </Routes>

          <div id="handymanDashboard" >
            <Header title="Handyman dashboard"/>
          </div>
        </BrowserRouter>
      </OfferContextProvider>
      </RequestContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
