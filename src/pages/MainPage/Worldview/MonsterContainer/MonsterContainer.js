import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function MonsterContainer({ Monster }) {
    const [bigImage, setBigImage] = useState(Monster[0]);
    useEffect(() => {
        setBigImage(Monster[0]);
    }, [Monster]);
    return (
        <Container>
            <div>
                {Monster.map((monster, index) => (
                    <MonsterImageBox key={index} active={bigImage === monster}>
                        <MonsterImage
                            src={monster}
                            alt={index}
                            onClick={(e) => {
                                console.log(e.target.alt);
                                setBigImage(Monster[e.target.alt]);
                                // setBigImage(e.target.src);
                            }}
                        />
                    </MonsterImageBox>
                ))}
            </div>
            <div>{<BigImage src={bigImage} alt="몬스터" />}</div>
        </Container>
    );
}
const motion = keyframes`
  0% {
    padding-top: 0px;
  }
  //50% {
  //  opacity: 0;
  //}
  100% {
   padding-top: 30px;
  }
`;
const BigImage = styled.img`
    width: 450px;
    height: 600px;
    animation: ${motion} 0.6s linear 0s infinite alternate;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const MonsterImage = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;
const MonsterImageBox = styled.div`
    width: 135px;
    height: 135px;
    //padding: 1rem;
    border: 2px solid #adadad;
    margin-bottom: 2rem;
    opacity: ${(props) => (props.active ? 1 : 0.4)};
    transition: opacity 500ms ease 0s;
`;
export default MonsterContainer;
