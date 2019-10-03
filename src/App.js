import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Showroom from './components/Showroom/Showroom';

function App() {
  return (
    <>
      <Switch>
        <Redirect exact path="/" to="/dashboard" />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/showroom" component={Showroom} />
      </Switch>
    </>
  );
}

export default App;
