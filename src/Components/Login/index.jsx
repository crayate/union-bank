import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LogInContext } from '../../context/loginContext';


const LogInApp = (props) => {
  const { isLoggedIn, setIsLoggedIn, user, setUser} = useContext(LogInContext);
  const [pwdShow, setPwdShow] = useState(false);
  
  // VALIDATION LOGIN
  let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  const history = useHistory();
  const formik = useFormik(
    { initialValues : {
      email: '',
      pwd: '',
      },
      onSubmit: () => {
        setIsLoggedIn(true);
        setUser(formik.values.email); 
        console.log(isLoggedIn);
        history.push('/account');
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

  return (
    
    <Form onSubmit={formik.handleSubmit}>
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
      <Button type="submit" style={{ marginTop:"10px", backgroundColor:"#84bd00", borderColor:"#84bd00" }} >Log In</Button>
    </Form>
  )
}

export default LogInApp; 

//en el contexto de login, crear un user / setUser con useState exportarlos y cambiarlos en submit, con el valor de formik.values.email **y esto ponerlo ne navbar como "loged as: username"