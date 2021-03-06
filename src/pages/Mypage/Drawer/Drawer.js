import React, { useState } from 'react';
import styled from 'styled-components';
import DetailInformation from '../DetailInformation/DetailInformation';
import Achievements from '../Achievements/Achievements';
import Myposts from '../Myposts/Myposts';

function Drawer(props) {
    const MenuList = ['내 정보', '게시글', '완료 업적', '미완료 업적'];
    const [pickMenu, setPikcMenu] = useState(MenuList[0]);
    const onClickMenu = (e) => {
        setPikcMenu(e.target.innerHTML);
    };
    return (
        <Container>
            <ListMenu>
                <ListsTop
                    style={{
                        border: 'none',
                    }}
                />

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
            <ResponsiveContainer>
                {MenuList.map((Menu, index) => (
                    <ResponsiveMenu
                        key={index}
                        active={pickMenu === Menu}
                        onClick={onClickMenu}
                    >
                        {Menu}
                    </ResponsiveMenu>
                ))}
            </ResponsiveContainer>

            <RightMenuContainer>
                {pickMenu === '게시글' && <Myposts />}
                {pickMenu === '내 정보' && <DetailInformation />}
                {pickMenu === '완료 업적' && <Achievements clear={true} />}
                {pickMenu === '미완료 업적' && <Achievements clear={false} />}
            </RightMenuContainer>
        </Container>
    );
}
const ResponsiveContainer = styled.div`
    display: none;
    @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    }
`;
const ResponsiveMenu = styled.span`
    word-break: keep-all;
    white-space: nowrap;
    cursor: pointer;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    margin-bottom: 0.5rem;
    padding: 10px 7px;
    background: #3776c7;
    color: #ffffff;
    background: ${(props) => (props.active ? 'red' : '#3776c7;')};
`;
const RightMenuContainer = styled.div`
    width: 100%;
    //margin-top: 3rem;
    padding: 2rem 2rem 0;
    margin-bottom: 3rem;
`;
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
    display: flex;
    background: #ffffff;
    @media only screen and (max-width: 1024px) {
        display: block;
    }
`;
const ListMenu = styled.ul`
    list-style: none;
    padding: 0;
    background-color: #f68600;
    text-align: center;
    height: 100%;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;
const ListsTop = styled.li`
    height: 58px;
    font-size: 25px;
    font-weight: bold;
    list-style: none;
    width: 135px;
    color: #ffdcb6;
    border-bottom: 2px solid #ffffff;
    padding-top: 8px;
    background: ${(props) => (props.active ? '#e66500' : '#f68600;')};
`;
const Lists = styled(ListsTop)`
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

export default Drawer;
