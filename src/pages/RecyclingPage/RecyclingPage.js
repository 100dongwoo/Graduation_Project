import React from 'react';

import RecycleBox from './RecycleBox/RecycleBox';
import Quiz from './Quiz/Quiz';
import RulesContainer from './RulesContainer/RulesContainer';
import TopContainer from './TopContainer/TopContainer';
function RecyclingPage(props) {
    return (
        <>
            <TopContainer />
            <RulesContainer />
            <RecycleBox />
            <Quiz />
        </>
    );
}

export default RecyclingPage;
