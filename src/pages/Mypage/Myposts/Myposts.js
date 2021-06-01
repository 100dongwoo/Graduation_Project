import React, { useEffect, useState } from 'react';
import { SamplePost } from '../../../SampleData/SampleData';
import styled from 'styled-components';
import PostContainer from './PostContainer';
import axios from 'axios';
import { FailAlert, FailLoginAlert, SuccessAlert } from '../../../Alert/Alert';
import { LOGIN } from '../../../Redux/userSlice';
import { useSelector } from 'react-redux';
import PaginationComponent from '../../../components/Pagination/PaginationComponent';
function Myposts(props) {
    const [posts, setPosts] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(1); //현재 페이지
    const [totalCount, setTotalCount] = useState(null); //게시글의 총 갯수
    const auth = useSelector((state) => state.auth);
    const { user } = auth;
    const handleChange = (e, value) => {
        setPage(value);
        fetchPostMyPosts(value);
    };
    useEffect(() => {
        fetchPostMyPosts(page);
    }, []);
    const fetchPostMyPosts = (page) => {
        // console.log(user?.id);
        let params = {
            user: user?.id,
            page: page,
        };
        axios
            .get(`/posts/?`, { params })
            .then((res) => {
                // console.log('res', res);
                if (res.statusText !== 'OK') {
                    console.log(res);
                    return;
                }
                // console.log(res);
                // if (res.data?.count === 0) {
                //     FailAlert('게시글이 존재하지 않습니다');
                //     return;
                // }
                setPosts(res.data?.results);
                setTotalCount(res.data?.count);
                setTotalPage(
                    parseInt(res.data?.count) !== 0
                        ? parseInt(res.data?.count) % 20 === 0
                            ? parseInt(res.data?.count / 20)
                            : parseInt(res.data?.count / 20) + 1
                        : 1
                );
                // setIsLoading(false);
            })
            .catch((err) => {
                if (err.response.data?.msg) {
                    FailAlert(err.response.data.msg);
                    alert(err.response.data.msg);
                }
            });
    };
    return (
        <div style={{ width: '100%' }}>
            {posts.map((post, index) => (
                <PostContainer
                    post={post}
                    key={index}
                    fetchPostMyPosts={fetchPostMyPosts}
                    page={page}
                />
            ))}
            {totalCount !== 0 ? (
                <PaginationComponent
                    totalPage={totalPage}
                    page={page}
                    handleChange={handleChange}
                />
            ) : (
                <NoPostFont>
                    <UserName>'{user?.nickname}' </UserName> &nbsp;님의 작성된
                    게시글이 없습니다
                </NoPostFont>
            )}
        </div>
    );
}
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
    background: #f9f9f9; ;
`;
export default Myposts;
