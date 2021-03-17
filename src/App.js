import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/page/LoginPage/LoginPage';
import Banner from './components/page/MainPage/Banner/Banner';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Home from './components/page/MainPage/home';
import RegisterPage from './components/page/RegisterPage/RegisterPage';

const GlobalStyle = createGlobalStyle`
  body {
    color: #000000;
     //font-family: payboocLight;
     padding : 0 0;
     margin: 0;

     text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }
`;

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                </>
            </Switch>
        </Router>
    );
}

export default App;
