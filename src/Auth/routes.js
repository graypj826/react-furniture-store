import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './home';
import Admin from './admin';
import Callback from './callback';
import Auth from './auth';
import history from './history';

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      {/* / route is the main route which renders the HOME component */}
      <Route exact path="/" render={(props) => <Home {...props} />} />
      {/* /home route also renders the HOME component, this is the same route 
      the user is redirected to after authentication */}
      <Route path="/home" render={(props) => <Home {...props} />} />
      {/* Prevent access to admin routes unless user is an admin */}
      <Route path="/admin" render={(props) => <Admin {...props} /> } />
    </div>
  </Router>
);

export default Routes;