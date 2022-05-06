import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [pwdShow, setPwdShow] = useState(false);
  
  let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  const formik = useFormik(
    { initialValues : {
      name:'',
      lastName: '',
      email: '',
      pwd: '',
      pwd2: '',
      },
      onSubmit: () => {
        setValidated(true);
        alert('succes!');
      },
      validate: values => {
        let errors={};
        if( !values.name ) errors.name="Enter your name";
        if( !values.lastName ) errors.name="Enter your name";
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if( !(values.pwd.match(check))) errors.pwd="Your password must be at least 8 characters long, contain one letter, one number and one special character";
        if( !(values.pwd === values.pwd2)) errors.pwd2="Passwords doesn't match";
        return errors;
      }
    }
  );


  const togglePwd = () => {
    setPwdShow(!pwdShow);
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  

  return (

    <Container style={{width :"75%", alignSelf:"center"}}>
    
    <Form onSubmit={formik.handleSubmit}>
    <h1>Sign Up to Union Bank.</h1>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationFirstName">
          <FloatingLabel controlId="formName" label="First Name">
            <Form.Control
              name ='name'
              required
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Write your name"
            />
          </FloatingLabel>
          {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null}  
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationLastName">
          <FloatingLabel controlId="formLastName" label="Last Name">
            <Form.Control
              name ='lastName'
              required
              type="text"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Write your last name"
            />
          </FloatingLabel>
          {formik.errors.lastName ? <div style={{color:'red'}}>{formik.errors.lastName}</div> : null}  
        </Form.Group>
      </Row>

      <Row className="mb-2">
      <Form.Group as={Col} md="8" controlId="validationEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          value={formik.values.email}
          onChange={formik.handleChange} 
          placeholder="Enter your e-mail" 
          required 
          name='email' />
          {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationPwd">
          <Form.Label>Set your Password</Form.Label>  
          <InputGroup>
            <Form.Control 
            type={pwdShow ? "text" : "password"} 
            value={formik.values.pwd}
            onChange={formik.handleChange} 
            placeholder="Enter your password" 
            required
            name='pwd'/>
            
            <InputGroup.Text>
              <Button style={{backgroundColor: "transparent", borderColor: "transparent", color:"black"}} onClick={togglePwd}>Show</Button>
            </InputGroup.Text>
          </InputGroup>                         
          {formik.errors.pwd ? <div style={{color:'red'}}>{formik.errors.pwd}</div> : null}
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="validationConfirmPwd">
          <Form.Label>Confirm your password</Form.Label>  
          <InputGroup>
            <Form.Control 
            type={pwdShow ? "text" : "password"} 
            value={formik.values.pwd2}
            onChange={formik.handleChange}
            placeholder="Confirm your password" 
            required
            name='pwd2'/>
            <InputGroup.Text>
              <Button style={{backgroundColor: "transparent", borderColor: "transparent", color:"black"}} onClick={togglePwd}>Show</Button>
            </InputGroup.Text>
          </InputGroup>                         
          {formik.errors.pwd2 ? <div style={{color:'red'}}>{formik.errors.pwd2}</div> : null}
      </Form.Group>
      </Row>
      
      <Button type="submit" style={{ backgroundColor:"#84bd00", borderColor:"#84bd00" }}>SignUp</Button>
    </Form>
    {validated && <Button onClick={()=> {formik.resetForm();setValidated(false)}} style={{ marginTop:"15px", backgroundColor:"#004b87", borderColor:"#004b87" }} >Add another account</Button>}
    </Container>
    
  )
}


// EN UN USESTATE GENERAR UNA VARIABLE SIGNUP QUE CAMBIA EN ONSUBMIT (CREO Q PUEDE SER EL VALIDATE Y SETVALIDATE) Y HACER UN BUTTON CONDICIONAL

export default SignUp;