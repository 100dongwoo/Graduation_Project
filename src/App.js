import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/page/LoginPage/LoginPage';
import MainPage from './components/page/MainPage/MainPage';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </Router>
    );
}

export default App;
