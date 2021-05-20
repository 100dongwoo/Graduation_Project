import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function MonsterContainer({ Monster }) {
    const [bigImage, setBigImage] = useState(Monster[0]);
    const [bigImageNumber, setBigNumber] = useState(0);
    useEffect(() => {
        setBigImage(Monster[0]);
        setBigNumber(0);
    }, [Monster]);
    const onClickHandleRight = (e) => {
        e.preventDefault();
        setBigImage(
            Monster.length === bigImageNumber + 1
                ? Monster[0]
                : Monster[bigImageNumber + 1]
        );
        setBigNumber(
            Monster.length === bigImageNumber + 1 ? 0 : bigImageNumber + 1
        );
    };
    const onClickHandleLeft = (e) => {
        e.preventDefault();
        setBigImage(
            bigImageNumber - 1 < 0
                ? Monster[Monster.length - 1]
                : Monster[bigImageNumber - 1]
        );
        setBigNumber(
            bigImageNumber - 1 < 0 ? Monster.length - 1 : bigImageNumber - 1
        );
    };
    return (
        <Container>
            <ImageList>
                {Monster.map((monster, index) => (
                    <MonsterImageBox key={index} active={bigImage === monster}>
                        <MonsterImage
                            src={monster}
                            alt={index}
                            onClick={(e) => {
                                setBigNumber(e.target.alt);
                                setBigImage(Monster[e.target.alt]);
                                // setBigImage(e.target.src);
                            }}
                        />
                    </MonsterImageBox>
                ))}
            </ImageList>
            <BottomContainer>
                <BigImage src={bigImage} alt="몬스터" />
                <InforContainer>
                    <MonsterName>천년나무 쿠키</MonsterName>
                    <MonsterInfor>
                        비밀스러운 숲 속에 천년의 영광을 누리던 고목이 있었다.
                        대지를 돌보기 위해 땅 속 깊이 뿌리를 뻗어나가던 이
                        나무는, 새빨간 저주가 숲을 침범하자 스스로를 봉인하며
                        잎을 떨구고 잠에 들었다. 쿠키들의 정성으로 깨어난 이후,
                        다른 쿠키들과 함께 세상 밖을 나선 천년나무 쿠키.
                    </MonsterInfor>
                    <Button onClick={onClickHandleLeft}> > </Button>
                    <Button onClick={onClickHandleRight}> > </Button>
                </InforContainer>
            </BottomContainer>
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
const Button = styled.button``;
const InforContainer = styled.div`
    max-width: 500px;
    padding: 2rem 1rem 1rem;
`;
const MonsterName = styled.h1`
    font-size: 3.125rem;
    color: #fff3cd;
    white-space: pre-line;
    line-height: 1.2;
    font-weight: 600;
`;
const MonsterInfor = styled.p`
    white-space: pre-line;
    text-shadow: #594d46 0.1875rem 0.1875rem 0.1875rem;
    color: #c4a893;
    font-size: 1.375rem;
`;
const BottomContainer = styled.div`
    display: flex;
    width: 1000px;
    justify-content: space-between;
`;
const ImageList = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;
const BigImage = styled.img`
    width: 450px;
    height: 600px;
    animation: ${motion} 0.6s linear 0s infinite alternate;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    //justify-content: space-between;
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

    opacity: ${(props) => (props.active ? 1 : 0.4)};
    transition: opacity 500ms ease 0s;
`;
export default MonsterContainer;
