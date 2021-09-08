import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GetStartedPage from '../../containers/GetStartedPage';
import PropertyFormPage from '../../containers/PropertyFormPage';
import PropertySnapshotPage from '../../containers/PropertySnapshotPage';

const App = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <GetStartedPage />;
                </Route>
                <Route path="/propertyForm">
                    <PropertyFormPage />;
                </Route>
                <Route path="/propertySnapshot">
                    <PropertySnapshotPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
