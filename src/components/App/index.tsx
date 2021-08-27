import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GetStartedPage from '../../containers/GetStartedPage';
import PropertyFormPage from '../../containers/PropertyFormPage';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <GetStartedPage />;
                </Route>
                <Route path="/propertyForm">
                    <PropertyFormPage />;
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
