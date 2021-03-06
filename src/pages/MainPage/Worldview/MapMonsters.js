import React, { useState } from 'react';
import styled from 'styled-components';
import './button.css';
import {
    convenienceStoreMonster,
    countrySideMonster,
    martMonster,
    vinyHouseMonster,
} from './until/importMonster';
import MonsterContainer from './MonsterContainer/MonsterContainer';
function MapMonsters(props) {
    const [pickMaps, setPickMaps] = useState(convenienceStoreMonster);
    const onClickChangeMap = (e, map) => {
        e.preventDefault();
        setPickMaps(map);
    };
    return (
        <TotalContainer>
            <Container id="monsters">
                <MapListContainer>
                    <Button
                        className="snip1535"
                        onClick={(e) => {
                            onClickChangeMap(e, convenienceStoreMonster);
                        }}
                        active={pickMaps === convenienceStoreMonster}
                    >
                        편의점
                    </Button>
                    <Button
                        className="snip1535"
                        onClick={(e) => {
                            onClickChangeMap(e, countrySideMonster);
                        }}
                        active={pickMaps === countrySideMonster}
                    >
                        시골
                    </Button>
                    <Button
                        className="snip1535"
                        onClick={(e) => {
                            onClickChangeMap(e, martMonster);
                        }}
                        active={pickMaps === martMonster}
                    >
                        마트
                    </Button>
                    <Button
                        className="snip1535"
                        onClick={(e) => {
                            onClickChangeMap(e, vinyHouseMonster);
                        }}
                        active={pickMaps === vinyHouseMonster}
                    >
                        비닐 하우스
                    </Button>
                </MapListContainer>
                <MonsterContainer Monster={pickMaps} />
            </Container>
        </TotalContainer>
    );
}
const Button = styled.button`
    //background-color: #c47135;
    border: none;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: 'BenchNine', Arial, sans-serif;
    //font-size: 1em;
    font-size: 22px;
    line-height: 1em;
    margin: 15px 40px;
    outline: none;
    padding: 12px 40px 10px;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    background-color: ${(props) => (props.active ? '#ff534b' : '#c47135')};
    @media only screen and (max-width: 768px) {
        margin: 15px 15px;
        font-size: 1rem;
        padding: 12px 20px 5px;
    }
`;
const MapListContainer = styled.div`
    text-align: center;
    width: 100%;
    max-width: 1000px;
    margin: auto;
`;
const TotalContainer = styled.div`
    width: 100%;
    background-color: #594d46;
    padding: 3rem 0 5rem;
`;
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
`;
export default MapMonsters;
