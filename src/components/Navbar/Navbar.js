import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { Link, useHistory } from 'react-router-dom';
import DURE from '../../image_video/DURE.png';
function Navbar(props) {
    const history = useHistory();
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    const Navbar = styled(Link)``;
    return (
        <Container>
            <LogoContainer>
                <Logo
                    src={DURE}
                    alt="Logo"
                    onClick={() => {
                        history.push('/');
                    }}
                />
                <Nav>
                    <NavLinks to="/login">공지사항</NavLinks>
                    <NavLinks to="/login">가이드</NavLinks>
                    <NavLinks to="/login">랭킹</NavLinks>
                    <NavLinks to="/login">커뮤니티</NavLinks>
                    <NavLinks to="/login">고객센터</NavLinks>
                </Nav>
            </LogoContainer>
        </Container>
    );
}

export default Navbar;
const Container = styled.div`
    width: 100%;
    position: sticky;
    z-index: 2;
    top: 0;
    background: #fff;
`;
const LogoContainer = styled.div`
    max-width: 1250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`;
const Nav = styled.div`
    align-items: center;
    height: 5.8rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 75rem;
    margin: auto;
`;
const Logo = styled.img`
    margin-right: 130px;
    width: 106px;
    height: 55px;
    cursor: pointer;
`;
const SideMenu = styled.p`
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        color: #ffe81e;
        transform: scale(1.04);
    }
    //@media only screen and (max-width: 1024px) {
    //    display: inline-block !important;
    //}
`;
// 리액트 스크롤
const NavItem = styled.li`
    height: 80px;
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
