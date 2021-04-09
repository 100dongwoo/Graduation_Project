import React, { useEffect, useState } from 'react';
import { SampleData } from '../../SampleData/SampleData';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/store';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FailAlert, SuccessAlert } from '../../Alert/Alert';
import Pagination from '@material-ui/lab/Pagination';
import Spinner from 'react-bootstrap/Spinner';

function CommunityPage(props) {
    const [totalPage, setTotalPage] = useState(1); //  전체 크기
    const [posts, setPosts] = useState([]);
    const [isDisplay, setIsDisplay] = useState('big');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1); //현재 페이지
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector(selectUser);
    const handleChange = (e, value) => {
        e.preventDefault();
        setPage(value);
        fetchPost(value);
    };
    useEffect(() => {
        fetchPost(page);
    }, []);

    const onClickToDetail = (e, postId) => {
        history.push(`/post/${postId}`);
    };

    const fetchPost = (page, keyword) => {
        let params = { page };
        if (keyword) {
            params.keyword = keyword;
        }
        // console.log(params);
        axios
            .get(`/posts/`, { params }, { withCredentials: true })
            .then((res) => {
                if (res.statusText !== 'OK') {
                    // console.log(res);
                    return;
                }
                // console.log(res);
                if (res.data.count === 0) {
                    FailAlert('게시글이 존재하지 않습니다');
                    return;
                }
                setPosts(res.data.results);
                setTotalPage(parseInt(res.data.count / 20) + 1);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err.response.data?.msg) {
                    FailAlert(err.response.data.msg);
                    alert(err.response.data.msg);
                }
            });
    };

    const calculateChatDate = (d) => {
        if (d === null) return '';

        const today = new Date();
        const target = new Date(d);
        const diffM = Math.floor(
            (today.getTime() - target.getTime()) / 1000 / 60
        );
        if (diffM < 1) return '방금전';
        if (diffM < 60) return `${diffM}분 전`;

        const diffH = Math.floor(diffM / 60);
        if (diffH < 24) return `${diffH}시간 전`;

        const diffD = Math.floor(diffH / 24);
        if (diffD < 365) return `${diffD}일 전`;

        return `${Math.floor(diffD / 365)}년 전`;
    };
    const history = useHistory();
    const onChangeDisplay = (e, Display) => {
        setIsDisplay(Display);
    };

    return (
        <>
            {isLoading ? (
                <SpinnerContainer>
                    <Spinner animation="border" />
                    <h2>&nbsp; 로딩 중 ...</h2>
                </SpinnerContainer>
            ) : (
                <Container>
                    <div>
                        <Title>커뮤니티</Title>
                        <Subtitle>사람들과 지식을 공유해보세요</Subtitle>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                fetchPost(1, search);
                            }}
                        >
                            <InputGroups>
                                <InputForm
                                    // onSubmit={() => fetchPost(1, search)}
                                    placeholder="검색어"
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }}
                                />
                                <InputGroup.Append>
                                    <SearchBtn
                                        variant="outline-secondary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            fetchPost(1, search);
                                        }}
                                    >
                                        <i className="fas fa-search" />
                                        검색
                                    </SearchBtn>
                                </InputGroup.Append>
                            </InputGroups>
                        </form>
                        <IconBox>
                            <div>
                                {user && (
                                    <button
                                        onClick={() => {
                                            history.push('/upload');
                                        }}
                                    >
                                        글쓰기
                                    </button>
                                )}
                            </div>
                            <div>
                                <Icons
                                    className="fas fa-th-large"
                                    style={{
                                        color:
                                            isDisplay !== 'big'
                                                ? '#000'
                                                : '#7fff00',
                                    }}
                                    onClick={(e) => {
                                        onChangeDisplay(e, 'big');
                                    }}
                                />
                                <Icons
                                    className="fas fa-list"
                                    style={{
                                        color:
                                            isDisplay !== 'small'
                                                ? '#000'
                                                : '#7fff00',
                                    }}
                                    onClick={(e) => {
                                        onChangeDisplay(e, 'small');
                                    }}
                                />
                            </div>
                        </IconBox>
                        <div>
                            {isDisplay === 'big' ? (
                                posts.map((post, index) => (
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
                                                <PostTitle>
                                                    {post.title}
                                                </PostTitle>
                                                <PostContent>
                                                    {post.content}
                                                </PostContent>
                                                <PostInforBox>
                                                    <Breadcrumb>
                                                        <Breadcrumb.Item active>
                                                            조회수{' '}
                                                            {post.hit_count}
                                                        </Breadcrumb.Item>
                                                        <Breadcrumb.Item active>
                                                            댓글{' '}
                                                            {post.review_count}
                                                        </Breadcrumb.Item>
                                                        <Breadcrumb.Item active>
                                                            {/*55분 전*/}
                                                            {calculateChatDate(
                                                                post.created_at
                                                            )}
                                                        </Breadcrumb.Item>
                                                        <Breadcrumb.Item active>
                                                            {post.user.nickname}
                                                        </Breadcrumb.Item>
                                                    </Breadcrumb>
                                                </PostInforBox>
                                            </div>
                                            {post.image && (
                                                <div>
                                                    <PostImg
                                                        src={post.image}
                                                        alt="img"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </Post>
                                ))
                            ) : (
                                <Table hover size="sm">
                                    <thead>
                                        <Headtr>
                                            <HeadTitleTH>제목</HeadTitleTH>
                                            <HeadUserTH>유저</HeadUserTH>
                                            <HeadSmallTH>댓글</HeadSmallTH>
                                            <HeadSmallTH>조회 수</HeadSmallTH>
                                            <HeadSmallTH>활동</HeadSmallTH>
                                        </Headtr>
                                    </thead>
                                    <tbody>
                                        {posts.map((post, index) => (
                                            <TR
                                                key={index}
                                                onClick={(e) => {
                                                    onClickToDetail(e, post.id);
                                                }}
                                            >
                                                <ContentTitle>
                                                    {post.title}
                                                    {post.image && (
                                                        <ImageIcon className="far fa-file-image" />
                                                    )}
                                                </ContentTitle>
                                                <ContentUser>
                                                    {post.user.nickname}
                                                </ContentUser>
                                                <ContentSmall>
                                                    {post.review_count}
                                                </ContentSmall>
                                                <ContentSmall>
                                                    {post.hit_count}
                                                </ContentSmall>
                                                <ContentSmall>
                                                    {calculateChatDate(
                                                        post.created_at
                                                    )}
                                                </ContentSmall>
                                            </TR>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </div>
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
                        {/*반응형 사용*/}
                        {/*<Pagination*/}
                        {/*    count={totalPage}*/}
                        {/*    variant="outlined"*/}
                        {/*    shape="rounded"*/}
                        {/*    value={page}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    siblingCount={0}*/}
                        {/*    style={{*/}
                        {/*        display: 'flex',*/}
                        {/*        justifyContent: 'center',*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </div>
                </Container>
            )}
        </>
    );
}
const SpinnerContainer = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const TR = styled.tr`
    cursor: pointer;
`;
const ImageIcon = styled.i`
    margin-left: 5px;
    color: #2691d9;
`;
const TH = styled.th`
    line-height: 3.25;
    font-size: 1rem;
    color: #919191;
`;
const HeadTitleTH = styled(TH)`
    text-align: left;
    width: 75%;
    white-space: nowrap;
`;
const HeadUserTH = styled(TH)`
    text-align: center;
    width: 10%;
    min-width: 4.3rem;
    white-space: nowrap;
`;
const HeadSmallTH = styled(TH)`
    width: 5%;
    min-width: 4.9rem;
    text-align: center;
`;
const Headtr = styled.tr`
    border-bottom: 3px solid #919191;
    border-top: hidden;
`;
const TD = styled.td`
    line-height: 2.25;
`;
const ContentTitle = styled(TD)`
    text-align: left;
`;
const ContentUser = styled(TD)`
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
`;
const ContentSmall = styled(TD)`
    text-align: center;
`;

//이위는 게시글 작게보기
const IconBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem;
    margin-top: 1rem;
`;
const Icons = styled.i`
    font-size: 1.2rem;
    margin-left: 1.2rem;
    cursor: pointer;
`;

// 테스트
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
export default CommunityPage;
