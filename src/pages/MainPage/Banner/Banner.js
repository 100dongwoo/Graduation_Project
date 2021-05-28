import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Carousel from 'react-bootstrap/Carousel';

import convenienceStore from '../../../images/map/convenienceStoreMap.png';
import countrysideMap from '../../../images/map/countrysideMap.png';
import scienceRoom from '../../../images/map/ScienceRoomMap.png';
import sunset from '../../../images/map/sunsetMap.png';
import ramen from '../../../images/monsters/ConvenienceStoreMonster/ramenMonster.png';
const Banner = () => {
    const [main, setMain] = useState([
        {
            backImage: convenienceStore,
            title: '흰색 돼지',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
            // image: trush3,
            // 'https://i.pinimg.com/564x/27/de/1f/27de1fbde83fb1441b19c2ec4743a76d.jpg',
        },
        {
            backImage: countrysideMap,
            title: '엘사 딱가리',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
            // image:
            //     'https://i.pinimg.com/564x/27/de/1f/27de1fbde83fb1441b19c2ec4743a76d.jpg',
        },
        {
            backImage: scienceRoom,
            title: '댕댕이',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
            image: ramen,
        },
        {
            backImage: sunset,
            title: '????????????',
            sub: '  Nulla vitae elit libero, a pharetra augue mollis interdum',
            image: ramen,
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
                        {/*<Carousel.Caption>*/}
                        {/*    {array.image && (*/}
                        {/*        <img*/}
                        {/*            alt="이미지"*/}
                        {/*            src={array.image}*/}
                        {/*            style={{ width: 300, height: 300 }}*/}
                        {/*        />*/}
                        {/*    )}*/}
                        {/*    <h3>{array.title}</h3>*/}
                        {/*    <p>{array.sub}</p>*/}
                        {/*</Carousel.Caption>*/}
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
