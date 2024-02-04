import React from 'react';

function Udashboard() {
  return (
    <div style={{ marginTop: "100px" }} className='container'>
      <h1>Welcome <span className='text-warning'>User</span></h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead style={{ backgroundColor: '#333', color: '#fff' }}>
          <tr>
            <th style={tableHeaderStyle}>Hotel Name</th>
            <th style={tableHeaderStyle}>Location</th>
            <th style={tableHeaderStyle}>Check-in Date</th>
            <th style={tableHeaderStyle}>Check-out Date</th>
            <th style={tableHeaderStyle}>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCellStyle}>Paradise Hotel</td>
            <td style={tableCellStyle}>Pathanamthitta</td>
            <td style={tableCellStyle}>2024-02-04</td>
            <td style={tableCellStyle}>2024-02-06</td>
            <td style={tableCellStyle}>$2000</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
const tableHeaderStyle = {
  padding: '10px',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  border: '1px solid #ddd',
};

export default Udashboard;
