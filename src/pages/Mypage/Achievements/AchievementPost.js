import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

//career.book.image 이미지
//career.book.name 페트병
//career.book.content

//career.content
//career.name
//career.type_detail_name
//career.type_name
//career.current_count
//
function AchievementPost({ post, clear }) {
    const [isOpen, setIsOpen] = useState(false);
    const onChnageIsOpen = (e) => {
        setIsOpen(!isOpen);
    };
    return (
        <Container>
            <PostBox>
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
                        {parseInt(
                            (parseFloat(post?.current_count) /
                                parseFloat(post?.max_count)) *
                                100
                        ) + '%'}
                        {/*&nbsp; &nbsp; | &nbsp;&nbsp; {post?.current_count} /{' '}*/}
                        {/*{post?.max_count}*/}
                    </CareerContent>
                    {clear && (
                        <MoreText onClick={onChnageIsOpen}>
                            {isOpen ? '도감 접기' : '도감 보기'}
                        </MoreText>
                    )}
                </div>
            </PostBox>
            <CollapseContainer>
                {/*<Collapse isOpened={isOpen}>*/}
                {/*    <p>*/}
                {/*        <span>도감 명 : </span> {post?.career?.book.name}*/}
                {/*    </p>*/}
                {/*    <BookContent>{post?.career?.book.content}</BookContent>*/}
                {/*</Collapse>*/}
                <Collapse
                    isOpen={isOpen}
                    // onEntering={onEntering}
                    // onEntered={onEntered}
                    // onExiting={onExiting}
                    // onExited={onExited}
                >
                    {/*<Card>*/}
                    {/*<CardBody>*/}
                    <p>
                        <span>도감 명 : </span> {post?.career?.book.name}
                    </p>
                    <BookContent>{post?.career?.book.content}</BookContent>
                    {/*</CardBody>*/}
                    {/*</Card>*/}
                </Collapse>
            </CollapseContainer>
        </Container>
    );
}

export default AchievementPost;
const CollapseContainer = styled.div`
    padding: 5px 1rem;
`;
const BookContent = styled.p`
    word-break: keep-all;
`;
const MoreText = styled.p`
    cursor: pointer;
    color: blue;
    &:hover {
        transform: scale(1.04);
    }
`;
const Container = styled.div`
    border-bottom: solid 1px #d9d9d9;
`;
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
    //border-bottom: solid 1px #d9d9d9;
    display: flex;
    padding: 10px 7px 5px 4px;
    word-break: keep-all;
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
