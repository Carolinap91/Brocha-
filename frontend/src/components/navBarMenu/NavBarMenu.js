import "./NavBarMenu.css";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../../img/logo2.png";
import logo1 from "../../img/img3.png";

export const NavBarMenu = () => {
  return (
    <Navbar className="navbar" expand={false}>
      <Container fluid>
        {/* Title */}
        <Navbar.Brand href="#">
          {" "}
          <img className="logo" src={logo} alt="logo" />{" "}
        </Navbar.Brand>

        <div className="link">
          <Nav.Link href="#action1" className="link1">
            Nosotros
          </Nav.Link>
          <Nav.Link href="#action2" className="link1">
            Servicios
          </Nav.Link>
          <Nav.Link href="#action3" className="link1">
            Contacto
          </Nav.Link>
        </div>
        {/* <Form className="d-flex">
                <Form.Control
                    type="search"
                    className="me-2"
                    aria-label="Buscar"
                />
                <Button variant="outline-success">Buscar</Button>
            </Form> */}

        <Navbar.Toggle
          className=""
          aria-controls={`offcanvasNavbar-expand-${false}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          {/* Close Button - Expand */}
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${false}`}
            ></Offcanvas.Title>
            <img src={logo1} className="logo1" alt="logo1" />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="link2" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="link2" href="#action2">
                Inicia Sesión
              </Nav.Link>
              <Nav.Link className="link2" href="#action2">
                Crear Cuenta
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
