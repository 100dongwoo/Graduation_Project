// import React, { useRef, useState } from 'react';
// // import './Write.css';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';
// import { convertToRaw, EditorState } from 'draft-js';
// import styled from 'styled-components';
//
// // import moment from 'moment';
//
// function UploadPage(props) {
//     const [editor, setEditor] = useState(EditorState.createEmpty());
//
//     const onEditorChange = (editorState) => {
//         setEditor(editorState);
//     };
//     const onHandleSubmit = (e) => {
//         e.preventDefault();
//     };
//     return (
//         <Container>
//             <Title> 게시글 등록</Title>
//             <form>
//                 <div>
//                     <Editor
//                         editorStyle={{
//                             width: '100%',
//                             minHeight: 360,
//                             borderWidth: 1,
//                             borderStyle: 'solid',
//                             borderColor: 'lightgray',
//                         }}
//                         editorState={editor}
//                         onEditorStateChange={onEditorChange}
//                     />
//
//                     <SubmitBtn
//                         style={{
//                             background:
//                                 draftToHtml(
//                                     convertToRaw(editor.getCurrentContent())
//                                 ).length === 8
//                                     ? 'red'
//                                     : '#f9f9f9',
//                         }}
//                         onClick={onHandleSubmit}
//                     >
//                         작성
//                     </SubmitBtn>
//                     {/*<textarea*/}
//                     {/*    style={{ width: '100%', height: 200 }}*/}
//                     {/*    disabled*/}
//                     {/*    value={draftToHtml(*/}
//                     {/*        convertToRaw(editor.getCurrentContent())*/}
//                     {/*    )}*/}
//                     {/*/>*/}
//                 </div>
//             </form>
//         </Container>
//     );
// }
//
// const Container = styled.div`
//     max-width: 1250px;
//     margin: auto;
//     height: 1200px;
//     padding: 1.5rem;
// `;
// const SubmitBtn = styled.button`
//     width: 200px;
//     height: 56px;
//     margin-top: 1.5rem;
//     border: 1px solid #e7e7e7;
// `;
// const Title = styled.p`
//     font-family: Noto Sans KR;
//     margin-top: 2rem;
//     margin-bottom: 2rem;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 24px;
//     line-height: 35px;
// `;
// export default UploadPage;

//
//
//
//
import React from 'react';

function UploadPage(props) {
    return <div>Upload</div>;
}

export default UploadPage;
