import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/page/LoginPage/LoginPage';
import MainPage from './components/page/MainPage/MainPage';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Home from './components/page/home';
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
                </>
            </Switch>
        </Router>
    );
}

export default App;
