import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Showroom from './pages/Showroom/Showroom';
import Restaurant from './pages/Restaurant/Restaurant';
import PartyCard from './pages/PartyCard/PartyCard';
import PlayZone from './pages/PlayZone/PlayZone';
import Ruls from './pages/Ruls/Ruls';

function App() {
    return (
        <>
            <Switch>
                <Redirect exact path="/" to="/dashboard" />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/showroom" component={Showroom} />
                <Route path="/party-card" component={PartyCard} />
                <Route path="/restaurant" component={Restaurant} />
                <Route path="/play-zone" component={PlayZone} />
                <Route path="/ruls" component={Ruls} />
            </Switch>
        </>
    );
}

export default App;
