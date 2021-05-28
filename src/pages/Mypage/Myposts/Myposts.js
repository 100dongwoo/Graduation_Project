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
    const auth = useSelector((state) => state.auth);
    const { user } = auth;
    const handleChange = (e, value) => {
        setPage(value);
        fetchPostMyPosts(value);
    };
    useEffect(() => {
        fetchPostMyPosts(page);
    }, [posts]);
    const fetchPostMyPosts = (page) => {
        axios
            .get(`/posts/`, { user: user?.id, page: page })
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
                setTotalPage(
                    parseInt(res.data?.count) !== 0
                        ? parseInt(res.data.count) % 20 === 0
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
        <div>
            {posts.map((post, index) => (
                <PostContainer post={post} key={index} />
            ))}
            <PaginationComponent
                totalPage={totalPage}
                page={page}
                handleChange={handleChange}
            />
        </div>
    );
}

export default Myposts;
