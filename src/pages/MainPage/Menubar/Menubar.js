import React from 'react';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
function Menubar(props) {
    return (
        <Container>
            <Nav>
                <NavLinks
                    to="banner"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    게임 맵
                </NavLinks>
                <NavLinks
                    to="monsters"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    몬스터
                </NavLinks>
                <NavLinks
                    to="story"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    세계관
                </NavLinks>
                <NavLinks
                    to="media"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    미디어
                </NavLinks>
                {/*<NavLinks*/}
                {/*    to="worldview"*/}
                {/*    smooth={true}*/}
                {/*    duration={500}*/}
                {/*    spy={true}*/}
                {/*    exact="true"*/}
                {/*    offset={-80}*/}
                {/*>*/}
                {/*    쿠폰입력*/}
                {/*</NavLinks>*/}
            </Nav>
        </Container>
    );
}

export default Menubar;
const Container = styled.div`
    height: 80px;
    width: 100%;
    background: #fff;
    display: flex;
    position: sticky;
    //border-top: 10px solid red;
    box-shadow: 0 2px 15px 0 rgb(0 0 0 / 70%);
    padding: 0 1rem;
`;

const Nav = styled.div`
    align-items: center;
    height: 100%;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 75rem;
    margin: auto;
`;

const NavLinks = styled(LinkS)`
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        //color: #ffe81e;
        transform: scale(1.04);
    }
    //&.active {
    //    border-bottom: 3px solid #01bf71;
    //    transform: scale(1.04);
    //    font-weight: 700;
    //}
`;
