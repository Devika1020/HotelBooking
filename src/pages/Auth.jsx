import React from 'react'
import load1 from '../assets/load1.jpg'
import { Link } from 'react-router-dom'
import './style.css'
import { Form, Spinner } from 'react-bootstrap'

function Auth({insideRegister}) {
return (


<div
  style={{
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${load1})`, // Set the background image
    backgroundSize: 'cover', // Adjust background size as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  }}
>

  <div className='container w-25'>
  <Link to={'/'} style={{ textDecoration: "none" }} className='text-dark'>
      <i className='fa-solid fa-arrow-left '> </i>
    </Link>
    <div
      className='card-shadow p-5'
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional: Add a semi-transparent overlay to improve readability
        width: '400px',
        color: 'white',
        
      }}
    >
      
      <div className='text-center'>
        <i style={{ height: '41px' }} className='fa-solid fa-hotel'>
          &nbsp; STAY EASY
        </i>
        <h5 className='text-white'>Sign {insideRegister ? 'Up' : 'In'} to your account</h5>

        <Form className="mx-auto">
          {insideRegister && (
            <Form.Group className="mb-3" controlId="formBasicunam">
              <Form.Control type="text" placeholder="Enter Username" style={{ width: "300px" }} className="mx-auto" />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" style={{ width: "300px" }} className="mx-auto" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPass">
            <Form.Control type="password" placeholder="Enter Password" style={{ width: "300px" }} className="mx-auto" />
          </Form.Group>
        </Form>

        {insideRegister ? (
          <div>
            <button className='btn btn-light mb-2'>Register</button>
            <p>
              Already have an account? Click here to{' '}
              <Link to={'/login'} className='text-light'>
                Login
              </Link>
            </p>
          </div>
        ) : (
          <div>
            <button className='btn btn-light mb-2'>Login </button>
            <p>
              New User? Click here to{' '}
              <Link to={'/register'} className='text-light'>
                Register
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
</div>


  )
}

export default Auth