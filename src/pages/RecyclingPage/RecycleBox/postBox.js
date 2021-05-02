import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
function PostBox({ post }) {
    const [expanded, setExpanded] = React.useState(false);
    const onClickShowmore = () => {
        setExpanded(!expanded);
    };
    return (
        <Container>
            <Box>
                <Image src={post.image} alt="test" />
                <RightContainer>
                    <TextBox>
                        <Title>{post.title}</Title>
                        <ICON
                            onClick={onClickShowmore}
                            className={
                                expanded ? 'fas fa-minus' : 'fas fa-plus'
                            }
                        />
                    </TextBox>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <TYpography paragraph>{post.content}</TYpography>
                    </Collapse>
                </RightContainer>
            </Box>
        </Container>
    );
}
const RightContainer = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 0 1rem;
`;
const TYpography = styled(Typography)`
    padding: 0 16px 0 0;
    word-break: keep-all;
    white-space: pre-line;
`;
const ICON = styled.i`
    background: transparent;
    font-size: 1rem;
    border: 3px solid #20c997;
    border-radius: 50%;
    color: #20c997; ;
`;
const Title = styled.span`
    color: #67696d;
    line-height: 1.5;
    font-size: 1rem;
    font-weight: bold;
`;
const Container = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 1rem;
    width: 370px;
    box-shadow: rgb(175 181 186 / 30%) 0px 2px 6px 0px,
        rgb(175 181 186 / 30%) 0px -1px 6px 0px;
    box-sizing: inherit;
`;
const TextBox = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    height: 90px;
`;
const Box = styled.div`
    width: 100%;
    min-height: 90px;
    display: flex;
`;
const Image = styled.img`
    width: 84px;
    height: 90px;
`;
export default PostBox;
