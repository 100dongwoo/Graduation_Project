import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function MonsterContainer({ Monster }) {
    const [bigImage, setBigImage] = useState(Monster[0]);
    useEffect(() => {
        setBigImage(Monster[0]);
    }, [Monster]);
    return (
        <Container>
            {/*{console.log('?', bigImage)}*/}
            <div>
                {Monster.map((monster, index) => (
                    <MonsterImageBox key={index}>
                        <MonsterImage
                            src={monster}
                            alt={index}
                            onClick={(e) => {
                                console.log(e.target.src);
                                // setBigImage(Monster[e.target.alt]);
                                setBigImage(e.target.src);
                            }}
                        />
                    </MonsterImageBox>
                ))}
            </div>
            <div>{<BigImage src={bigImage} alt="몬스터" />}</div>
        </Container>
    );
}
const BigImage = styled.img`
    width: 450px;
    height: 600px;
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
`;
export default MonsterContainer;
