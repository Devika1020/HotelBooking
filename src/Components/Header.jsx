import React from 'react'

    import { Badge } from 'react-bootstrap';
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import { Link } from 'react-router-dom';

    import { animateScroll as scroll } from 'react-scroll';
    function Header() {
      const scrollToFooter = () => {
        scroll.scrollToBottom();
      };
        return (
            <Navbar className=" bg-dark">
                <Container>
                  <Navbar.Brand href="/">
                    
                     <i className="fa-solid fa-hotel text-white fs-3 mt-1 " /> 
                   <b className='ms-1 text-white'>Stay Easy</b>
                  
                   
                  </Navbar.Brand><b >
                    {/* <a href="/"  className='text-white'>Home </a>&nbsp; <a href="/.footer "  className='text-white'>Contact </a> */}
                    <Link to="/" className='text-white'>Home </Link>&nbsp;
          <Link to="/" onClick={scrollToFooter} className='text-white'>Contact </Link>
                    </b>
                 
                </Container>
              </Navbar>
          )
    }
    
    export default Header

