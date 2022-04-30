import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { LogInContext } from '../../context/loginContext'


const NavBar = () => {
    const { isLoggedIn, handleLogIn } = useContext(LogInContext)
    return (
    
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
        <Navbar.Brand href="/">Union Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link href="/account" >Account</Nav.Link>
                <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/atms">ATM locations</NavDropdown.Item>
                    <NavDropdown.Item href="/contactcenter">Contact Center</NavDropdown.Item>
                    <NavDropdown.Item href="/locations">Locations</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {!isLoggedIn && 
            <Nav>
                <Nav.Link href="/signup" >SignUp</Nav.Link>
                <Nav.Link href="/login" >LogIn</Nav.Link>
            </Nav>}
            {isLoggedIn &&
            <Nav>
                <Button onClick={handleLogIn}>LogOut</Button>
            </Nav>}
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
    )
}

export default NavBar;
