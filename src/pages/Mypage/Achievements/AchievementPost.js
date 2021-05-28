import React from 'react';
import styled from 'styled-components';

//career.book.image 이미지
//career.book.name 페트병
//career.book.content

//career.content
//career.name
//career.type_detail_name
//career.type_name
//career.current_count
//
function AchievementPost({ post }) {
    return (
        <PostBox>
            {console.log(post)}
            <Image src={post.career?.book.image} />
            <div>
                <CareerContent style={{ color: '#1a7bc6' }}>
                    <CareerNameTitle>업적 명 : </CareerNameTitle>
                    {post.career?.name}
                </CareerContent>

                <CareerContent>
                    <CareerNameTitle>설명 : </CareerNameTitle>
                    {post.career?.content}
                </CareerContent>
                <CareerContent>
                    <CareerNameTitle>재활용 분야 : </CareerNameTitle>
                    {post.career?.type_detail_name}
                </CareerContent>
                <CareerContent>
                    <CareerNameTitle>달성도 : </CareerNameTitle>
                    달성도 : &nbsp;
                    {parseInt(
                        (parseFloat(post?.current_count) /
                            parseFloat(post?.max_count)) *
                            100
                    ) + '%'}
                    {/*&nbsp; &nbsp; | &nbsp;&nbsp; {post?.current_count} /{' '}*/}
                    {/*{post?.max_count}*/}
                </CareerContent>
            </div>
        </PostBox>
    );
}

export default AchievementPost;
const CareerNameTitle = styled.strong`
    color: black;
    font-weight: 700;
    font-family: Noto Sans KR;
`;

const CareerContent = styled.p`
    margin-bottom: 4px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-family: 'Nanum Gothic';
    font-weight: 400;
`;
const PostBox = styled.div`
    border-bottom: solid 1px #d9d9d9;
    display: flex;
    padding: 10px 7px 5px 4px;
`;
const Image = styled.img`
    border: 1px solid #adadad;
    object-fit: contain;
    //object-fit: cover;
    width: 140px;
    height: 153px;
    padding: 3px 2px 5px 2px;
    margin-right: 1.5rem;
`;
