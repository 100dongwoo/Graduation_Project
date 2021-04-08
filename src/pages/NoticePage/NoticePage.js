import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FailAlert } from '../../Alert/Alert';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Pagination from '@material-ui/lab/Pagination';

function NoticePage(props) {
    const [noticePost, setNoticepost] = useState([]);
    const [page, setPage] = useState(1); //현재 페이지
    const [totalPage, setTotalPage] = useState(1); //  전체 크기
    useEffect(() => {
        fetchNotice();
    }, []);
    const handleChange = (e, value) => {
        e.preventDefault();
        setPage(value);
        fetchNotice(value);
    };
    const fetchNotice = () => {
        axios
            .get('/notices/')
            .then((res) => {
                if (res.statusText !== 'OK') {
                    // console.log(res);
                    return;
                }
                console.log('성공 공지사항', res);
                setNoticepost(res.data);
            })
            .catch((err) => {
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                } else {
                    console.log('에러 : ', err);
                }
            });
    };
    return (
        <Container>
            <Title>공지사항</Title>
            <Table hover size="sm" style={{ borderBottom: '4px solid #222' }}>
                <thead>
                    <Headtr>
                        <HeadTitleTH>제목</HeadTitleTH>
                        <HeadUserTH>등록일</HeadUserTH>
                    </Headtr>
                </thead>
                <tbody>
                    {noticePost.map((post, index) => (
                        <TR
                            key={index}
                            // onClick={(e) => {
                            //     onClickToDetail(e, post.id);
                            // }}
                        >
                            <ContentTitle>{post.title}</ContentTitle>
                            <ContentSmall>
                                {post.created_at.substr(0, 10)}
                            </ContentSmall>
                        </TR>
                    ))}
                </tbody>
            </Table>
            <Pagination
                count={totalPage}
                variant="outlined"
                shape="rounded"
                value={page}
                onChange={handleChange}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            />
        </Container>
    );
}
const Container = styled.div`
    max-width: 1100px;
    padding: 1.5rem;
    margin: 3rem auto auto;
`;
const TR = styled.tr`
    cursor: pointer;
`;
const TH = styled.th`
    line-height: 3.25;
    font-size: 1.2rem;
    color: #000000;
`;
const HeadTitleTH = styled(TH)`
    //text-align: left;
    //width: 75%;
    //white-space: nowrap;
    //font-family: 'NotoSansKR', sans-serif;
    text-align: left;
    width: 80%;
    min-width: 4.3rem;
`;
const HeadUserTH = styled(TH)`
    text-align: center;
    width: 10%;
    min-width: 4.3rem;
`;

const Headtr = styled.tr`
    border-bottom: 3px solid #919191;
    border-top: 4px solid #222;
`;
const TD = styled.td`
    line-height: 3.25;
    font-weight: normal;
    text-overflow: ellipsis;
`;
const ContentTitle = styled(TD)`
    text-align: left;
`;

const ContentSmall = styled(TD)`
    text-align: center;
`;
const Title = styled.h3`
    font-weight: 500;
    font-size: 40px;
    color: #000;
    line-height: 54px;
    letter-spacing: -3px;
    margin-bottom: 4.5rem;
`;
export default NoticePage;
