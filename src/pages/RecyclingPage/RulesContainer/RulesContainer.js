import React from 'react';
import styled from 'styled-components';
import trush1 from './1.jpg';
import trush2 from './2.jpg';
import trush3 from './3.jpg';
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
                        <Image
                            src={trush3}
                            // src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131211_39%2Flskart_1386740994178FgCSR_PNG%2Fmobius_eng.png&type=sc960_832"
                            alt="tip1"
                        />
                        <TipInforBox>
                            <TipInformation>
                                깨끗한 병, 캔, 종이는 재활용이 가능해요.
                                {/*Recycle clean bottles,*/}
                                {/*<br /> cans, paper and <br />*/}
                                {/*cardboard.*/}
                            </TipInformation>
                        </TipInforBox>
                    </Tipbox>
                    <Tipbox>
                        <Image
                            src={trush2}
                            // src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131211_39%2Flskart_1386740994178FgCSR_PNG%2Fmobius_eng.png&type=sc960_832"
                            alt="tip1"
                        />
                        <TipInforBox>
                            <TipInformation>
                                종이팩 분리배출함이 없는 경우, 다른 재활용품과
                                함께 배출합니다
                            </TipInformation>
                        </TipInforBox>
                    </Tipbox>
                    <Tipbox>
                        <Image
                            src={trush1}
                            // src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131211_39%2Flskart_1386740994178FgCSR_PNG%2Fmobius_eng.png&type=sc960_832"
                            alt="tip1"
                        />
                        <TipInforBox>
                            <TipInformation>
                                플라스틱과 우우팩은 봉지에 넣으면 안됩니다
                            </TipInformation>
                        </TipInforBox>
                    </Tipbox>
                </TipContent>
            </Content>
        </Container>
    );
}
const TipInforBox = styled.div`
    padding-left: 2rem;
    //padding-top: 0.1rem;
    margin-top: 1rem;
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
`;
const Image = styled.img`
    height: 273px;
    width: 100%;
    //object-fit: cover;
`;
const TipInformation = styled.p`
    align-items: center;
    word-break: keep-all;
`;
const TipContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    margin-top: 3rem;
    //
    font-size: 24px;
    color: #065920;
    line-height: 1.8rem;
    //
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const Tipbox = styled.div`
    padding: 0;
    min-width: 320px;
    max-width: 380px;
    width: 380px;
    height: 390px;
    box-shadow: rgb(0 0 0 / 6%) 0px 4px 8px 0px;
    background-color: rgb(255, 255, 255);
    margin-right: 3rem;
    //background: red;
    //display: flex;
    //flex-direction: column;
    @media only screen and (max-width: 767px) {
        margin-right: 1.5rem;
    }
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
