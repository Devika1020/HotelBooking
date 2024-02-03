import React from 'react'
import { Modal,Button } from 'react-bootstrap'
import load1 from '../assets/load1.jpg'
import  {useState } from 'react'
function Addhotels() {
  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
 
  const handleClose = () => setShow(false);
  
  return (
    <>
    <button onClick={handleShow} className='btn btn-link text-info'><i className='fa-solid fa-plus'>Add Hotels</i></button>
    <Modal size='lg'
      
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Hotel Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6'>
<label className='align-items-center d-flex justify-content-center'>
  <input type="file" style={{display:'none'}} />
  <img src={load1} alt="project upload pic" height={'200px'}  />
</label><br />

  <div className='text-danger ms-4  ' ><h6>*upload only the following file types (jpg, jpeg, png)*</h6></div>

          </div>
          
          <div className='col-lg-6'>
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Hotel Name' />
  
</div>  
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='About Hotel'/>
  
</div> 
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Place'/>
  
</div>     
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Rate' />
  
</div>

    </div>

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"  >
            Cancel
          </Button>
          <Button  variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addhotels