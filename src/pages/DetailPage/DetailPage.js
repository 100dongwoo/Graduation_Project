import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FailAlert, SuccessAlert } from '../../Alert/Alert';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import 'moment/locale/ko';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useSelector } from 'react-redux';
import { EditorState, Editor } from 'draft-js';
import { convertFromHTML } from 'draft-convert';
import PaginationComponent from '../../components/Pagination/PaginationComponent';
import Avatar from '@material-ui/core/Avatar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { calculateChatDate } from '../../Util/Util';
function DetailPage(props) {
    const auth = useSelector((state) => state.auth);
    const { user } = auth;
    const [reviewText, setReviewText] = useState('');
    const [post, setPost] = useState([]);
    const [reviews, setReviews] = useState([]);
    const postId = props.match.params.postId; ///URL 에서 가져옴
    const history = useHistory();
    const [page, setPage] = useState(1); //현재 페이지
    const [totalPage, setTotalPage] = useState(1); //  전체 크기
    const [totalReview, setTotalReview] = useState(0); //총 리뷰 갯수
    const [editor, setEditor] = useState(EditorState.createEmpty());

    const onChange = (editorState) => {
        setEditor(editorState);
    };

    const handleChange = (e, value) => {
        // e.preventDefault();
        setPage(value);
        fetchReview(value);
    };
    useEffect(() => {
        fetchPost();
        fetchReview(1);
        // importHTML();
    }, []);
    const onSubmitReview = (e) => {
        // e.preventDefault();
        if (!reviewText.length) {
            FailAlert('댓글을 입력해주세요');
            return;
        }
        let params = {
            post: postId,
            content: reviewText,
        };

        axios
            .post('/reviews/', params)
            .then((res) => {
                if (res.statusText !== 'Created') {
                    // console.log(res);
                    return;
                }
                SuccessAlert('댓글작성 성공');
                fetchReview(1);
                setPage(1);
                setReviewText('');
            })
            .catch((err) => {
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                } else {
                    console.log('에러 : ', err.response);
                }
            });
    };
    const fetchPost = () => {
        axios
            .get(`/posts/${postId}/`)
            .then((res) => {
                if (res.statusText !== 'OK') {
                    FailAlert('존재하지 않는 게시글 입니다');
                    return;
                }
                // console.log(res.data.content);
                onChange(
                    EditorState.push(editor, convertFromHTML(res.data.content))
                );
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
    const fetchReview = (page) => {
        let params = { page };
        axios
            .get(`/reviews/?post=${postId}`, { params })
            .then((res) => {
                // console.log('res', res);
                if (res.statusText !== 'OK') {
                    // console.log(res);
                    return;
                }
                setReviews(res.data.results);
                setTotalPage(
                    parseInt(res.data.count) !== 0
                        ? parseInt(res.data.count) % 4 === 0
                            ? parseInt(res.data.count / 4)
                            : parseInt(res.data.count / 4) + 1
                        : 1
                );
                setTotalReview(res.data.count);
                // console.log('댓글불러오기 성공', res);
            })
            .catch((err) => {
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                } else {
                    console.log('에러 : ', err);
                }
            });
    };
    const onClickDelete = () => {
        axios
            .delete(`/posts/${postId}/`)
            .then((res) => {
                if (res.statusText !== 'No Content') {
                    FailAlert('삭제를 실패하였습니다');
                    return;
                }
                SuccessAlert('게시글 삭제 성공');
                history.push('/Community');
            })
            .catch((err) => {
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                    return;
                }
                console.log(err);
            });
    };
    const onClickUpdate = () => {
        props.history.push({ pathname: '/upload', state: { post } });
    };
    return (
        <div style={{ marginBottom: '3rem' }}>
            <Title>{post.title}</Title>
            <UserContainer>
                <TopContainer>
                    <Userbox>
                        <Avatar
                            style={{
                                width: 55,
                                height: 55,
                            }}
                        >
                            {post.user?.nickname.length >= 2
                                ? post.user?.nickname.slice(0, 2)
                                : post.user?.nickname[0]}
                        </Avatar>
                        <UserName>{post.user?.nickname}</UserName>
                    </Userbox>
                    <PostInforBox>
                        조회수 {post.hit_count} &nbsp;|&nbsp; 댓글
                        {post.review_count}&nbsp; |&nbsp; &nbsp;
                        {calculateChatDate(post.created_at)}
                    </PostInforBox>
                </TopContainer>
            </UserContainer>
            <Container>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Editor
                        // editorState={e}
                        readOnly={true}
                        // onBlur={onBlur}
                        // ref={editorRef}
                        // autoCapitalize="none"
                        // autoComplete="off"
                        // autoCorrect="off"
                        // spellCheck={false}
                        editorState={editor}
                        onChange={onChange}
                    />
                    {user && user?.id === post?.user?.id && (
                        <DeleteButton onClick={onClickDelete}>
                            삭제
                        </DeleteButton>
                    )}
                    {user && user?.id === post?.user?.id && (
                        <DeleteButton onClick={onClickUpdate}>
                            수정
                        </DeleteButton>
                    )}
                </div>

                {/*리뷰*/}
                <ReviewContainer>
                    <TitleContainer>
                        <TotalReview>
                            댓글
                            <TotalReviewCount>{totalReview}</TotalReviewCount>
                        </TotalReview>
                    </TitleContainer>

                    {reviews?.map((review) => (
                        <ReviewBox key={review.id}>
                            <Avatar
                                //                                #bdbdbd
                                style={{
                                    backgroundColor:
                                        post.user?.id !== review.user.id
                                            ? '#ff5722'
                                            : '#bdbdbd',
                                    width: 55,
                                    height: 55,
                                }}
                            >
                                {review.user?.nickname.length >= 2
                                    ? review.user?.nickname.slice(0, 2)
                                    : review.user?.nickname[0]}
                                {/*{review.user?.nickname[0] +*/}
                                {/*    review.user?.nickname[1]}*/}
                            </Avatar>
                            {/*<AvartarContainer*/}
                            {/*    style={{*/}
                            {/*        // backgroundImage: `url(${trush1})`,*/}

                            {/*        backgroundImage:*/}
                            {/*            'url(https://i.pinimg.com/originals/4a/d4/e6/4ad4e67b19d6e4c91877b317aed51f26.jpg)',*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*<Avartar*/}
                            {/*    src={trush1}*/}
                            {/*    // src={*/}
                            {/*    //     'https://i.pinimg.com/originals/4a/d4/e6/4ad4e67b19d6e4c91877b317aed51f26.jpg'*/}
                            {/*    // }*/}
                            {/*/>*/}
                            {/*</AvartarContainer>*/}
                            <ReviewinfoBox>
                                <div>
                                    <ReviewUser>
                                        {review.user.nickname}
                                    </ReviewUser>
                                    <ReviewDate>
                                        {moment(review.created_at)
                                            .subtract(10, 'days')
                                            .calendar()}
                                        {moment(review.created_at).format(
                                            'LTS'
                                        )}
                                        {/*{moment(review.created_at).format('LLLL')}*/}
                                    </ReviewDate>
                                </div>
                                <ReviewContent>{review.content}</ReviewContent>
                            </ReviewinfoBox>
                        </ReviewBox>
                    ))}
                    <PaginationComponent
                        totalPage={totalPage}
                        page={page}
                        handleChange={handleChange}
                    />
                    <ReviewSubmitBox>
                        <TextArea
                            value={reviewText}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={4}
                            maxLength="99"
                            disabled={!user}
                            placeholder={
                                user
                                    ? '댓글을 입력 해보세요!'
                                    : '로그인 후, 이용해주세요'
                            }
                            onChange={(e) => {
                                // reviewText.length < 100 &&
                                setReviewText(e.currentTarget.value);
                            }}
                        />
                        <BottomContainer>
                            <CountReviewText>
                                {reviewText.length}/100
                            </CountReviewText>
                            <SubmitButton
                                variant="secondary"
                                size="lg"
                                onClick={onSubmitReview}
                                disabled={!user}
                            >
                                등록
                            </SubmitButton>
                        </BottomContainer>
                    </ReviewSubmitBox>
                </ReviewContainer>
            </Container>
        </div>
    );
}
const PostInforBox = styled.p`
    margin: auto 0;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #666666;
`;
const TopContainer = styled.div`
    margin: auto;
    max-width: 1250px;
    display: flex;
    justify-content: space-between;
    padding: 1.4rem 0;
`;
const Userbox = styled.div`
    display: flex;
    align-items: center;
`;
const UserName = styled.p`
    margin: 0 0 0 0.8rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    //line-height: 29px;
    letter-spacing: 0.04em;
    color: #828ea2;
`;
const UserContainer = styled.div`
    width: 100%;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    //border-bottom: 1px solid #89898a; ;
    //margin-bottom: 3.3rem;
`;
const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 135.5%;
    color: #001129;
    max-width: 1250px;
    margin: 3.3rem auto 1.5rem;
    word-break: keep-all;
`;
const DeleteButton = styled.button`
    width: 30px;
`;
const BottomContainer = styled.div`
    align-items: center;
    margin-top: 0.7rem;
`;
const CountReviewText = styled.span`
    text-align: center;
    align-items: center;
    margin-right: 0.5rem;
`;
const SubmitButton = styled(Button)``;
const ReviewSubmitBox = styled.div`
    height: 203px;
    background-color: #e8eaee;
    border: 1px solid #dcdde1;
    padding: 1rem;
    text-align: right;
`;
const TextArea = styled.textarea`
    resize: none;
    height: 130px;
    padding: 10px 10px 10px 15px;
`;
const InputForm = styled(FormControl)`
    height: 44px;
    :focus {
        border-color: #ff0000;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(255, 0, 0, 0.6);
    }
`;
const AvartarContainer = styled.div`
    width: 70px;
    height: 60px;

    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;
const Avartar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;
const ReviewContent = styled.p`
    font-size: 13px;
    color: #666666;
    line-height: 20px;
    word-break: break-all;
    word-wrap: break-word;
    margin-bottom: 0px;
`;
const ReviewDate = styled.span`
    margin-left: 5px;
    font-size: 12px;
    color: #888;
`;
const ReviewUser = styled.span`
    font-size: 15px;
    font-weight: bold;
    line-height: 1;
`;
const ReviewBox = styled.div`
    width: 100%;
    height: 110px;
    border-bottom: 1px solid #e3e3e3;
    padding: 25px 1rem;
    display: flex;
`;
const ReviewinfoBox = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 0.8rem;
    //border-bottom: 1px solid #e3e3e3;
    //padding: 25px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const Container = styled.div`
    margin: auto;
    max-width: 1250px;
`;
const ReviewContainer = styled.div`
    margin: auto;
    max-width: 1250px;
    margin-top: 3rem;
`;
const TitleContainer = styled.div`
    width: 100%;
    align-items: center;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    background-color: #f9f9f9;
    height: 44px;
    //padding: 0.4rem 2rem;
    line-height: 40px;
`;

const TotalReview = styled.p`
    font-size: 16px;
    color: #333333;
    margin-left: 2rem;
`;
const TotalReviewCount = styled.span`
    font-size: 16px;
    color: #f68400;
    margin-left: 5px;
`;
export default DetailPage;
