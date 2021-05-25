import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostBox from './postBox';
import axios from 'axios';
import { FailAlert } from '../../../Alert/Alert';

function RecycleBox(props) {
    useEffect(() => {
        fetchQuiz();
    }, []);
    const [recycles, setRecycles] = useState({});
    const fetchQuiz = () => {
        axios
            .get('/recycle_infos/')
            .then((res) => {
                // console.log(res);
                if (res.statusText !== 'OK') {
                    console.log(res);
                    return;
                }
                let data = res.data.results;
                let newRecycleInfos = Object.assign({}, recycles);

                data.forEach((recycleInfo) => {
                    let category = recycleInfo.category;
                    if (!newRecycleInfos.hasOwnProperty(category)) {
                        newRecycleInfos[category] = [];
                    }
                    newRecycleInfos[category].push(recycleInfo);
                });
                setRecycles(newRecycleInfos);
            })
            .catch((err) => {
                if (err.response?.data.msg) {
                    FailAlert(err.response.data.msg);
                } else {
                    console.log('에러 : ', err.response);
                }
            });
    };
    // console.log('infos', recycles);
    return (
        <div id="Recycles">
            <TopContainer>
                <TopTitle>재활용 가이드</TopTitle>
                <TopContent>
                    어떤 목적에 사용된 재료나 원료가 목적대로 쓰이고 난 후
                    아직도 쓸모가 있거나 재생할 수 있는 것을 모두 다시 사용하는
                    것을 말한다. <br />
                    종이는 풀어서 재생 종이로, 플라스틱이나 철 종류는 녹여서
                    재생한다. 유리병도 깬 다음에 새로운 유리병으로 만들고
                    <br />
                    소주병, 맥주병은 씻어서 그대로 소주병, 맥주병으로 쓴다.
                </TopContent>
                {/*<div*/}
                {/*    style={{ display: 'flex', justifyContent: 'space-between' }}*/}
                {/*>*/}
                {/*    <TitleBox>*/}
                {/*        <Title>일반쓰레기</Title>*/}
                {/*    </TitleBox>*/}
                {/*    <TitleBox>*/}
                {/*        <Title>분리수거</Title>*/}
                {/*    </TitleBox>*/}
                {/*    <TitleBox>*/}
                {/*        <Title>그 외제품</Title>*/}
                {/*    </TitleBox>*/}
                {/*</div>*/}
            </TopContainer>
            <Container>
                <Content>
                    {/*left*/}
                    <BoxContainer>
                        <TitleBox>
                            <Title>일반쓰레기</Title>
                        </TitleBox>
                        {recycles['일반쓰레기']?.map((post, index) => (
                            <PostBox post={post} key={index} />
                        ))}
                    </BoxContainer>
                    {/*center*/}
                    <BoxContainer>
                        <TitleBox>
                            <Title>분리수거</Title>
                        </TitleBox>
                        {recycles['분리수거']?.map((post, index) => (
                            <PostBox post={post} key={index} />
                        ))}
                    </BoxContainer>
                    {/*right*/}

                    <BoxContainer>
                        <TitleBox>
                            <Title>그 외 제품</Title>
                        </TitleBox>
                        {recycles['그 외 제품']?.map((post, index) => (
                            <PostBox post={post} key={index} />
                        ))}
                    </BoxContainer>
                </Content>
            </Container>
        </div>
    );
}
const TopTitle = styled.h1`
    color: rgb(6, 89, 32);
`;
const TopContent = styled.p`
    margin-top: 1.5rem;
    color: #767676;
    font-size: 1rem;
    font-family: Inter-Regular;
    font-weight: 600;
    line-height: 1.5rem;
`;
const Title = styled.p`
    color: #065920;
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-family: Roboto;
    font-weight: 900;
`;
const TitleBox = styled.div`
    width: 100%;
    text-align: center;
    align-items: center;
    @media only screen and (max-width: 1024px) {
        margin: 1rem 0rem;
    }
`;
const Container = styled.div`
    background: #f4f4f4;
    width: 100%;
    padding: 2rem 0px;
`;
const TopContainer = styled.div`
    max-width: 1250px;
    margin: 2rem auto;
`;
const Content = styled.div`
    max-width: 1250px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
    //flex-direction: column;
`;
const BoxContainer = styled.div`
    //background-color: red;
    width: 370px;
    @media only screen and (max-width: 1024px) {
        ////display: flex;
        //overflow: scroll;
        width: 100%;
    }
`;
export default RecycleBox;
