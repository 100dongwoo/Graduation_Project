import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll, Link as LinkS } from 'react-scroll';
import { Link, useHistory } from 'react-router-dom';
import DURE from '../../image_video/DURE.png';

import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
                {/**/}
                {/**/}
                <div>
                    <NavDropdown title="게임소개" id="collasible-nav-dropdown">
                        <NavLinkq
                            to="banner"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            <NavDropdown.Item>게임소개</NavDropdown.Item>
                        </NavLinkq>
                        <NavLinkq
                            to="character"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            <NavDropdown.Item>캐릭터</NavDropdown.Item>
                        </NavLinkq>
                        <NavLinkq
                            to="worldview"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            <NavDropdown.Item>세계관</NavDropdown.Item>
                        </NavLinkq>
                        <NavLinkq
                            to="media"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            <NavDropdown.Item>미디어</NavDropdown.Item>
                        </NavLinkq>
                        {/**/}
                        <NavDropdown.Item href="#action/3.1">
                            Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                {/**/}
                {/**/}
                <Navv>
                    <NavLinks to="/login">공지사항</NavLinks>
                    <NavLinks to="/login">가이드</NavLinks>
                    <NavLinks to="/login">랭킹</NavLinks>
                    <NavLinks to="/login">커뮤니티</NavLinks>
                    <NavLinks to="/login">고객센터</NavLinks>
                </Navv>
            </LogoContainer>
        </Container>
    );
}
const NavLinkq = styled(LinkS)`
    //text-decoration: none;
    //color: #000;
    //font-size: 1.2rem;
    //font-weight: 400;
    //cursor: pointer;
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
export default Navbar;
const Container = styled.div`
    width: 100%;
    position: sticky;
    z-index: 2;
    top: 0;
`;
const LogoContainer = styled.div`
    //max-width: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    background: red;
    max-width: 1750px;
    justify-content: space-between;
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
