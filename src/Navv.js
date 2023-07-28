import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './image/logo.png'
export default function Navv() {
    return (

        <div style={{ top: '0', right: '0', position: 'fixed', zIndex: '1300' }}>

            <Navbar className='navbar' bg="light" expand="lg" variant="light" style={{ fontWeight: '600', color: 'black' }} >
                <Container className='p-3'>
                    <Navbar.Brand style={{ fontFamily: "'Anton' sans-serif", letterSpacing: '0.3rem', fontSize: '20px', fontWeight: '900' }} >
                        <img className='mt-3' style={{ width: '100px', height: '80px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll"             >
                        <Nav
                            className="ms-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px', color: "white" }}
                            navbarScroll
                        >

                            <Nav.Link href="/Home" className='clr'>Home</Nav.Link>
                            <Nav.Link href="/Properties" className='clr'>Properties</Nav.Link>
                            <Nav.Link href="/Team" className='clr'>Team</Nav.Link>
                            <Nav.Link href="/Contact" className='clr'>Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>

    )
}
