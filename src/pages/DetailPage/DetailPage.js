import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FailAlert } from '../../Alert/Alert';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import trush from '../../images/brown_trash.jpg';
import 'moment/locale/ko';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import trush1 from '../../images/tissue_trash.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/store';
function DetailPage(props) {
    const user = useSelector(selectUser);
    const [reviewText, setReviewText] = useState('');
    const [post, setPost] = useState([]);
    const [reviews, setReviews] = useState([]);
    const postId = props.match.params.postId; ///URL 에서 가져옴
    const history = useHistory();
    useEffect(() => {
        fetchPost();
        fetchReview();
    }, []);
    const onSubmitReview = (e) => {
        e.preventDefault();
    };

    const fetchPost = () => {
        axios
            .get(`/posts/${postId}/`)
            .then((res) => {
                if (res.statusText !== 'OK') {
                    // console.log(res);
                    return;
                }
                // console.log(res);
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
    const fetchReview = () => {
        axios
            .get(`/reviews/?post=${postId}`)
            .then((res) => {
                // console.log('res', res);
                if (res.statusText !== 'OK') {
                    // console.log(res);
                    return;
                }
                setReviews(res.data.results);
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
    return (
        <Container>
            {/*{console.log('제목', post.title)}*/}
            {/*{console.log('내용', post.content)}*/}
            {/*{console.log(reviews)}*/}
            <h1>{postId}</h1>
            {/*리뷰*/}
            <ReviewContainer>
                <TitleContainer>
                    <TotalReview>
                        댓글
                        <TotalReviewCount>{reviews?.length}</TotalReviewCount>
                    </TotalReview>
                </TitleContainer>
                {reviews.map((review) => (
                    <ReviewBox key={review.id}>
                        <AvartarContainer
                            style={{
                                // backgroundImage: `url(${trush1})`,

                                backgroundImage:
                                    'url(https://i.pinimg.com/originals/4a/d4/e6/4ad4e67b19d6e4c91877b317aed51f26.jpg)',
                            }}
                        >
                            {/*<Avartar*/}
                            {/*    src={trush1}*/}
                            {/*    // src={*/}
                            {/*    //     'https://i.pinimg.com/originals/4a/d4/e6/4ad4e67b19d6e4c91877b317aed51f26.jpg'*/}
                            {/*    // }*/}
                            {/*/>*/}
                        </AvartarContainer>
                        <ReviewinfoBox>
                            <div>
                                <ReviewUser>{review.user.nickname}</ReviewUser>
                                <ReviewDate>
                                    {moment(review.created_at)
                                        .subtract(10, 'days')
                                        .calendar()}
                                    {moment(review.created_at).format('LTS')}
                                    {/*{moment(review.created_at).format('LLLL')}*/}
                                </ReviewDate>
                            </div>
                            <ReviewContent>{review.content}</ReviewContent>
                        </ReviewinfoBox>
                    </ReviewBox>
                ))}
                {/*<InputForm as="textarea" aria-label="With textarea" />*/}
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
                        >
                            등록
                        </SubmitButton>
                    </BottomContainer>
                </ReviewSubmitBox>
            </ReviewContainer>
        </Container>
    );
}
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
    margin-left: 1rem;
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
    max-width: 900px;
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
