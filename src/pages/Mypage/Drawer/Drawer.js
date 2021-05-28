import React, { useState } from 'react';
import styled from 'styled-components';
import DetailInformation from '../DetailInformation/DetailInformation';
import Achievements from '../Achievements/Achievements';
import Myposts from '../Myposts/Myposts';

function Drawer(props) {
    const MenuList = ['게시글', '내 정보', '완료 업적', '미완료 업적'];
    const [pickMenu, setPikcMenu] = useState(MenuList[0]);
    const onClickMenu = (e) => {
        setPikcMenu(e.target.innerHTML);
    };
    return (
        <Container>
            <ListMenu onClick={onClickMenu}>
                {MenuList.map((Menu, index) => (
                    <Lists
                        key={index}
                        active={pickMenu === Menu}
                        onClick={onClickMenu}
                    >
                        {Menu}
                    </Lists>
                ))}
            </ListMenu>
            <RightMenuContainer>
                {pickMenu === '게시글' && <Myposts />}
                {pickMenu === '내 정보' && <DetailInformation />}
                {pickMenu === '완료 업적' && <Achievements clear={true} />}
                {pickMenu === '미완료 업적' && <Achievements clear={false} />}
            </RightMenuContainer>
        </Container>
    );
}
const RightMenuContainer = styled.div`
    width: 100%;
`;
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
    display: flex;
`;
const ListMenu = styled.ul`
    list-style: none;
    padding: 0;
    background-color: #f68600;
    text-align: center;
    height: 100%;
    margin-right: 2.5rem;
`;
const Lists = styled.li`
    height: 58px;
    font-size: 25px;
    font-weight: bold;
    list-style: none;
    width: 135px;
    color: #ffdcb6;
    border-top: 2px solid #ffffff;
    padding-top: 8px;
    background: ${(props) => (props.active ? 'blue' : '#f68600;')};
    cursor: pointer;
    &:hover {
        background: red;
    }
`;
export default Drawer;
