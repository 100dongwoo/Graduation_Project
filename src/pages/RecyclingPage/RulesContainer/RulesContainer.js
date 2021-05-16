import React from 'react';
import styled from 'styled-components';

function RulesContainer(props) {
    return (
        <Container id="rules">
            <Content>
                <Title>
                    재활용 방법 : 이 세 가지 규칙 사용 <br /> 올바른 재활용!
                </Title>
                <Information>
                    기본으로 돌아갈 시간입니다. 사실 일부 재활용 조치는 다른
                    것보다 더 큰 영향을 미칩니다.
                    <br /> 따라서 다음에 재활용 할 때이 세 가지 기본 규칙을
                    기억하십시오
                </Information>
                <TipContent>
                    <Tipbox>
                        <img
                            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131211_39%2Flskart_1386740994178FgCSR_PNG%2Fmobius_eng.png&type=sc960_832"
                            alt="tip1"
                        />
                    </Tipbox>
                    <Tipbox>
                        <img
                            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131211_39%2Flskart_1386740994178FgCSR_PNG%2Fmobius_eng.png&type=sc960_832"
                            alt="tip1"
                        />
                    </Tipbox>
                    <Tipbox>
                        <img
                            style={{ width: '100%', height: '100%' }}
                            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131211_39%2Flskart_1386740994178FgCSR_PNG%2Fmobius_eng.png&type=sc960_832"
                            alt="tip1"
                        />
                    </Tipbox>
                </TipContent>
            </Content>
        </Container>
    );
}

const TipContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    margin-top: 3rem;
`;
const Tipbox = styled.div`
    padding: 1rem;
    width: 380px;
    height: 390px;
    box-shadow: rgb(0 0 0 / 6%) 0px 4px 8px 0px;
    background-color: rgb(255, 255, 255);
    border: 0px;
    //background: red;
`;
const Information = styled.div`
    font-size: medium;
    color: #212529;
    text-align: left;
    font-weight: 400;
    box-sizing: inherit;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    -webkit-font-smoothing: antialiased;
`;
const Container = styled.div`
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 2.5rem;
    background-color: #f4f4f4;
    padding: 2rem 0;
`;
const Content = styled.div`
    max-width: 1250px;
    margin: auto;
`;
const Title = styled.h1`
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: #4f4f58;
    font-weight: 600;
`;
export default RulesContainer;
