import React, { /*useContext,*/ useState } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
//import { LogInContext } from '../../context/loginContext';


const LogInApp = (props) => {
//  const { handleLogIn } = useContext(LogInContext);
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
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3" style={{alignItems:"center"}}>
        
        <Form.Group md="4" id="validationFirstName">
          <Form.Label id="formName" >e-mail:</Form.Label> 
            <Form.Control
              required
              type="email"
              placeholder="enter your e-mail"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row>
          
        <Form.Group md="4" id="validationLastName">
          <Form.Label id="formLastName">Password:</Form.Label>
          <InputGroup>
            <Form.Control type={pwdShow ? "text" : "password"} placeholder="Enter your password" required />
            <InputGroup.Text>
              <Button style={{backgroundColor: "transparent", borderColor: "transparent", color:"black"}} onClick={togglePwd}>Show</Button>
            </InputGroup.Text>
          </InputGroup>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>    
        </Form.Group>
        
      </Row>
      <Button style={{ marginTop:"10px" }} type="submit" href='/account'>Log In</Button>
    </Form>
  )
}

export default LogInApp; 

