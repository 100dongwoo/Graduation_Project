import React, { useState } from 'react';
import { SamplePost } from '../../SampleData/SampleData';
import styled from 'styled-components';
import UserInformation from './UserInformation/UserInformation';
function Mypage(props) {
    const [myPosts, setMyPosts] = useState(SamplePost);
    return (
        <Container>
            <UserInformation />
        </Container>
    );
}
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
`;
export default Mypage;
