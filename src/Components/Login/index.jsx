import { useFormik } from 'formik';
import React, { /*useContext,*/ useState } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
//import { LogInContext } from '../../context/loginContext';


const LogInApp = (props) => {
//  const { handleLogIn } = useContext(LogInContext);
  const [validated, setValidated] = useState(false);
  const [pwdShow, setPwdShow] = useState(false);
  
  // VALIDATION LOGIN
  let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  const formik = useFormik(
    { initialValues : {
      email: '',
      pwd: '',
      },
      onSubmit: values => {
        console.log('form:', values)
      },
      validate: values => {
        let errors={};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';}
        if( !(values.pwd.match(check))) errors.pwd="Your password must be at least 8 characters long, contain one letter, one number and one special character";
        return errors;
      }
    }
  );


  const togglePwd = () => {
    setPwdShow(!pwdShow);
  }

  //SUBMITING
  
  const history = useHistory();
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {history.push('/account')}
    setValidated(true);
    
  };

  return (
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3" style={{alignItems:"center"}}>
        
        <Form.Group md="4" id="validationFirstName">
          <Form.Label id="formName" >e-mail:</Form.Label> 
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
      <Row>
          
        <Form.Group md="4" id="validationLastName">
          <Form.Label id="formLastName">Password:</Form.Label>
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
        
      </Row>
      <Button style={{ marginTop:"10px", backgroundColor:"#84bd00", borderColor:"#84bd00" }} type="submit">Log In</Button>
    </Form>
  )
}

export default LogInApp; 

