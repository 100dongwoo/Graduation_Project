import React from 'react';
import Banner from './Banner/Banner';
import Character from './CharacterPage/Character';
import Worldview from './Worldview/Worldview';
import Medias from './Medias/Medias';
function Home(props) {
    return (
        <>
            <Banner />
            <Character />
            <Worldview />
            <Medias />
        </>
    );
}

export default Home;
