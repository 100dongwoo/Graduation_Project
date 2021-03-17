import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    const [main, setMain] = useState([
        {
            image: 'https://image.bugsm.co.kr/album/images/500/4610/461008.jpg',
            title: '흰색 돼지',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
        },
        {
            image:
                'https://pbs.twimg.com/media/EKJdb-bU0AAA-Ru?format=jpg&name=medium',
            title: '엘사 딱가리',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
        },
        {
            image:
                'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: '댕댕이',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
        },
        {
            image: '',
            title: '????????????',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
        },
    ]);

    return (
        <Container id="banner">
            <Carousel fade>
                {main.map((array) => (
                    <CarouselBox>
                        {array.image && (
                            <IMG
                                className="d-block w-100"
                                src={array.image}
                                alt="First slide"
                            />
                        )}
                        <Carousel.Caption>
                            <img
                                src="https://i.pinimg.com/564x/27/de/1f/27de1fbde83fb1441b19c2ec4743a76d.jpg"
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
