import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, ...props }) => {
  if (!isLoggedIn) { alert('You need to login to see your account');
  return  <Redirect to="/login" />} 
  else return <Route {...props}/>
}

export default PrivateRoute;