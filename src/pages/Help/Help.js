import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chatting from './Chatting/Chatting';

function Help(props) {
    const [isHelp, setIsHelp] = useState(true);
    const [isTooltipActive, setIsTooltipActive] = useState(false);
    function sleep(ms) {
        const wakeUpTime = Date.now() + ms;
        while (Date.now() < wakeUpTime) {}
    }
    const showTooltip = () => {
        setIsTooltipActive(true);
    };
    const hideTooltip = () => {
        // sleep(2000);
        setIsTooltipActive(false);
    };
    const onHandleHelp = (e) => {
        setIsHelp(!isHelp);
    };
    return (
        <Container>
            <HelpBox onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                <Social
                    className={
                        isHelp
                            ? 'far fa-times-circle'
                            : 'fas fa-question-circle'
                    }
                    onClick={onHandleHelp}
                />
            </HelpBox>

            {isHelp && <Chatting />}
            {isTooltipActive && !isHelp && (
                <ToolTipbox>
                    실시간 채팅을 확인 해보세요! &nbsp;
                    <Icon className="far fa-grin-hearts" />
                </ToolTipbox>
            )}
        </Container>
    );
}
const Icon = styled.i`
    font-size: 14px;
`;
const ToolTipbox = styled.div`
    position: absolute;
    bottom: 20px;
    right: calc(100% + 10px);
    width: 128px;
    height: 3.2rem;
    padding: 6px 10px;
    font-size: 14px;
    word-break: keep-all;
    color: #222;
    border-radius: 6px;
    letter-spacing: -0.5px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
`;
// const Container = styled.div`
//     position: fixed;
//     right: 12px;
//     bottom: 10px;
//     z-index: 10000;
// `;
const Container = styled.div`
    position: fixed;
    right: 12px;
    bottom: 10px;
    z-index: 10000;
`;

const Social = styled.i`
    color: #000;
`;
const HelpBox = styled.div`
    background: white;
    font-size: 3rem;
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    text-decoration: none;
    //&: hover {
    //    opacity: 0.8;
    //}
`;
const HelpContainer = styled.div`
    position: absolute;
    background: red;
    bottom: 0;
    height: 300px;
    right: calc(100% + 10px);
    width: 360px;
    -webkit-box-shadow: 0 0 30px 0 rgb(0 0 0 / 29%);
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 29%);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;
export default Help;
