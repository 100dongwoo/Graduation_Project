import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll, Link as LinkS } from 'react-scroll';
function TopContainer(props) {
    return (
        <TotalContainer>
            <ContainerTop>
                <Title>재활용 119</Title>
                <SubTitle>
                    재활용이 무엇인지 또는 올바르게 재활용하는 방법이 궁금하다면{' '}
                    <br />
                    아래에서 재활용 기본 사항부터 전문가 팁까지 모든 것을
                    배우십시오.
                </SubTitle>
            </ContainerTop>
            <Container>
                <Content>
                    <NavLinkq
                        to="rules"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        3가지 규칙
                    </NavLinkq>
                    <NavLinkq
                        to="Recycles"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        재활용 가이드
                    </NavLinkq>
                    <NavLinkq
                        to="quizes"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        재활용 퀴즈
                    </NavLinkq>
                </Content>
            </Container>
        </TotalContainer>
    );
}
const NavLinkq = styled(LinkS)`
    text-decoration: none !important;
    font-family: 'Inter-Bold', Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    color: #1c8200 !important;
    margin-right: 2rem;
    padding-bottom: 3rem;
    //background: red;
    //height: 100%;
    &:hover {
        border-bottom: 4px solid #01bf71;
    }

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
        margin-right: 1rem;
        margin-left: 1rem;
    }
    @media only screen and (max-device-width: 341px) {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
    }
    //&.active {
    //    border-bottom: 3px solid #01bf71;
    //    transform: scale(1.04);
    //    font-weight: 700;
    //}
`;
const TotalContainer = styled.div`
    margin-top: 5rem;
`;
const Content = styled.div`
    max-width: 1250px;
    margin: auto;
    padding: 3rem 0px;
`;
const Container = styled.div`
    border: 10px solid #f4f4f4;
    border-right: none;
    border-left: none;
    margin-top: 2rem;
    @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`;
//
const ContainerTop = styled.div`
    max-width: 1250px;
    margin: auto;
    padding: 0 0.8rem;
    word-break: keep-all;
`;
const SubTitle = styled.p`
    margin-top: 1rem;
    line-height: 1.5rem;
    font-style: normal;
    font-weight: 400;
    color: #212529;
`;
const Title = styled.h1`
    font-size: 3.5rem !important;
    line-height: 3.25rem;
    word-break: break-word;
    color: #4f4f58;
    font-weight: 500;
`;
export default TopContainer;
