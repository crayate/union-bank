import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap';
import LogInApp from '../../Components/Login';
import bgPhoto from '../../assets/bgPhoto.jpg';
import { NavLink } from 'react-router-dom';

var photo = {
  backgroundImage: `url(${bgPhoto})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '90vh'
}

const Home = () => {
  return (
    <Container style={photo} fluid>
    <Row>
      <Card className='text-center' style={{ width: '20rem', margin:"20px", padding:"0"}}>
      <Card.Header style={{ color:"#004b87", fontWeight:"bold" }}>Union Bank</Card.Header>
      <Card.Body>
        <p>Welcome to the first non-real bank!</p>
        <LogInApp />
      </Card.Body>
      <Card.Footer className="text-muted">Don't have an account yet? 
        <NavLink to="/signup" exact>Create one</NavLink>  
      </Card.Footer>
      </Card>
    </Row>
    <Row style={{ height: 'auto' }}>      
      <Container className='text-center' >
        <p style={{ marginLeft:"40%", marginTop:"5%", color:"white"}}>Don't let money hold you back</p>
        <NavLink to="/moreinfo" exact><Button style={{ marginLeft:"40%", backgroundColor:"#84bd00", borderColor:"#84bd00" }} >More Info</Button></NavLink>
      </Container>
    </Row>
    </Container>
    
  )
}

export default Home;