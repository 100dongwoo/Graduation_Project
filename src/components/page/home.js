import React from 'react';
import MainPage from './MainPage/MainPage';
import Character from './CharacterPage/Character';
import Worldview from './Worldview/Worldview';
function Home(props) {
    return (
        <>
            <MainPage />
            <Character />
            <Worldview />
        </>
    );
}

export default Home;
