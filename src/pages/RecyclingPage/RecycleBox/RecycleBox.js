import React from 'react';
import styled from 'styled-components';
import { SampleData } from '../../../SampleData/SampleData';
import PostBox from './postBox';

function RecycleBox(props) {
    return (
        <Container>
            <Content>
                {/*left*/}
                <BoxContainer>
                    {SampleData.map((post, index) => (
                        <PostBox post={post} key={index} />
                    ))}
                </BoxContainer>
                {/*center*/}
                <BoxContainer>
                    {SampleData.map((post, index) => (
                        <PostBox post={post} key={index} />
                    ))}
                </BoxContainer>
                {/*right*/}
                <BoxContainer>
                    {SampleData.map((post, index) => (
                        <PostBox post={post} key={index} />
                    ))}
                </BoxContainer>
            </Content>
        </Container>
    );
}
const Container = styled.div`
    background: #f4f4f4;
    width: 100%;
`;
const Content = styled.div`
    max-width: 1250px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    //flex-direction: column;
`;
const BoxContainer = styled.div``;
export default RecycleBox;
