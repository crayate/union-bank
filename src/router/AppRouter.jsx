import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from '../Components/Signup';
import { LogInContext } from '../context/loginContext';
//import PrivateRoute from './PrivateRoute';
//import PublicRoute from './PublicRoute';
import AccountPage from '../Pages/Account';
import HomePage from '../Pages/Home';
import LogInPage from '../Pages/LogInPage';

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
            {/* PRIVATE ROUTES*/}
            <Route path="/account" isLoggedIn={isLoggedIn} component={AccountPage} />
        </Switch>
    </Router>
  )
}

export default AppRouter;