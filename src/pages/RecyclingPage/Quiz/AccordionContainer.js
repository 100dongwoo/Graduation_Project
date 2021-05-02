import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

function AccordionContainer({ quiz }) {
    return (
        <div>
            <Accordion style={{ borderBottom: '2px solid black' }}>
                <AccordionSummary
                    expandIcon={<i className="fas fa-angle-down" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <TYpography variant="h7">{quiz.question}</TYpography>
                </AccordionSummary>
                <SolutionBox>
                    <RealityFont>정답 : {quiz.answer}</RealityFont>
                    <SolutionFont>{quiz.content}</SolutionFont>
                </SolutionBox>
            </Accordion>
        </div>
    );
}
const SolutionBox = styled.div`
    padding: 0 3rem 1rem;
    margin-top: 0;
`;
const TYpography = styled(Typography)`
    padding: 1rem 0px;
    font-size: 1rem;
    font-weight: bolder;
`;
const RealityFont = styled.p`
    margin-bottom: 0;
    font-size: 1.3rem;
    line-height: 1.5;
    color: #67696d;
    font-weight: bolder;
`;
const SolutionFont = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: #67696d;
    margin-top: 0.5rem;
`;
export default AccordionContainer;
