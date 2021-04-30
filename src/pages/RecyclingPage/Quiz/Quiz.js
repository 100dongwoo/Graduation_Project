import React from 'react';
import styled from 'styled-components';
import { QuizSample } from '../../../SampleData/SampleData';
import AccordionContainer from './AccordionContainer';

function Quiz(props) {
    return (
        <Container>
            <Content>
                <h1>재활용 QUIZ</h1>
                <p>
                    여러분의 쓰레기가 오염되지 않도록 하고 재활용 과정을 거쳐
                    다음 생까지 깨끗한 환경을 만들 수 있도록 <br /> 돕는 퀴즈를
                    통해 재활용 IQ를 성장 시키세요. <br /> 올바른 재활용을 통해
                    다른 사람과 환경을 보호 하려면 문제를 통해 배우십시오.
                </p>
                {QuizSample.map((quiz, index) => (
                    <AccordionContainer quiz={quiz} key={index} />
                ))}
            </Content>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    margin-bottom: 3rem;
`;
const Content = styled.div`
    max-width: 1250px;
    margin: auto;
`;
export default Quiz;
