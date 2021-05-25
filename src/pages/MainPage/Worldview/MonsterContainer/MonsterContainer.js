import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function MonsterContainer({ Monster }) {
    const [bigImage, setBigImage] = useState(Monster[0]?.image);
    const [bigImageNumber, setBigImageNumber] = useState(0);
    useEffect(() => {
        setBigImage(Monster[0].image);
        setBigImageNumber(0);
    }, [Monster]);
    const onClickHandleRight = (e) => {
        e.preventDefault();
        setBigImage(
            Monster.length === bigImageNumber + 1
                ? Monster[0]?.image
                : Monster[bigImageNumber + 1]?.image
        );
        setBigImageNumber(
            Monster.length === bigImageNumber + 1 ? 0 : bigImageNumber + 1
        );
    };
    const onClickHandleLeft = (e) => {
        e.preventDefault();
        setBigImage(
            bigImageNumber - 1 < 0
                ? Monster[Monster.length - 1]?.image
                : Monster[bigImageNumber - 1]?.image
        );
        setBigImageNumber(
            bigImageNumber - 1 < 0 ? Monster.length - 1 : bigImageNumber - 1
        );
    };
    return (
        <Container>
            <ImageList>
                {Monster.map((monster, index) => (
                    <MonsterImageBox
                        key={index}
                        active={bigImage === monster.image}
                    >
                        <MonsterImage
                            src={monster.image}
                            alt={index}
                            onClick={(e) => {
                                e.preventDefault();
                                setBigImage(Monster[e.target.alt].image);
                                setBigImageNumber(parseInt(e.target.alt));
                                // setBigImage(e.target.src);
                            }}
                        />
                    </MonsterImageBox>
                ))}
            </ImageList>
            <BottomContainer>
                <BigImage src={bigImage} alt="몬스터" />
                <InforContainer>
                    <MonsterName>{Monster[bigImageNumber]?.title}</MonsterName>
                    <MonsterInfor>
                        {Monster[bigImageNumber]?.infor}
                    </MonsterInfor>
                    <div>
                        <Button onClick={onClickHandleLeft}> > </Button>
                        <Button onClick={onClickHandleRight}> > </Button>
                    </div>
                </InforContainer>
            </BottomContainer>
        </Container>
    );
}
const motion = keyframes`
  0% {
    padding-top: 0;
    
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
    padding: 2rem 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 430px;
    @media only screen and (max-width: 768px) {
        margin: auto;
    }
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
    width: 100%;
    max-width: 1000px;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const ImageList = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;
const BigImage = styled.img`
    max-width: 450px;
    height: 400px;
    animation: ${motion} 0.6s linear 0s infinite alternate;

    @media only screen and (max-width: 768px) {
        margin: auto;
        max-width: 300px;
        max-height: 300px;
    }
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
