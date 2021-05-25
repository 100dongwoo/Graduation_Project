import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

function Comment({ chat }) {
    return (
        <Container>
            <UserName>{chat.userName}</UserName>
            <ChatContent>{chat.chatContent}</ChatContent>
            <Time>{moment().locale('en').format('LT')}</Time>
        </Container>
    );
}
const Time = styled.p`
    font-size: 12px;
    margin: auto 0;
    white-space: nowrap;
    color: rgba(34, 34, 34, 0.5);
`;
const ChatContent = styled.p`
    font-size: 12px;
    word-break: break-all;
    width: 100%;
    margin: auto 6px;
`;
const UserName = styled.p`
    word-break: keep-all;
    white-space: nowrap;
    //margin-right: 16px;
    font-weight: 400;
    color: #12c0f9;
    margin: auto 0;
`;
const Container = styled.div`
    padding: 0.1rem 0.8rem;
    display: flex;
    justify-content: space-between;
    height: 38px;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    background: #ffffff;
    margin-bottom: 2px;
    align-items: center; ;
`;
export default Comment;
