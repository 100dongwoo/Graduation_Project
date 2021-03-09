import React from 'react';
import styled from 'styled-components';
import Video from '../../../image_video/background.mp4';

function MainPage(props) {
    return (
        <Container id="home">
            <VideoBg
                autoPlay
                loop
                muted
                playsinline
                // src={Video}
                src={
                    'https://www.cookierun-kingdom.com/static/pc.vp9-16076e5e49815f0e77288b02e58d9c16.webm'
                }
                type="video/mp4"
            />
        </Container>
    );
}
const VideoBg = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    //height: 100%;
    height: 30.625rem;
    @media only screen and (min-width: 25em) {
        height: 42.75rem;
    }
    @media only screen and (min-width: 40em) {
        height: 57.875rem;
    }
    opacity: 0.5;
    object-fit: cover;
    @media (min-width: 40em) {
        display: block;
    }
`;
const Container = styled.div`
    background: #000000;

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

export default MainPage;
