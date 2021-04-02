import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Carousel from 'react-bootstrap/Carousel';

import trush1 from '../../../images/brown_trash.jpg';
import trush2 from '../../../images/tissue_trash.png';
const Banner = () => {
    const [main, setMain] = useState([
        {
            backImage: trush1,
            title: '흰색 돼지',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
            image:
                'https://i.pinimg.com/564x/27/de/1f/27de1fbde83fb1441b19c2ec4743a76d.jpg',
        },
        {
            backImage: trush2,
            title: '엘사 딱가리',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
            image:
                'https://i.pinimg.com/564x/27/de/1f/27de1fbde83fb1441b19c2ec4743a76d.jpg',
        },
        {
            backImage:
                'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: '댕댕이',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
            image: trush1,
        },
        {
            backImage: '',
            title: '????????????',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
            image: trush2,
        },
    ]);

    return (
        <Container id="banner">
            <Carousel fade>
                {main.map((array, index) => (
                    <CarouselBox key={index}>
                        {array.backImage && (
                            <IMG
                                className="d-block w-100"
                                src={array.backImage}
                                alt="First slide"
                            />
                        )}
                        <Carousel.Caption>
                            <img
                                src={array.image}
                                style={{ width: 300, height: 300 }}
                            />
                            <h3>{array.title}</h3>
                            <p>{array.sub}</p>
                        </Carousel.Caption>
                    </CarouselBox>
                ))}
            </Carousel>
        </Container>
    );
};
const CarouselBox = styled(Carousel.Item)`
    height: 500px;
    width: 100%;
    background: orange;
`;
const Container = styled.div``;

const IMG = styled.img`
    width: 100%;
    height: 500px;
`;
export default Banner;
