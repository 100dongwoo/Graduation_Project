import React, { useEffect, useState } from 'react';
import { SampleData } from '../../SampleData/SampleData';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
// import { selectUser } from '../../Redux/store';
import { selectUser } from '../../Redux/userSlice';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { FailAlert, SuccessAlert } from '../../Alert/Alert';
import Pagination from '@material-ui/lab/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import CommunityTable from './CommunityTable';
import CommunityBig from './CommunityBig';
import PaginationComponent from '../../components/Pagination/PaginationComponent';

function CommunityPage(props) {
    const [totalPage, setTotalPage] = useState(1); //  전체 크기
    const [posts, setPosts] = useState([]);
    const [isDisplay, setIsDisplay] = useState('big');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1); //현재 페이지
    const [isLoading, setIsLoading] = useState(true);
    // const user = useSelector(selectUser);
    const auth = useSelector((state) => state.auth);
    const { user } = auth;
    const history = useHistory();
    const onChangeDisplay = (e, Display) => {
        setIsDisplay(Display);
    };
    const handleChange = (e, value) => {
        setPage(value);
        fetchPost(value);
    };
    useEffect(() => {
        fetchPost(page);
    }, []);

    const fetchPost = (page, keyword) => {
        let params = { page };
        if (keyword) {
            params.keyword = keyword;
        }
        // console.log(params);
        axios
            .get(`/posts/`, { params }, { withCredentials: true })
            .then((res) => {
                console.log('res', res);
                if (res.statusText !== 'OK') {
                    // console.log(res);
                    return;
                }
                // console.log(res);
                if (res.data?.count === 0) {
                    FailAlert('게시글이 존재하지 않습니다');
                    return;
                }
                setPosts(res.data?.results);
                setTotalPage(
                    parseInt(res.data.count) !== 0
                        ? parseInt(res.data.count) % 20 === 0
                            ? parseInt(res.data.count / 20)
                            : parseInt(res.data.count / 20) + 1
                        : 1
                );
                setIsLoading(false);
            })
            .catch((err) => {
                if (err.response.data?.msg) {
                    FailAlert(err.response.data.msg);
                    alert(err.response.data.msg);
                }
            });
    };
    return (
        <>
            {isLoading ? (
                <SpinnerContainer>
                    <Spinner animation="border" />
                    <h2>&nbsp; 로딩 중 ...</h2>
                </SpinnerContainer>
            ) : (
                <Container>
                    <div>
                        <Title>커뮤니티</Title>
                        <Subtitle>사람들과 지식을 공유해보세요</Subtitle>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                fetchPost(1, search);
                            }}
                        >
                            <InputGroups>
                                <InputForm
                                    // onSubmit={() => fetchPost(1, search)}
                                    placeholder="검색어"
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }}
                                />
                                <InputGroup.Append>
                                    <SearchBtn
                                        variant="outline-secondary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            fetchPost(1, search);
                                        }}
                                    >
                                        <i className="fas fa-search" />
                                        검색
                                    </SearchBtn>
                                </InputGroup.Append>
                            </InputGroups>
                        </form>
                        <IconBox>
                            <div>
                                {user && (
                                    <WriteButton
                                        onClick={() => {
                                            history.push('/upload');
                                        }}
                                    >
                                        글쓰기
                                    </WriteButton>
                                )}
                            </div>
                            <div>
                                <Icons
                                    className="fas fa-th-large"
                                    style={{
                                        color:
                                            isDisplay !== 'big'
                                                ? '#000'
                                                : '#7fff00',
                                    }}
                                    onClick={(e) => {
                                        onChangeDisplay(e, 'big');
                                    }}
                                />
                                <Icons
                                    className="fas fa-list"
                                    style={{
                                        color:
                                            isDisplay !== 'small'
                                                ? '#000'
                                                : '#7fff00',
                                    }}
                                    onClick={(e) => {
                                        onChangeDisplay(e, 'small');
                                    }}
                                />
                            </div>
                        </IconBox>

                        {isDisplay === 'big' ? (
                            <CommunityBig posts={posts} />
                        ) : (
                            <CommunityTable posts={posts} />
                        )}
                        <PaginationComponent
                            totalPage={totalPage}
                            page={page}
                            handleChange={handleChange}
                        />
                        {/*<Pagination*/}
                        {/*    count={totalPage}*/}
                        {/*    variant="outlined"*/}
                        {/*    shape="rounded"*/}
                        {/*    page={page}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    style={{*/}
                        {/*        display: 'flex',*/}
                        {/*        justifyContent: 'center',*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*반응형 사용*/}
                        {/*<Pagination*/}
                        {/*    count={totalPage}*/}
                        {/*    variant="outlined"*/}
                        {/*    shape="rounded"*/}
                        {/*    value={page}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    siblingCount={0}*/}
                        {/*    style={{*/}
                        {/*        display: 'flex',*/}
                        {/*        justifyContent: 'center',*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </div>
                </Container>
            )}
        </>
    );
}
const WriteButton = styled.button`
    min-width: 53px;
    font-size: 16px;
    color: #fff !important;
    text-align: center;
    background-color: #455d9d;
    border-radius: 2px;
    padding: 10px 14px 10px 14px;
    border: 1px solid #455d9d;
    display: inline-block;
    line-height: 1;
    &:hover {
        background: #263d7a;
        //opacity: 0.9;
    }
`;
const SpinnerContainer = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
//이위는 게시글 작게보기
const IconBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem;
    margin-top: 1rem;
`;
const Icons = styled.i`
    font-size: 1.2rem;
    margin-left: 1.2rem;
    cursor: pointer;
`;
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
    padding: 2rem 2rem;
`;
const Title = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 127.5%;
    color: #001129;
`;
const Subtitle = styled.p`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    color: #666666;
`;
const InputGroups = styled(InputGroup)`
    max-width: 800px;
    margin: 1.5rem auto auto;
    box-sizing: border-box;
    padding: 0;
    border-radius: 0.25rem;
`;
const SearchBtn = styled(Button)`
    border: none;
    border-radius: 0.25rem;
    background: #052065;
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`;
const InputForm = styled(FormControl)`
    height: 44px;
    :focus {
        border-color: #ff0000;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(255, 0, 0, 0.6);
    }
`;
export default CommunityPage;
