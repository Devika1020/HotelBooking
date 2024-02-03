import React from 'react'
import { Link } from 'react-router-dom'
import load from '../assets/load.jpg'
import Hotelcard from '../components/Hotelcard'
import './style.css'
function Home() {
  return (
    <>
  <div className='c'> 
    <img style={{height:'100vh',width:'100%'}} src={load} alt=""     />
   <h1 className='h'>Stay Easy </h1>
   <p className='hl'>Welcome To Online Hotel Booking System</p>
    <Link className='btn btn-success mt-3' to={'/login'}>Book Your Room <i className='fa-solid fa-arrow-right'></i></Link>
  </div>
     <div className='mt-5'>
       <h1 className='text-center mb-5'>Explore Hotels</h1>
   <marquee >
       <div>
           <div className='project mt-5'>
               <Hotelcard/>
           </div>
       </div>
   </marquee>
   <div className='text-center '>
   
   <Link className='btn btn-success mt-3' to={'/viewhotel'}>View Hotels</Link>

       {/* <button   className='btn btn shadow btn-success '><u>View Hotels</u></button> */}
   </div>
   
     </div>
     </>
  )
}

export default Home