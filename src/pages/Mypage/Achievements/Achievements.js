import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FailAlert } from '../../../Alert/Alert';

function Achievements({ clear }) {
    const [achievements, setAchievements] = useState([]);
    useEffect(() => {
        FetchQAchievement();
    }, []);
    const FetchQAchievement = () => {
        axios
            .get(`/careers/?is_clear=${clear}`)
            .then((res) => {
                console.log(res);
                if (res.statusText !== 'OK') {
                    console.log(res);
                    return;
                }

                setAchievements(res.data.results);
            })
            .catch((err) => {
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                } else {
                    console.log('에러 : ', err.response);
                }
            });
    };
    return <div>{<h1>{clear ? '업적' : '미완료 업적'}</h1>}</div>;
}

export default Achievements;
