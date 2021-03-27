import React, { useState, useEffect, useRef } from 'react';
import Banner from './Banner/Banner';
import Character from './CharacterPage/Character';
import Worldview from './Worldview/Worldview';
import Medias from './Medias/Medias';
import Menubar from './Menubar/Menubar';
import styled from 'styled-components';
function Home(props) {
    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    };

    useEffect(() => {
        documentRef.current.addEventListener('scroll', handleScroll);
        return () =>
            documentRef.current.removeEventListener('scroll', handleScroll);
    }, [pageY]);

    return (
        <>
            <HeaderWrap className={hide && 'hide'}>
                <Menubar />
            </HeaderWrap>

            {/*<Menubar />*/}
            <Banner />
            <Character />
            <Worldview />
            <Medias />
        </>
    );
}

export default Home;

const HeaderArea = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
`;

const HeaderWrap = styled.div`
    //position: fixed;
    //top: 0;
    //left: 0;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 80px;
    transition: 0.4s ease;
    transform: translateY(-80px);
    margin-top: -80px;
    &.hide {
        transform: translateY(0px);
        margin-top: 0px;
    }
`;
