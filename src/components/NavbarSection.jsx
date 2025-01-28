import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//icons
import { FaLongArrowAltRight } from "react-icons/fa";


export default function NavbarSection() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='me-5'>Physionic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Product</Nav.Link>
            <Nav.Link href="#home">Pricing</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <button className='btn btn-primary px-4 py-2 '>Get Quote Now <FaLongArrowAltRight className='ms-3'/></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
