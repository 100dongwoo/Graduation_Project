import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FailAlert } from '../../Alert/Alert';

function DetailPage(props) {
    const [post, setPost] = useState([]);
    const [reviews, setReviews] = useState([]);
    const postId = props.match.params.postId; ///URL 에서 가져옴

    useEffect(() => {
        fetchPost();
        fetchReview();
    }, []);

    const fetchPost = () => {
        axios
            .get(`/posts/${postId}/`)
            .then((res) => {
                if (res.statusText !== 'OK') {
                    // console.log(res);
                    return;
                }
                setPost(res.data.results);
            })
            .catch((err) => {
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                } else {
                    console.log('에러 : ', err);
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
        <div>
            <h1>{postId}</h1>
        </div>
    );
}

export default DetailPage;
