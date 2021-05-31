import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

function DetailInformation(props) {
    const auth = useSelector((state) => state.auth);
    const { user } = auth;
    return (
        <div>
            <Table bordered hover size="md">
                <thead>
                    <TR>
                        <TableTitleTH>이메일</TableTitleTH>
                        <TableContentTD>{user?.login_id}</TableContentTD>
                        <TableTitleTH> 닉네임</TableTitleTH>
                        <TableContentTD>{user?.nickname}</TableContentTD>
                    </TR>
                </thead>
                <tbody>
                    <TR>
                        <TableTitleTH>레벨</TableTitleTH>
                        <TableContentTD>{user?.level}</TableContentTD>
                        <TableTitleTH>HP</TableTitleTH>
                        <TableContentTD>{user?.hp}</TableContentTD>
                    </TR>
                    <TR>
                        <TableTitleTH>공격력</TableTitleTH>
                        <TableContentTD>{user?.damage}</TableContentTD>
                        <TableTitleTH>방어력</TableTitleTH>
                        <TableContentTD>{user?.defence}</TableContentTD>
                    </TR>
                    <TR>
                        <TableTitleTH>점프력</TableTitleTH>
                        <TableContentTD>LV. {user?.jump}</TableContentTD>
                        {/*<td colSpan="2">Larry the Bird</td>*/}
                        <TableTitleTH>스피드</TableTitleTH>
                        <TableContentTD>LV. {user?.speed}</TableContentTD>
                    </TR>
                </tbody>
            </Table>
        </div>
    );
}
const TR = styled.tr`
    border: 0;
    font-family: 'NanumBarunGothic', 'Malgun Gothic', sans-serif;
    //margin: auto 0;

    vertical-align: center;
    //align-items: center;
`;
const TableTitleTH = styled.th`
    color: #3776c7;
    line-height: 49px;
    height: 49px;
    background-color: #f5f7fc;
    border-left: 1px solid #cfd8e7;
    border-top: 1px solid #cfd8e7;
    text-align: left;
    width: 25%;
    word-break: keep-all;
    @media only screen and (max-width: 1024px) {
        line-height: 19px;
        font-size: 12px;
        height: 29px;
    }
`;
const TableContentTD = styled.th`
    width: 25%;
    font-size: 15px;
    color: #333;
    text-align: left;
    line-height: 49px;
    height: 49px;
    background-color: #fff;
    border-top: 1px solid #cfd8e7;

    @media only screen and (max-width: 1024px) {
        line-height: 19px;
        font-size: 12px;
        height: 29px;
    }
`;
export default DetailInformation;
