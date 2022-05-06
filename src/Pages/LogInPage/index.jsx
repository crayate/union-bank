import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import LogInApp from '../../Components/Login'

const LogInPage = () => {
  return (
    
      
      <Card className="text-center" as={Col} style={{ maxWidth:"75vw",padding:"0", margin:"auto", marginTop:"20px" }}>
        <Card.Header>Log In to you account</Card.Header>
        <Card.Body>
          <LogInApp />
        </Card.Body>
        <Card.Footer className="text-muted">Don't have an account yet? 
          <NavLink to='/signup'>Create one</NavLink>
        </Card.Footer>
      </Card>
      
    
    
  )
}

export default LogInPage