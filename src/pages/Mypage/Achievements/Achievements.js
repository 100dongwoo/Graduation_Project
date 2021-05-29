import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FailAlert } from '../../../Alert/Alert';
import AchievementPost from './AchievementPost';
import styled from 'styled-components';
import PaginationComponent from '../../../components/Pagination/PaginationComponent';

function Achievements({ clear }) {
    const [achievements, setAchievements] = useState([]);
    const [page, setPage] = useState(1); //현재 페이지
    const [totalPage, setTotalPage] = useState(1); //  전체 크기
    useEffect(() => {
        FetchQAchievement(1);
    }, []);
    const handleChange = (e, value) => {
        // e.preventDefault();
        setPage(value);
        FetchQAchievement(value);
    };
    const FetchQAchievement = (page) => {
        let params = { page };
        axios
            .get(`/careers/?is_clear=${clear}`, { params })
            .then((res) => {
                // console.log(res);
                if (res.statusText !== 'OK') {
                    console.log(res);
                    return;
                }

                setAchievements(res.data.results);
                setTotalPage(
                    parseInt(res.data.count) !== 0
                        ? parseInt(res.data.count) % 4 === 0
                            ? parseInt(res.data.count / 4)
                            : parseInt(res.data.count / 4) + 1
                        : 1
                );
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
        <Container>
            <MenuContainer>
                {<h1>{clear ? '업적' : '미완료 업적'}</h1>}
            </MenuContainer>
            {achievements?.map((achievement) => (
                <AchievementPost post={achievement} key={achievement.id} />
            ))}
            <PaginationComponent
                totalPage={totalPage}
                page={page}
                handleChange={handleChange}
            />
        </Container>
    );
}

export default Achievements;
const Container = styled.div`
    margin-bottom: 3rem;
`;
const MenuContainer = styled.div`
    border-bottom: 4px solid #dedede;
`;
