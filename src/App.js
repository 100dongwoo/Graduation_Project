import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
    Redirect,
} from 'react-router-dom';
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
import DetailPage from './pages/DetailPage/DetailPage';
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/userSlice';
import Mypage from './pages/Mypage/Mypage';
import RecyclingPage from './pages/RecyclingPage/RecyclingPage';
import NoticeDetaiPage from './pages/NoticeDetailPage/NoticeDetaiPage';

const GlobalStyle = createGlobalStyle`
  body {
     font-family: Noto Sans KR;
     font-weight: 400;
    color: #000000;
     //font-family: payboocLight,serif;
     padding : 0 0;
     margin: 0;
    -ms-overflow-style:none;
    ::-webkit-scrollbar { display:none;
}
 }
`;

function App(props) {
    // const user = useSelector(selectUser);
    const auth = useSelector((state) => state.auth);
    const { user } = auth;
    return (
        <Router>
            <GlobalStyle />
            <div>
                <Help />
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/upload" component={UploadPage} />
                    <Route exact path="/Notice" component={NoticePage} />
                    <Route exact path="/Ranking" component={RakingPage} />
                    <Route exact path="/Community" component={CommunityPage} />
                    <Route exact path="/post/:postId" component={DetailPage} />
                    <Route exact path="/recycling" component={RecyclingPage} />
                    <Route
                        exact
                        path="/notice/:postId"
                        component={NoticeDetaiPage}
                    />
                    <Route
                        exact
                        path="/mypage/:userId"
                        render={
                            () => (!user ? <Redirect to="/" /> : <Mypage />)
                            //    로그인 됬으면                           안됬으면
                        }
                    />
                    {/*<Route component={NoMatch} />*/}
                    <Route
                        // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
                        render={({ history }) => {
                            history.push('/');
                        }}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
