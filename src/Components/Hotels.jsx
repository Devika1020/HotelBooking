import React from 'react'
import Addhotels from '../Components/Addhotels'
import Edithotels from '../Components/Edithotels'
function Hotels() {
  return (
    <div>
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
    </div><br />
    <div className='border bg-dark rounded p-5'>
    <div className='d-flex justify-content-between'>
<h3 className='text-white'>Hotel Booking Details</h3>

    </div>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead style={{ backgroundColor: '#333', color: '#fff' }}>
          <tr>
            <th style={tableHeaderStyle}>Guest Name</th>
            <th style={tableHeaderStyle}>Hotel Name</th>
            <th style={tableHeaderStyle}>Check-in Date</th>
            <th style={tableHeaderStyle}>Check-out Date</th>
            <th style={tableHeaderStyle}>Number Of Person</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td style={tableCellStyle}>User</td>
            <td style={tableCellStyle}>Paradise Hotel</td>
          
            <td style={tableCellStyle}>2024-02-04</td>
            <td style={tableCellStyle}>2024-02-06</td>
            <td style={tableCellStyle}>2</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
  
  )
}
const tableHeaderStyle = {
  padding: '10px',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  border: '1px solid #ddd',
};


export default Hotels