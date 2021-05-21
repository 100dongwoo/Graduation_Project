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
        <Container id="character">
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
            <button onClick={handleBack}>왼쪽이동</button>
            <CarouselContainer>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {story?.map((step, index) => (
                        <ImageContainer key={index} image={step}>
                            {/*{Math.abs(activeStep - index) <= 2 ? (*/}
                            {/*    <img src={step} alt={'이미지'} />*/}
                            {/*) : null}*/}
                        </ImageContainer>
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
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                />
            </CarouselContainer>
            <button onClick={handleNext}>오른 이동</button>
        </Container>
    );
}

const ImageContainer = styled.div`
    //background-size: cover;
    //object-fit: cover;
    width: 100%;
    height: 400px;
    background: url(${(props) => props.image}) no-repeat center;
    background-size: contain;
    object-fit: contain;
`;
const Image = styled.div``;
const CarouselContainer = styled.div`
    width: 600px;
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
    display: flex;
    justify-content: center;
`;
export default Story;
