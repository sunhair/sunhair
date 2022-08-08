import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import DesktopDropdownInside from '../desktop-dropdown-inside'
import DesktopDropdownItem from "../desktop-dropdown-item";
import {useState, useEffect} from 'react'


function Header() {
  const [showInside,setShowInside] = useState(false);
  const [showItem,setShowItem] = useState(false);

  function handleShowInside(){
    setShowInside(true);
    setShowItem(false);
  }

  function handleShowItem(){
    setShowItem(true);
    setShowInside(false);
  }

  function handleHide(){
    setShowInside(false);
    setShowItem(false);
  }

  return (
    <div className = "header " onMouseLeave={handleHide} >
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="/brand-sunhair-removebg-preview.png"
              alt="logo"
              width={86}
              height={40}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing" onMouseEnter={handleShowInside} >INSIDE SUNHAIR</Nav.Link>
              <Nav.Link href="#pricing" onMouseEnter={handleShowItem} >SHOP</Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {
        showInside?<DesktopDropdownInside />:<></>}
      {
        showItem?<DesktopDropdownItem />:<></>
      }
    </div>
  );
}



export default Header;

