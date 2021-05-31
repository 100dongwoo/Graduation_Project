import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import dore from './dore.png';
import TopContainer from '../../RecyclingPage/TopContainer/TopContainer';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { calculateChatDate } from '../../../Util/Util';
function UserInformation(props) {
    const auth = useSelector((state) => state.auth);
    const { user } = auth;

    return (
        <Container>
            <UserName>
                캐릭터정보
                <br /> <NickName>{user?.nickname}님</NickName>
            </UserName>

            <RightContainer>
                <RightContent>
                    <ImageBoxContainer>
                        <CircleBox>
                            <Circle
                                src="https://ssl.nx.com/s2/game/maplestory/renewal/common/char_info/job_icon02.png"
                                alt="inforImage"
                            />
                            <BoxTitle>공격력</BoxTitle>
                            <p> {user?.damage}</p>
                        </CircleBox>
                        <CircleBox>
                            <Circle
                                src="https://ssl.nx.com/s2/game/maplestory/renewal/common/char_info/job_icon02.png"
                                alt="inforImage"
                            />
                            <BoxTitle>방어력</BoxTitle>
                            <p>{user?.defence}</p>
                        </CircleBox>
                        <CircleBox>
                            <Circle
                                src="https://ssl.nx.com/s2/game/maplestory/renewal/common/char_info/job_icon02.png"
                                alt="inforImage"
                            />
                            <BoxTitle>체 력</BoxTitle>
                            <p>{user?.hp}</p>
                        </CircleBox>
                    </ImageBoxContainer>
                    <TopInfor>
                        <TopInforColor>경험치</TopInforColor> 123213213
                        <JumpIcon>|</JumpIcon>
                        <TopInforColor> 업적 수 </TopInforColor>
                        {111} 개
                    </TopInfor>
                </RightContent>
                <DoreBox>
                    <DoreImage src={dore} alt="dore" />
                </DoreBox>
            </RightContainer>
        </Container>
    );
}
const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`;
const ImageBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const JumpIcon = styled.span`
    margin: 0 1rem;
`;
const TopInfor = styled.p`
    font-size: 16px;
    color: #000000;
    line-height: 51px;
    padding: 0.5rem 0;
    border-top: 1px solid #474563;
    border-bottom: 1px solid #474563;
    margin-top: 1rem;
`;
const TopInforColor = styled.span`
    color: #f68500;
    margin-right: 0.4rem;
`;
const RightContainer = styled.div`
    display: flex;
    text-align: center;
    @media only screen and (max-width: 1024px) {
        margin: auto;
        margin-top: 1rem;
        width: 100%;
    }
`;
const BoxTitle = styled.p`
    margin-bottom: 0;
    color: #343a40;
`;
const DoreBox = styled.div`
    width: 212px;
    height: 212px;
    padding: 1rem;
    border: 1px solid #adadad;
    margin-left: 3rem;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;
const DoreImage = styled.img`
    width: 100%;
    height: 100%;
`;

const CircleBox = styled.div`
    width: 130px;
    height: 150px;
    text-align: center;
    font-size: 19px;
    color: gray;
    margin: 0 1rem;
    @media only screen and (max-width: 1024px) {
        margin: 0 0.5rem;
        width: 100px;
    }
`;
const Circle = styled.img`
    width: 93px;
    height: 93px;
`;
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;
const UserName = styled.span`
    //color: #fff;
    margin: 0;
    font-size: 55px;
    font-weight: normal;
    line-height: 68px;
`;
const NickName = styled(UserName)`
    color: #f68600;
`;
export default UserInformation;
