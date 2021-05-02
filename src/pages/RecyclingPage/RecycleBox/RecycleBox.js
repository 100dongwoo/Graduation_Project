import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SampleData } from '../../../SampleData/SampleData';
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
                console.log(res);
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
    console.log('infos', recycles);
    return (
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
    );
}
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

    box-shadow: rgb(0 0 0 / 10%) 0px 6px 6px 0px;
`;
const Container = styled.div`
    background: #f4f4f4;
    width: 100%;
`;
const Content = styled.div`
    max-width: 1250px;
    margin: auto;
    display: flex;
    justify-content: center;
    //flex-direction: column;
`;
const BoxContainer = styled.div``;
export default RecycleBox;
