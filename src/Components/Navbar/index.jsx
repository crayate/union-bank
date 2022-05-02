import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { LogInContext } from '../../context/loginContext'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import './styles.css'

var logoBrand = {
    width: "70px",
    height: "70px"
  }
const NavBar = () => {
    const { isLoggedIn, handleLogIn } = useContext(LogInContext)
    return (
    
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid  >
        <Navbar.Brand href="/"><img alt='logo' src={logo} style={logoBrand} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">
                <NavLink to="/" exact activeClassName='selected' className="nav-link" > Home </NavLink>
                <NavLink to="/account"  exact activeClassName='selected' className="nav-link"> Account </NavLink>
                <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
                    <NavLink to="/atms" exact activeClassName='selected' className="dropdown-item"> ATMs </NavLink>
                    <NavLink to="/contactcenter"  exact activeClassName='selected' className="dropdown-item"> Contact Center</NavLink>
                    <NavLink to="/locations"  exact activeClassName='selected' className="dropdown-item"> Location </NavLink>
                </NavDropdown>
            </Nav>
            {!isLoggedIn && 
            <Nav>
                <NavLink to="/signup" exact activeClassName='selected' className="nav-link">SignUp </NavLink>
                <NavLink to="/login" exact activeClassName='selected' className="nav-link"> LogIn </NavLink>
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
