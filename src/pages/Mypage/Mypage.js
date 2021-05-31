import React, { useState } from 'react';
import { SamplePost } from '../../SampleData/SampleData';
import styled from 'styled-components';
import UserInformation from './UserInformation/UserInformation';
import Drawer from './Drawer/Drawer';
function Mypage(props) {
    const [myPosts, setMyPosts] = useState(SamplePost);
    return (
        <Container>
            <UserInformation />
            <Drawer />
        </Container>
    );
}
const Container = styled.div`
    //max-width: 1250px;
    ////margin: auto;
    //padding: 3rem 0;
`;
export default Mypage;
