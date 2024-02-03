import React from 'react'

    import { Badge } from 'react-bootstrap';
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import { Link } from 'react-router-dom';

    
    function Header() {
      
        return (
            <Navbar className=" bg-dark">
                <Container>
                  <Navbar.Brand href="#home">
                    
                     <i className="fa-solid fa-hotel text-white fs-3 mt-1 " /> 
                   <b className='ms-1 text-white'>Stay Easy</b>
                  
                   
                  </Navbar.Brand><b  className='text-white'><u>Home </u>&nbsp; <u>Contact</u></b>
                 
                </Container>
              </Navbar>
          )
    }
    
    export default Header

