import React, { useState } from 'react';
import styled from 'styled-components';

function Help(props) {
    const [isHelp, setIsHelp] = useState(false);
    const onHandleHelp = (e) => {
        setIsHelp(!isHelp);
    };
    return (
        <Container>
            <HelpBox>
                <Social
                    className={
                        isHelp
                            ? 'far fa-times-circle'
                            : 'fas fa-question-circle'
                    }
                    onClick={onHandleHelp}
                />
            </HelpBox>
            {isHelp && <HelpContainer></HelpContainer>}
        </Container>
    );
}
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
    font-size: 3rem;
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    text-decoration: none;
    &: hover {
        opacity: 0.8;
    }
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
