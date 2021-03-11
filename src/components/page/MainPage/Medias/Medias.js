import React from 'react';
import styled from 'styled-components';
import {
    instargrarm,
    facebook,
    youtube,
    naverBlog,
} from '../../../../secretFile/URL';

function Medias(props) {
    return (
        <Container>
            {' '}
            <SocialContainer>
                <SocialBox
                    target="_blank"
                    rel="noopener"
                    href={youtube}
                    style={{ background: 'rgb(199, 37, 45)' }}
                >
                    <Social className="fab fa-youtube" />
                </SocialBox>
                <SocialBox
                    style={{ background: 'pink' }}
                    target="_blank"
                    rel="noopener"
                    href={instargrarm}
                >
                    <Social className="fab fa-instagram" />
                </SocialBox>
                <SocialBox
                    style={{ background: 'rgb(60, 92, 153)' }}
                    target="_blank"
                    rel="noopener"
                    href={facebook}
                >
                    <Social className="fab fa-facebook-f" />
                </SocialBox>
                <SocialBox
                    style={{ background: 'rgb(58, 174, 56)' }}
                    target="_blank"
                    rel="noopener"
                    href={naverBlog}
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
