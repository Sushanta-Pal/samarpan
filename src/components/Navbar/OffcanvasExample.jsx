import { useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../../assets/logo (1).jpg';

function OffcanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="sm" className="bg-white mb-3 custom-navbar sticky-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Samarpan logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas 
          id="offcanvasNavbar" 
          aria-labelledby="offcanvasNavbarLabel" 
          placement="end" 
          show={show} 
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={logo} alt="Samarpan logo" className="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/about" onClick={handleClose}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/events" onClick={handleClose}>Events</Nav.Link>
              <Nav.Link as={Link} to="/alumini" onClick={handleClose}>Alumni</Nav.Link>
            </Nav>
            <div className="button-group">
            <Nav.Link as={Link} to="/members" onClick={handleClose}><Button variant="outline-success" className="equal-button">Members</Button></Nav.Link>
              
              <Button className="donate-button equal-button">Donate</Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;