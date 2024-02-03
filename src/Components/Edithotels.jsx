import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap'


function Edithotels() {
  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>setShow(false)
  return (
    <>
    <button onClick={handleShow} className='btn btn-link text-success'><i className='fa-solid fa-edit'></i></button>
    <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='row'>
            <div className='col-lg-4'>
<label className='align-items-center d-flex justify-content-center'>
  <input type="file" style={{display:'none',}}/>
  <img src="" alt=" upload Hotel pic" />
  &nbsp; <i  className="fa-solid fa-upload  fs-3 mt-1 "></i>
</label>
            </div>
          
          <div className='col-lg-8'>
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Hotel Name'/>
  
</div>  
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='About Hotel'/>
  
</div> 
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Location'/>
  
</div>     
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Rate'/>
  
</div>

    </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Edithotels