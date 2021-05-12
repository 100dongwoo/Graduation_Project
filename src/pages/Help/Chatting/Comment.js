import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

function Comment({ chat }) {
    return (
        <Container>
            <UserName>{chat?.user}</UserName>
            <ChatContent>{chat?.content}</ChatContent>

            <Time>{moment().format('LT')}</Time>
        </Container>
    );
}
const Time = styled.p`
    font-size: 12px;
    margin: auto 0;
`;
const ChatContent = styled.span`
    font-size: 12px;
    word-break: break-all;
`;
const UserName = styled.span`
    word-break: keep-all;
    margin-right: 6px;
    font-weight: 400;
    color: #12c0f9;
`;
const Container = styled.div`
    padding: 0 1rem;
    display: flex;
    //justify-content: space-between;
    height: 88px;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    background: #ffffff;
    margin-bottom: 2px;
    align-items: center;
`;
export default Comment;
