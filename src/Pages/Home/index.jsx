import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap';
import LogInApp from '../../Components/Login';

const Home = () => {
  return (
    <>
    <Row>
      <Card className='text-center' style={{ width: '20rem', margin:"20px", padding:"0"}}>
      <Card.Header>Log In to you account</Card.Header>
      <Card.Body>
        <LogInApp />
      </Card.Body>
      <Card.Footer className="text-muted">Don't have an account yet? 
        <a href='/signup'>Create one</a>
      </Card.Footer>
      </Card>
    </Row>
    <Row>      
      <Container className='text-center' >
        <p style={{ marginLeft:"60%", marginTop:"10%"}}>Don't let money stop you</p>
        <Button style={{ marginLeft:"60%"}} href="/moreinfo">More Info</Button>
      </Container>
    </Row>
    </>
    
  )
}

export default Home;