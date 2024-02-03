import React from 'react'
import load from '../assets/load.jpg'
import { Link } from 'react-router-dom'
import { Form, Spinner } from 'react-bootstrap'
function Booking() {
  return (
    <div style={{width:"100%",height:"100vh"}} className='d-flex justify-content-center align-items-center'>
    <div className='container w-75' >
    <div className='box-shadow p-5' >

<div className='row align-items-center'> 
<div className='col-lg-6 mx-auto'>

  <img className='w-100' src={load} alt="" />
  </div>
  <div className='col-lg-6'>
    <div className='fw-bolder text-light mt-2'>
 <h5 className='text-center'>Book Your Room</h5>
  <Form>
  
 
 <Form.Group className="mb-3" controlId="formBasicCheckIn">
 <Form.Group className="mb-3" controlId="formBasicRoomType">
            <Form.Label style={{ color: 'black' }}>Room Type</Form.Label>
            <Form.Control as="select">
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              <option value="suite">Suite</option>
         
            </Form.Control>
          </Form.Group>
            <Form.Label style={{ color: 'black' }}>Check-in Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckOut">
            <Form.Label style={{ color: 'black' }}>Check-out Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGuests">
            <Form.Label style={{ color: 'black' }}>Number of Guests</Form.Label>
            <Form.Control type="number" min="1" />
          </Form.Group>
        
        </Form>
      

    
         
        <div>
        <button className='btn btn-success mt-3' style={{ width: '100%' }}>Book</button>

        </div>
      
      
    </div>

  </div>
  </div>
      </div>
      </div>
   
      </div>
  )
  
}

export default Booking