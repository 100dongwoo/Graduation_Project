import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FailAlert } from '../../Alert/Alert';

function NoticePage(props) {
    const [noticePost, setNoticepost] = useState([]);
    useEffect(() => {
        fetchNotice();
    }, []);
    const fetchNotice = () => {
        axios
            .get('/notices/')
            .then((res) => {
                if (res.statusText !== 'OK') {
                    // console.log(res);
                    return;
                }
                console.log('성공 공지사항', res);
                setNoticepost(res.data.results);
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
            <h1>asd</h1>
        </div>
    );
}

export default NoticePage;
