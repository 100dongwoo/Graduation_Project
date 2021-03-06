import React from 'react';
import styled from 'styled-components';
import './css.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { story } from './until/importStory';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Story(props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = story?.length;
    const theme = useTheme();
    const handleNext = () => {
        setActiveStep(activeStep === maxSteps - 1 ? 0 : activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep === 0 ? maxSteps - 1 : activeStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const onClickStart = (e) => {
        e.preventDefault();
        window.open('http://naver.me/Gw5JVQYC');
    };
    return (
        <Container id="story">
            <TopContainer>
                <GameName>Dore-Story</GameName>
                <WorldTitle>세계관 스토리</WorldTitle>
            </TopContainer>
            <UnderContainer>
                {/*<figure className="snip1445">*/}
                {/*    <img*/}
                {/*        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample84.jpg"*/}
                {/*        alt="sample84"*/}
                {/*    />*/}
                {/*    <figcaption>*/}
                {/*        <GameStartContainer onClick={onClickStart}>*/}
                {/*            <h2>게임시작</h2>*/}
                {/*            <h4>START</h4>*/}
                {/*        </GameStartContainer>*/}
                {/*    </figcaption>*/}
                {/*    /!*<a href="#"></a>*!/*/}
                {/*</figure>*/}

                <Icon
                    className="fas fa-chevron-circle-left"
                    onClick={handleBack}
                />
                <CarouselContainer>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {story?.map((step, index) => (
                            // <ImageContainer key={index}>
                            //     {/*{Math.abs(activeStep - index) <= 2 ? (*/}
                            //     <Image src={step} alt={'이미지'} />
                            //     {/*) : null}*/}
                            // </ImageContainer>
                            <Image src={step} alt={'이미지'} key={index} />
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        variant="text"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={<MoveButton>left</MoveButton>}
                        backButton={<MoveButton>Right</MoveButton>}
                        style={{
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    />
                </CarouselContainer>
                {/*<button onClick={handleNext}>*/}
                <Icon
                    className="fas fa-chevron-circle-right"
                    onClick={handleNext}
                />
                {/*</button>*/}
            </UnderContainer>
        </Container>
    );
}
const GameName = styled.p`
    color: rgb(58, 174, 56);
    font-size: 1.875rem;
`;
const WorldTitle = styled.p`
    font-size: 3.75rem;
    line-height: 1.1;
    font-weight: bold;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-size: 2.9rem;
        margin-bottom: 1rem;
    }
`;
const TopContainer = styled.div`
    text-align: center;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: opacity 500ms ease 0s;
`;
const Icon = styled.i`
    text-align: center;
    margin: auto 0;
    font-size: 2.5rem;
    padding: 1rem;
    color: #343a40;
    cursor: pointer;
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;
const CarouselContainer = styled.div`
    width: 100%;
    max-width: 900px;
`;
const MoveButton = styled.button`
    display: none;
`;
const GameStartContainer = styled.div`
    cursor: pointer;
`;
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
    padding-top: 2rem;
    padding-bottom: 1rem;
`;
const UnderContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export default Story;
