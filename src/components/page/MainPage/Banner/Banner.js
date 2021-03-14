import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Video from '../../../../image_video/background.mp4';
import forest from '../../../../image_video/forest.jpg';

function Banner(props) {
    const [value, setValue] = useState(0);
    const [slides, setSlides] = useState([
        <img
            src={
                'https://images.unsplash.com/photo-1612832020719-2bcbeedd4750?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
        />,
        <img
            src={
                'https://images.unsplash.com/photo-1612832020719-2bcbeedd4750?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
        />,
    ]);

    useEffect(() => {}, []);

    const onChange = (value) => {
        setValue(value);
    };

    return (
        <Container id="home">
            <div>
                <Carousel value={value} onChange={onChange}>
                    <img
                        className="img-example"
                        src={
                            'https://images.unsplash.com/photo-1612832020719-2bcbeedd4750?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                        }
                    />
                    <img
                        className="img-example"
                        src={
                            'https://images.unsplash.com/photo-1612832020719-2bcbeedd4750?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                        }
                    />
                </Carousel>
                <Dots
                    value={value}
                    onChange={onChange}
                    thumbnails={[
                        <img
                            key={1}
                            className="img-example-small"
                            src={
                                'https://images.unsplash.com/photo-1612832020719-2bcbeedd4750?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                            }
                        />,
                        <img
                            key={12}
                            className="img-example-small"
                            src={
                                'https://images.unsplash.com/photo-1612832020719-2bcbeedd4750?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                            }
                        />,
                    ]}
                />
            </div>
            {/*<VideoBg*/}
            {/*    src="https://lwi.nexon.com/maplestory/banner/2021/0310/main_bn_210310_18EFC4B6F5BC7B69.jpg"*/}
            {/*    // src={forest}*/}
            {/*    // autoPlay*/}
            {/*    // loop*/}
            {/*    // muted*/}
            {/*    // playsinline*/}
            {/*    // src={Video}*/}
            {/*    // src={*/}
            {/*    //     'https://www.cookierun-kingdom.com/static/pc.vp9-16076e5e49815f0e77288b02e58d9c16.webm'*/}
            {/*    // }*/}
            {/*    // type="video/mp4"*/}
            {/*/>*/}
        </Container>
    );
}
const VideoBg = styled.img`
    opacity: 0.9;
    width: 1200px;
    height: 410px;
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    //@media only screen and (min-width: 25em) {
    //    width: 42.75rem;
    //}
    //@media only screen and (min-width: 40em) {
    //    width: 57.875rem;
    //}
    ////opacity: 0.5;
    //object-fit: cover;
    //@media (min-width: 40em) {
    //    display: block;
    //}
`;

const Container = styled.div`
    background: #fff;
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    height: 30.625rem;
    @media only screen and (min-width: 25em) {
        height: 42.75rem;
    }
    @media only screen and (min-width: 40em) {
        height: 57.875rem;
    }
    width: 100%;
    margin: 0;
    padding: 0 0;
`;

export default Banner;
