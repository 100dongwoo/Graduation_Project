import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import './style.css';
const Banner = () => {
    const [value, setValue] = useState(0);
    const [slides, setSlides] = useState([
        <IMG
            src=" https://images.unsplash.com/photo-1579649554660-463ed1d72831?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8a29hbGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
        />,
        <IMG
            src="https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bGFtYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
        />,
        <IMG src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />,
    ]);

    const onchange = (value) => {
        setValue(value);
    };
    const onPressUp = (e) => {
        e.preventDefault();
        if (value === slides.length - 1) {
            setValue(0);
        } else {
            setValue(value + 1);
        }
    };
    const onPressDown = (e) => {
        e.preventDefault();
        if (value === 0) {
            setValue(slides.length - 1);
        } else {
            setValue(value - 1);
        }
    };
    return (
        <Container id="banner">
            <Content>
                <ImageBox>
                    <Carousel
                        autoPlay={3800}
                        value={value}
                        slides={slides}
                        onChange={onchange}
                    />
                    <button onClick={onPressUp}> -> </button>
                    <button onClick={onPressDown}> _- </button>
                    <Dots
                        value={value}
                        onChange={onchange}
                        number={slides.length}
                        style={{ color: 'red' }}
                    />
                </ImageBox>
            </Content>
        </Container>
    );
};
const Container = styled.div``;
const ImageBox = styled.div`
    width: 500px;
`;
const Content = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    height: 45.938rem;
    width: 100%;
    background: url(https://t1.kakaocdn.net/gamepub/ui-contents/promotion/odin/201014_teaser/pc/images/bg-section-gallery.jpg)
        no-repeat;
    background-size: cover;
`;
const IMG = styled.img`
    width: 1200px;
    height: 350px;
`;
export default Banner;
