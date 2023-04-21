// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import logo from '../../img/logo2.png'
import logo1 from '../../img/img3.png'
import './NavBarMenu.css'

function OffcanvasExample() {
    return (
        <>
        {[false].map((expand) => (
            <Navbar key={expand} className='navbar' expand={expand} >
                
            <Container fluid>

                {/* Title */}
                <Navbar.Brand href="#"> <img className='logo' src={logo} alt='logo'/> </Navbar.Brand>

                <div className='link'>
                <Nav.Link href="#action1" className='link1' >Nosotros</Nav.Link>
                <Nav.Link href="#action2" className='link1'>Servicios</Nav.Link>
                <Nav.Link href="#action3" className='link1'>Contacto</Nav.Link>
                </div>
                {/* <Form className="d-flex">
                    <Form.Control
                        type="search"
                        className="me-2"
                        aria-label="Buscar"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form> */}


                <Navbar.Toggle  className='' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                
                {/* Close Button - Expand */}
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    
                    </Offcanvas.Title>
                    <img src={logo1} className='logo1' alt='logo1'/>
                </Offcanvas.Header>
                
                
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className='link2' href="#action1">Home</Nav.Link>
                    <Nav.Link className='link2' href="#action2">Inicia Sesión</Nav.Link>
                    <Nav.Link className='link2' href="#action2">Crear Cuenta</Nav.Link>

                    </Nav>


                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </>
    );
}

export default OffcanvasExample;