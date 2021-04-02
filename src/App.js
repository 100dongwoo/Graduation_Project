import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/NavBar';
import Home from './pages/MainPage/home';
import LoginPage from './pages/LoginPage/LoginPage';
import Help from './pages/Help/Help';
import UploadPage from './pages/UploadPage/UploadPage';
import NoticePage from './pages/NoticePage/NoticePage';
import RakingPage from './pages/RakingPage/RakingPage';
import CommunityPage from './pages/CommunityPage/CommunityPage';

const GlobalStyle = createGlobalStyle`
  body {
    color: #000000;
     //font-family: payboocLight,serif;
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
                    <Help />
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/upload" component={UploadPage} />
                    <Route exact path="/Notice" component={NoticePage} />
                    <Route exact path="/Raking" component={RakingPage} />
                    <Route exact path="/Community" component={CommunityPage} />
                </>
            </Switch>
        </Router>
    );
}

export default App;
