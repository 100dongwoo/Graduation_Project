import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw, EditorState } from 'draft-js';
import styled from 'styled-components';
import axios from 'axios';
import { FailAlert, SuccessAlert } from '../../Alert/Alert';

function UploadPage(props) {
    const [editor, setEditor] = useState(EditorState.createEmpty());
    const [title, setTitle] = useState('');

    const onEditorChange = (editorState) => {
        setEditor(editorState);
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (
            draftToHtml(convertToRaw(editor.getCurrentContent())).length === 8
        ) {
            console.log('빈값입니다');
            return;
        }
        let params = {
            title: title,
            content: draftToHtml(convertToRaw(editor.getCurrentContent())),
        };
        axios
            .post('/posts/', params)
            .then((res) => {
                console.log(res);
                if (res.statusText !== 'Created') {
                    console.log(res);
                    return;
                }
                SuccessAlert('게시글 등록 성공');
            })
            .catch((err) => {
                console.log(err);
                if (err.response.data.msg) {
                    FailAlert(err.response.data.msg);
                } else {
                    console.log('에러 : ', err.response);
                }
            });
    };
    // const uploadImageCallBack = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open(
    //             'POST',
    //             'http://example.com#access_token=ACCESS_TOKEN&token_type=Bearer&expires_in=3600'
    //         );
    //         xhr.setRequestHeader('Authorization', '-------');
    //         const data = new FormData();
    //         data.append('image', file);
    //         xhr.send(data);
    //         xhr.addEventListener('load', () => {
    //             const response = JSON.parse(xhr.responseText);
    //             console.log(response);
    //             resolve(response);
    //         });
    //         xhr.addEventListener('error', () => {
    //             console.log('error');
    //             const error = JSON.parse(xhr.responseText);
    //             reject(error);
    //         });
    //     });
    // };
    const uploadImageCallBack = (file) => {
        console.log(URL.createObjectURL(file));
        // console.log(file);
        return new Promise((resolve, reject) => {
            resolve({
                data: { link: URL.createObjectURL(file) },
            });
        });
    };

    return (
        <Container>
            <Title> 게시글 등록</Title>
            <form>
                <div>
                    <TitleContainer>
                        <InputBox
                            placeholder="제목을 입력하세요."
                            type="text"
                            maxLength="60"
                            value={title}
                            onChange={(e) => setTitle(e.currentTarget.value)}
                        />
                        <LengthTitle>{title.length} / 60</LengthTitle>
                    </TitleContainer>

                    <Editor
                        editorStyle={{
                            width: '100%',
                            minHeight: 360,
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: 'lightgray',
                            padding: '10px 20px 10px 20px',
                        }}
                        editorState={editor}
                        onEditorStateChange={onEditorChange}
                        toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                            image: {
                                uploadCallback: uploadImageCallBack,
                            },
                        }}
                        placeholder="내용을 작성해주세요."
                        // 한국어 설정
                        localization={{
                            locale: 'ko',
                        }}
                    />

                    <SubmitBtn
                        style={{
                            background:
                                draftToHtml(
                                    convertToRaw(editor.getCurrentContent())
                                ).length === 8
                                    ? 'red'
                                    : '#f9f9f9',
                        }}
                        onClick={onHandleSubmit}
                    >
                        작성
                    </SubmitBtn>
                    <textarea
                        style={{ width: '100%', height: 200 }}
                        disabled
                        value={draftToHtml(
                            convertToRaw(editor.getCurrentContent())
                        )}
                    />
                </div>
            </form>
        </Container>
    );
}

const TitleContainer = styled.div`
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    max-width: 800px;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
`;
const LengthTitle = styled.span`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.055em;
    color: #c4c4c4;
    margin-right: 15px;
`;
const InputBox = styled.input`
    width: 100%;
    height: 100%;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 23px;
    letter-spacing: 0.055em;
    //color: #292c30;
    border: none;
    outline: none;
    flex: 1;
    margin-left: 16px;
`;
const Container = styled.div`
    max-width: 1250px;
    margin: auto;
    height: 1200px;
    padding: 1.5rem;
`;
const SubmitBtn = styled.button`
    width: 200px;
    height: 56px;
    margin-top: 1.5rem;
    border: 1px solid #e7e7e7;
`;
const Title = styled.p`
    font-family: Noto Sans KR;
    //margin-top: 2rem;
    //margin-bottom: 2rem;
    //font-style: normal;
    //font-weight: bold;
    //font-size: 24px;
    //line-height: 35px;
    font-size: 34px;
    color: #333;
    margin-top: 60px;
    width: 100%;
    float: left;
    margin-bottom: 60px;
    height: 40px;
`;
// export default UploadPage;

//
// import React from 'react';
//
// function UploadPage(props) {
//     return <div>Upload</div>;
// }

export default UploadPage;
