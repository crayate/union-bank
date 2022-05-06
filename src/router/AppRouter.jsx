import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from '../Components/Signup';
import { LogInContext } from '../context/loginContext';
import PrivateRoute from './PrivateRoute';
import AccountPage from '../Pages/Account';
import HomePage from '../Pages/Home';
import LogInPage from '../Pages/LogInPage';
import { Col, Row } from 'react-bootstrap';

const AppRouter = (props) => {
    const { isLoggedIn } = useContext(LogInContext)
    return (
    <Router>
        {props.children}
        <Switch>          
            {/* PUBLIC ROUTES*/}
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact isLoggedIn={isLoggedIn} component={LogInPage} />
            <Route path="/signup" exact isLoggedIn={isLoggedIn} component={SignUp} />
            <Route path="/moreinfo" exact isLoggedIn={isLoggedIn} > 
                <h2 style={{ textAlign:"center", paddingTop: '30vh'}}>"Seriously, the bank doesn't exist"</h2>
            </Route>
            {/* PRIVATE ROUTES*/}
            <PrivateRoute path="/account" isLoggedIn={isLoggedIn} component={AccountPage} />
        </Switch>
    </Router>
  )
}

export default AppRouter;