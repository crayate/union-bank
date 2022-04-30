import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Balance from '../Balance';
import Deposit from '../Deposit';
import Withdraw from '../Withdraw';

const OperationBar = () => {
  let { path, url } = useRouteMatch();

  return (
      <Container fluid>
        <Row>
        <Col xs={2}>
          <Nav className="flex-column">
            <Nav.Link href={`${url}/withdraw`}>Withdraw</Nav.Link> 
            <Nav.Link href={`${url}/deposit`}>Deposit</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Switch>
            <Route exact path={path} component={Balance}/> 
            <Route exact path={`${path}/withdraw`} component={Withdraw} />
            <Route exact path={`${path}/deposit`} component={Deposit}/>
          </Switch>
        </Col>
        </Row>
      </Container>

  );
}
//tengo que hacer un operation router, para que esos links los renderice en operation bar y un operation context para pasar los datos de un lado al otro.  
export default OperationBar;