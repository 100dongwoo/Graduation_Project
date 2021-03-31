import React from 'react';
import styled from 'styled-components';
import {
    INSTAGRAM_URL,
    NAVERBLOG_URL,
    YOUTUBE_URL,
    FACEBOOK_URL,
} from '../../../constants/URL';

function Medias(props) {
    return (
        <Container id="media">
            <SocialContainer>
                <SocialBox
                    target="_blank"
                    rel="noopener"
                    href={YOUTUBE_URL}
                    style={{ background: 'rgb(199, 37, 45)' }}
                >
                    <Social className="fab fa-youtube" />
                </SocialBox>
                <SocialBox
                    style={{
                        background:
                            'linear-gradient(180deg, #ea9e38 0, #ef9337 8.33%, #f48838 16.67%, #f77a3a 25%, #f96b3d 33.33%, #fa5a41 41.67%, #f94646 50%, #f72c4c 58.33%, #f40054 66.67%, #f0005e 75%, #eb0069 83.33%, #e40075 91.67%, #db0082 100%)',
                    }}
                    target="_blank"
                    rel="noopener"
                    href={INSTAGRAM_URL}
                >
                    <Social className="fab fa-instagram" />
                </SocialBox>
                <SocialBox
                    style={{ background: 'rgb(60, 92, 153)' }}
                    target="_blank"
                    rel="noopener"
                    href={FACEBOOK_URL}
                >
                    <Social className="fab fa-facebook-f" />
                </SocialBox>
                <SocialBox
                    style={{ background: 'rgb(58, 174, 56)' }}
                    target="_blank"
                    rel="noopener"
                    href={NAVERBLOG_URL}
                >
                    <Social className="fab fa-blogger-b" />
                </SocialBox>
            </SocialContainer>
        </Container>
    );
}

export default Medias;
const Container = styled.div`
    margin: auto;
    width: 100%;
    background: rgb(25, 28, 36);
    padding-top: 2.75rem;
    padding-bottom: 4.375rem;
`;
const SocialBox = styled.a`
    font-size: 3rem;
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    text-decoration: none;
    &: hover {
        opacity: 0.8;
    }
`;
const SocialContainer = styled.div`
    max-width: 55rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    margin: auto;
`;
const Social = styled.i`
    color: white;
`;
