import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll, Link as LinkS } from 'react-scroll';
import { Link, useHistory } from 'react-router-dom';
import DURE from '../../images/DURE.png';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap';
import LoginModal from '../../pages/LoginPage/LoginModal';
import './css.css';
import { useSelector } from 'react-redux';

function NavBar(props) {
    const auth = useSelector((state) => state.auth);
    const { user } = auth;
    //테스트
    const history = useHistory();
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    const onChannelChange = (e, channel) => {
        e.preventDefault();
        history.push(`/${channel}`);
    };
    const onClickStart = (e) => {
        e.preventDefault();
        window.open('http://naver.me/G7KYsOcc');
    };
    return (
        // <Container>
        //     <LogoContainer>
        //         <Logo
        //             src={DURE}
        //             alt="Logo"
        //             onClick={() => {
        //                 history.push('/');
        //             }}
        //         />
        //         {/*<Navv>*/}
        //         <NavDropdown title="게임소개" id="DropBar">
        //             <NavLinkq
        //                 to="banner"
        //                 smooth={true}
        //                 duration={500}
        //                 spy={true}
        //                 exact="true"
        //                 offset={-80}
        //             >
        //                 <NavDropdown.Item>게임소개</NavDropdown.Item>
        //             </NavLinkq>
        //             <NavLinkq
        //                 to="character"
        //                 smooth={true}
        //                 duration={500}
        //                 spy={true}
        //                 exact="true"
        //                 offset={-80}
        //             >
        //                 <NavDropdown.Item>캐릭터</NavDropdown.Item>
        //             </NavLinkq>
        //             <NavLinkq
        //                 to="worldview"
        //                 smooth={true}
        //                 duration={500}
        //                 spy={true}
        //                 exact="true"
        //                 offset={-80}
        //             >
        //                 <NavDropdown.Item>세계관</NavDropdown.Item>
        //             </NavLinkq>
        //             <NavLinkq
        //                 to="media"
        //                 smooth={true}
        //                 duration={500}
        //                 spy={true}
        //                 exact="true"
        //                 offset={-80}
        //             >
        //                 <NavDropdown.Item>미디어</NavDropdown.Item>
        //             </NavLinkq>
        //             {/**/}
        //         </NavDropdown>
        //
        //         <NavLinks to="/login">공지사항</NavLinks>
        //         <NavLinks to="/login">랭킹</NavLinks>
        //         <NavLinks to="/upload">커뮤니티</NavLinks>
        //         {/*</Navv>*/}
        //         <LoginModal />
        //     </LogoContainer>
        // </Container>
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Logo
                        src={DURE}
                        alt="Logo"
                        onClick={() => {
                            history.push('/');
                        }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link
                            href={'/'}
                            onClick={(e) => {
                                onChannelChange(e, '');
                            }}
                        >
                            게임소개
                        </Nav.Link>
                        {/*<NavDropdown title="게임소개">*/}
                        {/*    <NavLinkq*/}
                        {/*        to="banner"*/}
                        {/*        smooth={true}*/}
                        {/*        duration={500}*/}
                        {/*        spy={true}*/}
                        {/*        exact="true"*/}
                        {/*        offset={-80}*/}
                        {/*        onClick={(e) => {*/}
                        {/*            onChannelChange(e, '');*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <NavDropdown.Item>게임소개</NavDropdown.Item>*/}
                        {/*    </NavLinkq>*/}
                        {/*    <NavLinkq*/}
                        {/*        onClick={(e) => {*/}
                        {/*            onChannelChange(e, '');*/}
                        {/*        }}*/}
                        {/*        to="character"*/}
                        {/*        smooth={true}*/}
                        {/*        duration={500}*/}
                        {/*        spy={true}*/}
                        {/*        exact="true"*/}
                        {/*        offset={-80}*/}
                        {/*    >*/}
                        {/*        <NavDropdown.Item>캐릭터</NavDropdown.Item>*/}
                        {/*    </NavLinkq>*/}
                        {/*    <NavLinkq*/}
                        {/*        to="worldview"*/}
                        {/*        smooth={true}*/}
                        {/*        duration={500}*/}
                        {/*        spy={true}*/}
                        {/*        exact="true"*/}
                        {/*        offset={-80}*/}
                        {/*    >*/}
                        {/*        <NavDropdown.Item>세계관</NavDropdown.Item>*/}
                        {/*    </NavLinkq>*/}
                        {/*    <NavLinkq*/}
                        {/*        to="media"*/}
                        {/*        smooth={true}*/}
                        {/*        duration={500}*/}
                        {/*        spy={true}*/}
                        {/*        exact="true"*/}
                        {/*        offset={-80}*/}
                        {/*    >*/}
                        {/*        <NavDropdown.Item>미디어</NavDropdown.Item>*/}
                        {/*    </NavLinkq>*/}
                        {/*    /!**!/*/}
                        {/*</NavDropdown>*/}

                        <Nav.Link
                            href={'/Notice'}
                            onClick={(e) => {
                                onChannelChange(e, 'Notice');
                            }}
                        >
                            공지사항
                        </Nav.Link>
                        {/*<Nav.Link*/}
                        {/*    href={'/Ranking'}*/}
                        {/*    onClick={(e) => {*/}
                        {/*        onChannelChange(e, 'Ranking');*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    랭킹*/}
                        {/*</Nav.Link>*/}
                        <Nav.Link
                            href={'/Community'}
                            onClick={(e) => {
                                onChannelChange(e, 'Community');
                            }}
                        >
                            커뮤니티
                        </Nav.Link>
                        <Nav.Link
                            href={'/recycling'}
                            onClick={(e) => {
                                onChannelChange(e, 'recycling');
                            }}
                        >
                            퀴즈
                        </Nav.Link>
                        {/*테스트*/}
                        {/*{user && (*/}
                        {/*    <Nav.Link*/}
                        {/*        href={'/mypage'}*/}
                        {/*        onClick={(e) => {*/}
                        {/*            onChannelChange(e, `mypage/${user.id}`);*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        마이페이지*/}
                        {/*    </Nav.Link>*/}
                        {/*)}*/}
                        <Nav.Link
                            href={user ? `mypage/${user?.id}` : 'register'}
                            // href={'/mypage'}
                            onClick={(e) => {
                                let address = user
                                    ? `mypage/${user.id}`
                                    : 'register';
                                onChannelChange(e, address);
                            }}
                        >
                            {user ? '마이페이지' : '회원가입'}
                        </Nav.Link>
                        {/*테스트*/}
                    </Nav>

                    {/**/}
                    <Nav>
                        <a className="download" href="#download" />
                        <div className="platforms" id="platforms">
                            {/*<a href="#windows" data-os="windows"></a>*/}
                            {/*<a href="#Donwload" data-os="다운받기" />*/}
                            {/*<a href="#linux" data-os="linux"></a>*/}
                        </div>

                        <div className="installer" id="download">
                            <div className="info" data-weight="315MB" />
                            <div className="details">
                                <p>Dore Story 다운받기</p>
                                <span>Version 1.0.0</span>
                                <ul>
                                    <li>친환경 게임</li>
                                    <li>재활용 분리수거 게임</li>
                                    <li>재밌는 게임</li>
                                    <li>학습용 게임</li>
                                </ul>
                            </div>
                            <label onClick={onClickStart}>
                                {/*<input type="radio" id="progressMac" />*/}
                                <span />
                            </label>
                            <a className="close" href="#" />
                        </div>
                        {/**/}
                    </Nav>
                    {/**/}
                    <Nav>
                        {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
                        {/*<Nav.Link eventKey={2} href="#memes">*/}
                        {/*    Dank memes*/}
                        {/*</Nav.Link>*/}

                        <LoginModal />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

const NavLinkq = styled(LinkS)`
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        color: #ffe81e;
        transform: scale(1.04);
    }
    &.active {
        border-bottom: 3px solid #01bf71;
        transform: scale(1.04);
        font-weight: 700;
    }
`;
export default NavBar;
const Drop = styled(NavDropdown)`
    &:hover {
        color: #ffe81e;
        transform: scale(1.04);
    }
`;
const Container = styled.div`
    width: 100%;
    position: sticky;
    z-index: 9999;
    top: 0;
`;
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    max-width: 1250px;
    justify-content: space-between;
    height: 5.8rem;
    padding: 0.5rem 0;
`;
const Navv = styled.div`
    align-items: center;
    height: 5.8rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 75rem;
    margin: auto;
    background: red;
`;
const Logo = styled.img`
    width: 106px;
    height: 55px;
    cursor: pointer;
`;
const NavLinks = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        color: #ffe81e;
        transform: scale(1.04);
    }
    &.active {
        border-bottom: 3px solid #01bf71;
        transform: scale(1.04);
        font-weight: 700;
    }
`;
