import React from 'react';
import styled from 'styled-components';
import './css.css';

function Character(props) {
    const onClickStart = (e) => {
        e.preventDefault();
        window.open('http://naver.me/Gw5JVQYC');
    };
    return (
        <Container id="character">
            {
                /*<Content></Content>*/
                <figure className="snip1445">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample84.jpg"
                        alt="sample84"
                    />
                    <figcaption>
                        <GameStartContainer onClick={onClickStart}>
                            <h2>게임시작</h2>
                            <h4>START</h4>
                        </GameStartContainer>
                    </figcaption>
                    {/*<a href="#"></a>*/}
                </figure>
            }
        </Container>
    );
}
const GameStartContainer = styled.div`
    cursor: pointer;
`;
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
    height: 1200px;
    background: blue;
`;
export default Character;
