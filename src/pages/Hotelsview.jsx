import React from 'react'
import Hotelcard from '../components/Hotelcard'
import './style.css'

import { Row ,Col} from 'react-bootstrap'
function Hotelsview() {
  return (
    <>

    <div style={{marginTop:"50px"}} className='container-fluid'>
      <div className="d-flex justify-content-between">
        <h1 className=' ms-5 '>All Hotels</h1>
        {/* <input style={{width:"300px"}} className='rounded p-2' type="text" placeholder='Search Hotels'/> */}
      </div>
      <Row className='mt-5'>
        <Col sm={12} md={4} lg={4}>
          <Hotelcard/>
        </Col>
      </Row>
    </div>
</>
  )
}

export default Hotelsview