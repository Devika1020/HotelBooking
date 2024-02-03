import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
function Hotelcard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>

    <Card className='shadow mb-5 btn' style={{ width: '20rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://i.postimg.cc/ZnpSwtP2/pa.avif" />
      <Card.Body>
        <Card.Title>Paradise Hotel</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hotel Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className='img-fluid' src="https://i.postimg.cc/ZnpSwtP2/pa.avif" alt="Project Img" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className="fw-bolder text-primary"> Hotel Paradise</h2>
              <p>About Us : <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis modi optio animi dolore! Quaerat nisi cupiditate veritatis laudantium impedit, repellat eligendi, vero soluta nemo eius optio incidunt possimus ipsum.</span>
              </p>
              <p>Place : <span className='fw-bolder text-danger'>Pathanamthitta</span></p>
            </Col>

          </Row>
        
        </Modal.Body>
       
          
        
      </Modal>
   
   </>
  )
}

export default Hotelcard