import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FailAlert } from '../../Alert/Alert';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
function NoticeDetaiPage(props) {
    const [post, setPost] = useState([]);
    const postId = props.match.params.postId; ///URL 에서 가져옴
    const history = useHistory();
    useEffect(() => {
        fetchPost();
    }, []);
    const fetchPost = () => {
        axios
            .get(`/notices/${postId}/`)
            .then((res) => {
                if (res.statusText !== 'OK') {
                    FailAlert('존재하지 않는 게시글 입니다');
                    return;
                }
                setPost(res.data);
            })
            .catch((err) => {
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                } else {
                    console.log('에러 : ', err);
                    FailAlert('존재하지 않는 게시글 입니다');
                    history.push('/');
                }
            });
    };
    return (
        <Container>
            <NoticeFont>공지사항</NoticeFont>
            <NoticeContainer>
                <CreateDate>{moment(post?.created_at).format('ll')}</CreateDate>

                <Title>{post?.title}</Title>
                <Content>{post?.content}</Content>
                <img
                    src={post?.image}
                    style={{
                        width: 300,
                        height: 250,
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        fontSize: '100px',
                    }}
                    alt="image"
                />
            </NoticeContainer>
        </Container>
    );
}

export default NoticeDetaiPage;
const Content = styled.p`
    font-size: 1rem;
    word-break: keep-all;
    white-space: pre-wrap;
    font-family: Arial;
    letter-spacing: -0.045em;
    line-height: 1.9; ;
`;
const CreateDate = styled.p`
    line-height: 27px;
    letter-spacing: 0;
    color: #777;
    font-size: 18px;
    margin-bottom: 0px;
    font-family: 'NotoSansKR', sans-serif;
    font-weight: 600;
`;
const Title = styled.p`
    padding-top: 6px;
    font-size: 32px;
    line-height: 47px;
    letter-spacing: -0.05em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    margin-bottom: 2rem;
`;
const NoticeFont = styled.h3`
    padding-top: 89px;
    font-weight: 600;
    font-size: 40px;
    color: #000;
    line-height: 54px;
    letter-spacing: -3px;
    margin: 0 auto 2rem;
    font-family: 'Noto Sans KR', sans-serif;
`;
const NoticeContainer = styled.div`
    width: 100%;
    padding: 40px 40px 60px;
    border-top: 3px solid #222;
    border-bottom: 1px solid #e8e8e8;
    box-sizing: border-box;
    color: #000;
    position: relative;
`;
const Container = styled.div`
    max-width: 1100px;
    padding: 1.5rem;
    margin: auto;
`;
