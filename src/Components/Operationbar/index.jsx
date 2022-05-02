import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Balance from '../Balance';
import Deposit from '../Deposit';
import Withdraw from '../Withdraw';
import bgOperations from '../../assets/bgOperations.jpg'
import { NavLink } from 'react-router-dom';
const OperationBar = () => {
  let { path, url } = useRouteMatch();
  let background = {
    backgroundImage: `url(${bgOperations})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '80vh'
  }
  return (
      <Container fluid>
        <Row>
        <Col xs={2}>
          <Navbar collapseOnSelect expand="xl" bg="light" variant="light" >
          <Nav className="flex-column" style={{height:'75vh'}}>
            <NavLink to={`${url}`}  activeClassName="selected" className="nav-link" exact>My account</NavLink>
            <NavLink to={`${url}/withdraw`} activeClassName="selected" className="nav-link" exact>Withdraw</NavLink> 
            <NavLink to={`${url}/deposit`} activeClassName="selected" className="nav-link" exact>Deposit</NavLink>
          </Nav>
          </Navbar>
        </Col>
        <Col  style={background}>
          <Col md={{ offset: 3 }}>
          <Switch >
            <Route exact path={path} component={Balance}/> 
            <Route exact path={`${path}/withdraw`} component={Withdraw} />
            <Route exact path={`${path}/deposit`} component={Deposit}/>
          </Switch>
          </Col>
        </Col>
        </Row>
      </Container>

  );
}
//tengo que hacer un operation router, para que esos links los renderice en operation bar y un operation context para pasar los datos de un lado al otro.  
export default OperationBar;