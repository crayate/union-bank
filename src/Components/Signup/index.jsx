import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [pwdShow, setPwdShow] = useState(false);

  const togglePwd = () => {
    setPwdShow(!pwdShow);
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  
  return (

    <Container style={{width :"75%", alignSelf:"center"}}>
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <h1>Sign Up to Union Bank.</h1>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationFirstName">
          <FloatingLabel controlId="formName" label="First Name">
            <Form.Control
              required
              type="text"
              placeholder="Write your name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>  
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationLastName">
          <FloatingLabel controlId="formLastName" label="Last Name">
            <Form.Control
              required
              type="text"
              placeholder="Write your last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>  
        </Form.Group>
      </Row>

      <Row className="mb-2">
      <Form.Group as={Col} md="8" controlId="validationEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your e-mail" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationPwd">
          <Form.Label>Set your Password</Form.Label>  
          <InputGroup>
            <Form.Control type={pwdShow ? "text" : "password"} placeholder="Enter your password" required />
            <InputGroup.Text>
              <Button style={{backgroundColor: "transparent", borderColor: "transparent", color:"black"}} onClick={togglePwd}>Show</Button>
            </InputGroup.Text>
          </InputGroup>                         
          <Form.Control.Feedback type="invalid">
            Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationConfirmPwd">
          <Form.Label>Confirm your password</Form.Label>  
          <InputGroup>
            <Form.Control type={pwdShow ? "text" : "password"} placeholder="Confirm your password" required />
            <InputGroup.Text>
              <Button style={{backgroundColor: "transparent", borderColor: "transparent", color:"black"}} onClick={togglePwd}>Show</Button>
            </InputGroup.Text>
          </InputGroup>                         
          <Form.Control.Feedback type="invalid">
            Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces.
          </Form.Control.Feedback>
      </Form.Group>
      </Row>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Container>
    
      
  )
}

export default SignUp;