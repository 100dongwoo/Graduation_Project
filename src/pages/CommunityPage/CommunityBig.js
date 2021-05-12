import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { calculateChatDate } from '../../Util/Util';
import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useHistory } from 'react-router-dom';

function CommunityBig({ posts }) {
    const history = useHistory();
    const onClickToDetail = (e, postId) => {
        history.push(`/post/${postId}`);
    };
    return (
        <div>
            {posts?.map((post, index) => (
                <Post
                    key={index}
                    onClick={(e) => {
                        onClickToDetail(e, post.id);
                    }}
                >
                    <div style={{ display: 'flex' }}>
                        <div
                            style={{
                                width: '100%',
                            }}
                        >
                            <PostTitle>{post.title}</PostTitle>
                            <PostContent>
                                {
                                    // post.content
                                    post.content.replace(/(<([^>]+)>)/gi, '') // 태그제거
                                }
                            </PostContent>
                            <PostInforBox>
                                <Breadcrumb>
                                    <Breadcrumb.Item active>
                                        조회수 {post.hit_count}
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>
                                        댓글 {post.review_count}
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>
                                        {/*55분 전*/}
                                        {calculateChatDate(post.created_at)}
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>
                                        {post.user.nickname}
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </PostInforBox>
                        </div>
                        {post.image && (
                            <div>
                                <PostImg src={post.image} alt="img" />
                            </div>
                        )}
                    </div>
                </Post>
            ))}
        </div>
    );
}
const Post = styled.div`
    width: 100%;
    height: 219.85px;
    padding: 2rem 1rem;
    margin-top: 1.5rem;
    background: #ffffff;
    border: 8px solid #f5f5f5;
    box-sizing: border-box;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
const PostImg = styled.img`
    width: 10rem;
    height: 10rem;
    margin-left: 1.5rem;
`;
const PostTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 127.5%;
    color: #001129;
`;
const PostContent = styled.p`
    //text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #5a5a5a;
`;
const PostInforBox = styled.div`
    height: 40px;
    background: #f1f1f1;
    border: 1px solid #f4f4f4;
    box-sizing: border-box;
    border-radius: 4px;
`;
// 사진있는 이위에는 포스트 관련 styled-component

const Container = styled.div`
    max-width: 1250px;
    margin: auto;
    padding: 2rem 2rem;
`;
const Title = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 127.5%;
    color: #001129;
`;
const Subtitle = styled.p`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    color: #666666;
`;
const InputGroups = styled(InputGroup)`
    max-width: 800px;
    margin: 1.5rem auto auto;
    box-sizing: border-box;
    padding: 0;
    border-radius: 0.25rem;
`;
const SearchBtn = styled(Button)`
    border: none;
    border-radius: 0.25rem;
    background: #052065;
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`;
const InputForm = styled(FormControl)`
    height: 44px;
    :focus {
        border-color: #ff0000;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(255, 0, 0, 0.6);
    }
`;
export default CommunityBig;
