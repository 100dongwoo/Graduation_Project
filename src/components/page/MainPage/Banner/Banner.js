import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import forest from '../../../../image_video/forest.jpg';
const Banner = () => {
    const [value, setValue] = useState(0);
    const [slides, setSlides] = useState([
        <IMG
            src=" https://lwi.nexon.com/maplestory/banner/2021/0224/main_bn_210225_76D10BE2C51A9766.jpg"
            alt=""
        />,
        <IMG
            src="https://lwi.nexon.com/maplestory/banner/2021/0310/main_bn_210310_18EFC4B6F5BC7B69.jpg"
            alt=""
        />,
        <IMG src={forest} />,
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
        <Container>
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
                        style={{ color: 'transparent' }}
                    />
                </ImageBox>
            </Content>
        </Container>
    );
};
const Container = styled.div``;
const ImageBox = styled.div`
    width: 100%;
`;
const Content = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
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
