import React from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { calculateChatDate } from '../../Util/Util';

function CommunityTable({ posts }) {
    const history = useHistory();
    const onClickToDetail = (e, postId) => {
        history.push(`/post/${postId}`);
    };
    return (
        <div>
            <Table hover size="sm">
                <thead>
                    <Headtr>
                        <HeadTitleTH>제목</HeadTitleTH>
                        <HeadUserTH>유저</HeadUserTH>
                        <HeadSmallTH>댓글</HeadSmallTH>
                        <HeadSmallTH>조회 수</HeadSmallTH>
                        <HeadSmallTH>활동</HeadSmallTH>
                    </Headtr>
                </thead>
                <tbody>
                    {posts?.map((post, index) => (
                        <TR
                            key={index}
                            onClick={(e) => {
                                onClickToDetail(e, post.id);
                            }}
                        >
                            <ContentTitle>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <TitleFont>
                                        {post.title}
                                        {/*{post.image && (*/}
                                        {/*    <ImageIcon className="far fa-file-image" />*/}
                                        {/*)}*/}
                                    </TitleFont>
                                    {/*{post.title}*/}
                                    {post.image && (
                                        <ImageIcon className="far fa-file-image" />
                                    )}
                                </div>
                            </ContentTitle>
                            <ContentUser>{post.user.nickname}</ContentUser>
                            <ContentSmall>{post.review_count}</ContentSmall>
                            <ContentSmall>{post.hit_count}</ContentSmall>
                            <ContentSmall>
                                {calculateChatDate(post.created_at)}
                            </ContentSmall>
                        </TR>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

const TitleFont = styled.span`
    overflow: hidden;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
    color: #212529;
    font-size: 1rem;
    font-weight: 400;
`;
const TR = styled.tr`
    cursor: pointer;
`;
const ImageIcon = styled.i`
    margin-left: 5px;
    color: #2691d9;
`;
const TH = styled.th`
    line-height: 3.25;
    font-size: 1rem;
    color: #919191;
`;
const HeadTitleTH = styled(TH)`
    text-align: left;
    width: 75%;
    white-space: nowrap;
`;
const HeadUserTH = styled(TH)`
    text-align: center;
    width: 10%;
    min-width: 4.3rem;
    white-space: nowrap;
`;
const HeadSmallTH = styled(TH)`
    width: 5%;
    min-width: 4.9rem;
    text-align: center;
`;
const Headtr = styled.tr`
    border-bottom: 3px solid #919191;
    border-top: hidden;
`;
const TD = styled.td`
    line-height: 2.25;
`;
const ContentTitle = styled(TD)`
    text-align: left;
`;
const ContentUser = styled(TD)`
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
`;
const ContentSmall = styled(TD)`
    text-align: center;
`;
export default CommunityTable;
