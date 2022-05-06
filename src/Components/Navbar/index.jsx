import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { LogInContext } from '../../context/loginContext'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import './styles.css'
import { useHistory } from 'react-router-dom'

var logoBrand = {
    width: "70px",
    height: "70px"
  }
const NavBar = () => {
    const { isLoggedIn, setIsLoggedIn, user } = useContext(LogInContext);
    const history = useHistory();
    return (
    
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid  >
        <NavLink to="/" exact><img alt='logo' src={logo} style={logoBrand} /></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto" >
                <NavLink style={{fontSize:'1.5em'}} to="/" exact activeClassName='selected' className="nav-link" > Home </NavLink>
                <NavLink style={{fontSize:'1.5em'}} to="/account"  exact activeClassName='selected' className="nav-link"> Account </NavLink>
                <NavDropdown style={{fontSize:'1.5em'}} title="Contact Us" id="collasible-nav-dropdown">
                    <NavLink style={{fontSize:'1.5em'}} to="/atms" exact activeClassName='selected' className="dropdown-item"> ATMs </NavLink>
                    <NavLink style={{fontSize:'1.5em'}} to="/contactcenter"  exact activeClassName='selected' className="dropdown-item"> Contact Center</NavLink>
                    <NavLink style={{fontSize:'1.5em'}} to="/locations"  exact activeClassName='selected' className="dropdown-item"> Location </NavLink>
                </NavDropdown>
            </Nav>
            {!isLoggedIn && 
            <Nav>
                <NavLink style={{fontSize:'1.5em'}} to="/signup" exact activeClassName='selected' className="nav-link">SignUp </NavLink>
                <NavLink style={{fontSize:'1.5em'}} to="/login" exact activeClassName='selected' className="nav-link"> LogIn </NavLink>
            </Nav>}
            {isLoggedIn &&
            <Nav>
                <Navbar.Text style={{ marginRight: '15px' }}>
                    Signed in as: {user}
                </Navbar.Text>
                <Button style={{ backgroundColor:"#004b87", borderColor:"#004b87" }} onClick={()=>{setIsLoggedIn(false);history.push('/login');}}>LogOut</Button>
            </Nav>}
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
    )
}

export default NavBar;
