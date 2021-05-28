import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChattingSampe } from '../../../SampleData/SampleData';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
function Chatting(props) {
    const socketRef = useRef();
    const [chats, setChats] = useState([]);
    useEffect(() => {
        socketRef.current = io.connect('http://54.180.217.191:5000');
        socketRef.current.on('message', ({ userName, chatContent }) => {
            setChats([...chats, { userName, chatContent }]);
        });
        return () => socketRef.current.disconnect();
    }, [chats]);
    // useEffect(() => {
    //     socket.on('message', (payload) => {
    //         setChats([...chats, payload]);
    //     });
    // });
    //
    const [containerSize, setContainerSize] = useState(true);
    const [chatContent, setChatContent] = useState('');
    const [userName, setUserName] = useState('');
    // const [chats, setChats] = useState(ChattingSampe);
    const auth = useSelector((state) => state.auth);
    const { user } = auth;
    const chatContainer = React.createRef();
    const scrollToMyRef = () => {
        const scroll =
            chatContainer.current.scrollHeight -
            chatContainer.current.clientHeight;
        // console.log(scroll);
        chatContainer.current.scrollTo(0, scroll);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(chatContent);
        if (!chatContent) {
            console.log('빈칸');
            return;
        }
        //socket
        // if (chatContent) {
        //     socket.emit('message', chatContent);
        //     setChatContent('');
        // }{ user, message }
        let userName = user ? user?.nickname : '비 회원';
        socketRef.current.emit('message', { userName, chatContent });
        // socket.emit('message', { chatContent });
        setChatContent('');
        scrollToMyRef();
    };

    return (
        <HelpContainer containerSize={containerSize}>
            <TitleContainer>
                {/*<div style={{ margin: 0, backgroundColor: 'red' }}>*/}
                {/*    <span>Dore-Story </span>*/}
                {/*    <i className="fas fa-comment-dots" />*/}
                {/*</div>*/}
                <i className="fas fa-comment-dots" />
                <span>실시간 챗팅</span>
                <Icon
                    onClick={() => setContainerSize(!containerSize)}
                    className={
                        containerSize
                            ? 'fas fa-expand-alt'
                            : 'fas fa-compress-arrows-alt'
                    }
                />
            </TitleContainer>
            <ChatContainer ref={chatContainer}>
                {chats.map((chat, index) => (
                    <Comment chat={chat} key={index} />
                ))}
            </ChatContainer>
            {true ? (
                <InputShowBox onSubmit={onSubmitHandler}>
                    <InputBox
                        placeholder="입력하세요"
                        type="text"
                        value={chatContent}
                        onChange={(e) => setChatContent(e.currentTarget.value)}
                    />
                    <SubmitIcon
                        user={user}
                        className="fas fa-arrow-circle-up"
                        onClick={onSubmitHandler}
                    />
                </InputShowBox>
            ) : (
                <InputShowBox style={{ color: '#adadad' }}>
                    로그인 후 사용 바랍니다
                </InputShowBox>
            )}
        </HelpContainer>
    );
}

const SubmitIcon = styled.i`
    font-size: 1.7rem;
    color: #adadad;
    &:hover {
        color: ${(props) => (props.user ? '#14adea' : '#adadad')};
    }
    cursor: ${(props) => (props.user ? 'pointer' : 'unset')};
`;
const InputShowBox = styled.form`
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background: #ffffff;
`;
const LengthTitle = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.055em;
    color: #c4c4c4;
    margin-right: 15px;
`;
const InputContaine2r = styled.div`
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    max-width: 800px;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    background: red;
`;
const InputBox = styled.input`
    width: 100%;
    height: 100%;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 23px;
    letter-spacing: 0.055em;
    //color: #292c30;
    border: none;
    outline: none;
    flex: 1;
    padding: 10px 8px;
`;

const ChatContainer = styled.div`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;

    background: #fff;
`;
const Icon = styled.i`
    font-size: 1.2rem;
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 4px 4px 0 0;
    background-color: #505669;
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
    align-items: center;
    color: #ffffff;
`;
const HelpContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0 0 30px 0 rgb(0 0 0 / 29%);
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 29%);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    bottom: 0;
    height: ${(props) => (props.containerSize ? '500px' : '700px')};
    right: calc(100% + 10px);
    width: 360px;
`;
export default Chatting;
