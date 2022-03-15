import React, { useState, useEffect, createContext } from 'react';

const RequestContext = createContext()

export function RequestContextProvider({children}) {
    const [requests, setRequests] = useState([])
    const [requestById, setRequestById] = useState([])
    const [requestsByUserId, setRequestsByUserId] = useState([])

  useEffect(() => {
    getRequests()
    }, [])

  // Get all requests
  const getRequests = async () => {
      const response = await fetch('http://localhost:8080/api/v1/requests')
      const data = await response.json()
      setRequests(data)
    }

  // Get request by user id
  const getRequestById = async (id) => {
    const response = await fetch(`http://localhost:8080/api/v1/request/${id}`)
    const data = await response.json()
    setRequestById(data)
  }

  // Get requests by user id
  const getRequestsByUserId = async (userId) => {
    const response = await fetch(`http://localhost:8080/api/v1/requests/${userId}`)
    const data = await response.json()
    setRequestsByUserId(data)
  }

  // Add request
  const addRequest = async (newRequest) => {
    const response = await fetch('http://localhost:8080/api/v1/requests', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body:JSON.stringify(newRequest)
    })
  const data = await response.json()
  console.log(data)
  setRequests([...requests, data])
  console.log(requests)
  }

  // Delete request
  const deleteRequest = async (id) => {
    await fetch(`http://localhost:8080/api/v1/request/${id}`, {
      method: 'DELETE'
    })
  setRequests(requests.filter((request) => request.id !== id))
  console.log(requests)
  }

  // Edit request
  const editRequest = async (id, editedRequest) => {
    const response = await fetch(`http://localhost:8080/api/v1/request/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedRequest),
    })

    const data = await response.json()
    setRequests(requests.map((request) => (request.id === id ? data : request)))
  }

    return (
      <RequestContext.Provider 
            value={{
                requests, 
                getRequests,
                requestById, 
                getRequestById,
                requestsByUserId, 
                getRequestsByUserId, 
                addRequest,
                editRequest,
                deleteRequest
                }}
      >
            {children}
      </RequestContext.Provider>
    );
}

export default RequestContext
