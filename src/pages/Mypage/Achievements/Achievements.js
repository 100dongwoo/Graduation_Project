import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FailAlert } from '../../../Alert/Alert';
import AchievementPost from './AchievementPost';
import styled from 'styled-components';
import PaginationComponent from '../../../components/Pagination/PaginationComponent';
import { useSelector } from 'react-redux';

function Achievements({ clear }) {
    const [achievements, setAchievements] = useState([]);
    const [page, setPage] = useState(1); //현재 페이지
    const [totalPage, setTotalPage] = useState(1); //  전체 크기
    const [totalCount, setTotalCount] = useState(null); //게시글의 총 갯수
    const auth = useSelector((state) => state.auth);
    const [isReady, setIsReady] = useState(false);
    const { user } = auth;
    useEffect(() => {
        FetchQAchievement(1);
    }, []);
    const handleChange = (e, value) => {
        // e.preventDefault();
        setPage(value);
        FetchQAchievement(value);
    };
    const FetchQAchievement = (page) => {
        let page_size = 4;
        let params = {
            is_clear: clear,
            user: user?.id,
            page_size: page_size,
            page: page,
        };

        axios
            .get('/careers/', { params })
            .then((res) => {
                // console.log(res);
                if (res.statusText !== 'OK') {
                    console.log(res);
                    return;
                }

                setAchievements(res.data.results);
                setTotalCount(res.data?.count);
                setTotalPage(
                    parseInt(res.data?.count) !== 0
                        ? parseInt(res.data?.count) % page_size === 0
                            ? parseInt(res.data?.count / page_size)
                            : parseInt(res.data?.count / page_size) + 1
                        : 1
                );
                setIsReady(true);
            })
            .catch((err) => {
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                } else {
                    console.log('에러 : ', err.response);
                }
            });
    };
    return (
        <>
            <Container>
                <MenuContainer>
                    {<h1>{clear ? '업적' : '미완료 업적'}</h1>}
                </MenuContainer>
                {achievements?.map((achievement) => (
                    <AchievementPost post={achievement} key={achievement.id} />
                ))}
                {totalCount !== 0 ? (
                    <PaginationComponent
                        totalPage={totalPage}
                        page={page}
                        handleChange={handleChange}
                    />
                ) : clear ? (
                    <NoPostFont>
                        <UserName>'{user?.nickname}' </UserName> &nbsp; 님의
                        완료 업적이 없습니다.
                    </NoPostFont>
                ) : (
                    <NoPostFont>
                        <UserName>'{user?.nickname}' </UserName> &nbsp; 님은
                        모든 업적을 완료하셨습니다
                    </NoPostFont>
                )}
            </Container>
        </>
    );
}

export default Achievements;
const UserName = styled.p`
    color: #3776c7;
    font-size: 1.9rem;
    margin-top: 2px;
    height: 100%;
`;
const NoPostFont = styled.span`
    color: black;
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #f9f9f9;
    text-align: center;
    padding-top: 3px;
`;
const Container = styled.div`
    margin-bottom: 3rem;
`;
const MenuContainer = styled.div`
    border-bottom: 4px solid #dedede;
    margin-bottom: 1rem;
`;
