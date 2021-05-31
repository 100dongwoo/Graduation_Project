import React, { useRef, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw, EditorState } from 'draft-js';
import { ContentState, convertFromHTML } from 'draft-js';
import styled from 'styled-components';
import axios from 'axios';
import { FailAlert, SuccessAlert } from '../../Alert/Alert';
import { useHistory } from 'react-router-dom';
import api from '../../settings/api';
// import { convertFromHTML } from 'draft-convert';

function UploadPage(props) {
    const post = !!props.location.state ? props.location.state.post : null;
    const [editor, setEditor] = useState(
        post
            ? EditorState.createWithContent(
                  ContentState.createFromBlockArray(
                      convertFromHTML(post?.content)
                  )
              )
            : EditorState.createEmpty()
    );
    const [title, setTitle] = useState(post ? post?.title : '');
    const [file, setFile] = useState(post ? post?.image : '');
    const [preview, setPreview] = useState(post ? post?.image : '');
    const history = useHistory();
    const fileInput = useRef();

    // onChange(
    //     EditorState.push(EditorState, convertFromHTML(post?.content))
    // );
    const onEditorChange = (editorState) => {
        setEditor(editorState);
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            FailAlert('제목을 입력해주세요');
            return;
        }
        if (
            draftToHtml(convertToRaw(editor.getCurrentContent())).length === 8
        ) {
            FailAlert('내용을 입력해주세요');
            return;
        }
        // let params = {
        //     title: title,
        //     content: draftToHtml(convertToRaw(editor.getCurrentContent())),
        //     image: file,
        // };
        let request = post ? api.patch : api.post;
        let url = post ? `/posts/${post.id}/` : '/posts/';
        let form = new FormData();
        form.append('title', title);
        form.append(
            'content',
            draftToHtml(convertToRaw(editor.getCurrentContent()))
        );
        if (post && file === post?.image) {
        } else if (!!file) {
            // console.log('12');
            form.append('image', file);
        }
        if (post && !file) {
            form.append('image', '');
        }

        // axios
        //     .post('/posts/', form)
        request(url, form)
            .then((res) => {
                // console.log(res);
                if (res.statusText !== 'Created' && res.statusText !== 'OK') {
                    console.log(res);
                    return;
                }
                SuccessAlert(`${post ? '수정' : '추가'}성공.`);
                post ? history.goBack() : history.push('/Community');
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
            <Title> 게시글 {post ? '수정' : '등록'}</Title>
            <form>
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
                {/**/}

                <div className="FileUp">
                    {preview && (
                        <div>
                            <p style={{ marginRight: '20px' }}>첨부 이미지</p>

                            <Preview src={preview} alt="previewImage" />
                            {/*<i className="fas fa-trash"/>*/}
                            {/*<DeleteImage*/}
                            {/*    onClick={(e) => {*/}
                            {/*        e.preventDefault();*/}
                            {/*        fileInput.current.value = '';*/}
                            {/*        setFile(null);*/}
                            {/*        setPreview(null);*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    이미지 삭제 <i className="fas fa-trash" />*/}
                            {/*</DeleteImage>*/}
                        </div>
                    )}
                    <Label className="input-file-button" htmlFor="input-file">
                        <i className="far fa-image" />
                        {preview ? '이미지변경' : '이미지'}
                    </Label>
                    {preview && (
                        <DeleteImage
                            onClick={(e) => {
                                e.preventDefault();
                                fileInput.current.value = '';
                                setFile(null);
                                setPreview(null);
                            }}
                        >
                            이미지 삭제 <i className="fas fa-trash" />
                        </DeleteImage>
                    )}
                    <input
                        ref={fileInput}
                        id="input-file"
                        style={{ display: 'none' }}
                        type="file"
                        // name="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => {
                            // setFile(e.target.value);
                            e.preventDefault();

                            let reader = new FileReader();
                            let file = e.target.files[0];
                            reader.onloadend = () => {
                                setFile(file);
                                setPreview(reader.result);
                            };
                            reader.readAsDataURL(file);
                        }}
                    />
                </div>

                {/**/}
                <ButtonContainer>
                    <SubmitBtn
                        // style={{
                        //     background:
                        //         draftToHtml(
                        //             convertToRaw(editor.getCurrentContent())
                        //         ).length === 8
                        //             ? 'red'
                        //             : '#f9f9f9',
                        // }}
                        onClick={onHandleSubmit}
                    >
                        {post ? '수 정' : '등 록'}
                    </SubmitBtn>
                    <SubmitBtn
                        cancle={true}
                        onClick={(e) => {
                            e.preventDefault();
                            history.goBack();
                        }}
                    >
                        취 소
                    </SubmitBtn>
                    {/*<textarea*/}
                    {/*    style={{ width: '100%', height: 200 }}*/}
                    {/*    disabled*/}
                    {/*    value={draftToHtml(*/}
                    {/*        convertToRaw(editor.getCurrentContent())*/}
                    {/*    )}*/}
                    {/*/>*/}
                </ButtonContainer>
            </form>
        </Container>
    );
}
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const Label = styled.label`
    cursor: pointer;
    font-size: 1.4rem;
    font-family: 'NanumBarunGothic', 'Malgun Gothic', sans-serif;
    font-weight: 600;
    &:hover {
    }
`;
const Preview = styled.img`
    width: 12.5rem;
    height: 12.5rem;
    margin: 1.5rem 0;
    @media only screen and (max-width: 1024px) {
    }
`;
const DeleteImage = styled.button`
    margin-left: 0.7rem;
    border-radius: 10px;
    background-color: #0a66b7;

    padding: 10px;
    color: #ffffff;
`;
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
    width: 90px;
    height: 56px;
    margin-top: 1.5rem;
    border: 1px solid #e7e7e7;
    //background: #455d9d;
    color: #ffffff;
    align-items: center;
    text-align: center;
    background: ${(props) => (props.cancle ? '#747a86' : '#455d9d')};
    margin-right: 1rem;
    &:hover {
        opacity: 0.8;
    }
    //box-shadow: 0 2px 15px 0 rgb(0 0 0 / 70%);
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
