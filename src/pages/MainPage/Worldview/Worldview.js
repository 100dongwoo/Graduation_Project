import React, { useState } from 'react';
import styled from 'styled-components';
import './button.css';
import {
    convenienceStoreMonster,
    countrySideMonster,
    martMonster,
} from './until/importMonster';
import MonsterContainer from './MonsterContainer/MonsterContainer';

function Worldview(props) {
    const [pickMaps, setPickMaps] = useState(convenienceStoreMonster);
    const onClickChangeMap = (e, map) => {
        e.preventDefault();
        setPickMaps(map);
    };
    return (
        <TotalContainer>
            <Container id="worldview">
                <MapListContainer>
                    <button
                        className="snip1535"
                        onClick={(e) => {
                            onClickChangeMap(e, convenienceStoreMonster);
                        }}
                    >
                        편의점
                    </button>
                    <button
                        className="snip1535"
                        onClick={(e) => {
                            onClickChangeMap(e, countrySideMonster);
                        }}
                    >
                        마트
                    </button>
                    <button
                        className="snip1535"
                        onClick={(e) => {
                            onClickChangeMap(e, martMonster);
                        }}
                    >
                        시골
                    </button>
                </MapListContainer>
                <MonsterContainer Monster={pickMaps} />
            </Container>
        </TotalContainer>
    );
}
const MapListContainer = styled.div`
    text-align: center;
    width: 100%;
    background-color: red;
    max-width: 800px;
    margin: auto;
`;
const TotalContainer = styled.div`
    width: 100%;
    background-color: #594d46;
`;
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
`;
export default Worldview;
