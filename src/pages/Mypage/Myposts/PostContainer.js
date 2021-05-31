import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FailAlert, SuccessAlert } from '../../../Alert/Alert';

function PostContainer(props) {
    let post = props.post;
    const history = useHistory();
    const onClickUpdate = (e, post) => {
        e.stopPropagation();
        history.push({ pathname: '/upload', state: { post } });
    };
    const onClickToDetail = (e, postId) => {
        history.push(`/post/${postId}`);
    };
    const onClickDelete = (e, postId) => {
        e.stopPropagation();
        axios
            .delete(`/posts/${postId}/`)
            .then((res) => {
                if (res.statusText !== 'No Content') {
                    FailAlert('삭제를 실패하였습니다');
                    return;
                }
                SuccessAlert('게시글 삭제 성공');
                props.fetchPostMyPosts(props.page);
            })
            .catch((err) => {
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                    return;
                }
                console.log(err);
            });
    };
    return (
        <PostBox
            onClick={(e) => {
                onClickToDetail(e, post.id);
            }}
        >
            <LeftContainer>
                <Title>제목 : {post?.title}</Title>
                <Content>{post.content.replace(/(<([^>]+)>)/gi, '')}</Content>
                <Timer>
                    {moment(post?.created_at).subtract(10, 'days').calendar()}
                    {moment(post?.created_at).format('LTS')} | 조회 수 :{' '}
                    {post?.hit_count} | 댓글 수 : {post?.review_count}
                </Timer>
            </LeftContainer>
            <RightContainer>
                <Button
                    onClick={(e) => {
                        onClickUpdate(e, post);
                    }}
                >
                    수 정
                </Button>
                <Button
                    margin="true"
                    type="delete"
                    onClick={(e) => {
                        onClickDelete(e, post?.id);
                    }}
                >
                    삭 제
                </Button>
            </RightContainer>
        </PostBox>
    );
}
const Container = styled.div`
    width: 100%;
    background: red;
`;
const Button = styled.button`
    background: #ffffff;
    border: 1px solid #042b6c;
    box-sizing: border-box;
    border-radius: 4px;
    width: 119px;
    height: 34px;
    float: right;
    background: ${(props) => (props.type === 'delete' ? '#fff' : '#042B6C')};
    margin-top: ${(props) => (props.margin ? '0.5rem' : '0px')};
    //
    color: ${(props) => (props.type === 'delete' ? '#042B6C' : '#fff')};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    &:hover {
        background: black;
        color: #ffffff;
    }
`;
const RightContainer = styled.div`
    padding-left: 2rem;
    margin: auto;
`;
const LeftContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const PostBox = styled.div`
    height: 120px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.13);
    border-radius: 10px;
    margin-bottom: 1rem;
    display: flex;
    flex: 1;
    padding: 20px 17px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;
const Title = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 126%;
    color: #292c30;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
`;
const Timer = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.055em;
    color: #292c30;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
`;
const Content = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #042b6c;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
`;
export default PostContainer;
