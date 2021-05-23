import React, { useState } from 'react';
import { SamplePost } from '../../../SampleData/SampleData';
import styled from 'styled-components';
import PostContainer from './PostContainer';
function Myposts(props) {
    const [posts, setPosts] = useState([]);
    return (
        <div>
            {SamplePost.map((post, index) => (
                <PostContainer post={post} key={index} />
            ))}
        </div>
    );
}

export default Myposts;
