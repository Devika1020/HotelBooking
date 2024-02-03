import React from 'react'
import Addhotels from '../Components/Addhotels'
import Edithotels from '../Components/Edithotels'
function Hotels() {
  return (
    <div className='border bg-dark rounded p-5'>
    <div className='d-flex justify-content-between'>
<h3 className='text-white'>ALL HOTELS</h3>
<Addhotels/>
    </div>
    <div className='mt-4'>
<div className='border  rounded d-flex justify-content-between mb-3 p-2'>
<h5 className='text-white'>title</h5>
<div className='d-flex icons align-items-center'>
<Edithotels/>
<button className='btn ms-2 btn-link text-danger'><i className='fa-solid fa-trash'></i></button>
</div>
</div>
    </div>
  </div>
  )
}

export default Hotels