import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw, EditorState } from 'draft-js';
import styled from 'styled-components';

function UploadPage(props) {
    const [editor, setEditor] = useState(EditorState.createEmpty());
    const onEditorChange = (editorState) => {
        setEditor(editorState);
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
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
                    <Editor
                        editorStyle={{
                            width: '100%',
                            minHeight: 360,
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: 'lightgray',
                        }}
                        editorState={editor}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
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
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
`;
// export default UploadPage;

//
// import React from 'react';
//
// function UploadPage(props) {
//     return <div>Upload</div>;
// }

export default UploadPage;
