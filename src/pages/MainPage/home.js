import React, { useState, useEffect, useRef } from 'react';
import Banner from './Banner/Banner';
import Story from './Story/Story';
import MapMonsters from './Worldview/MapMonsters';
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
            <MapMonsters />
            <Story />
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
    //top: 80px;
    //left: 0;
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 80px;
    transition: 0.8s ease;
    transform: translateY(-80px);
    margin-top: -100px;
    &.hide {
        transform: translateY(0px);
        margin-top: 0px;
    }

    @media only screen and (max-device-width: 768px) {
        display: none;
    }
`;
