import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function LoginModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            login_id: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            login_id: yup
                .string()
                .email('존재하지 않는 형식입니다.')
                .required('필수 항목입니다.'),
            password: yup
                .string()
                .min(4, '비밀번호는 최소 4자리 이상입니다.')
                .required('필수 항목입니다.'),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            console.log('onSubmit result', values);
            axios
                .post('v1/users/login/', values)
                .then((res) => {
                    console.log('성공', res);
                })
                .catch((err) => {
                    if (err.response.data.msg) {
                        alert(err.response.data.msg);
                    }
                });
        },
    });

    const {
        values,
        handleChange,
        errors,
        // setFieldTouched,
        // touched,
        // isValid,
        // isSubmitting,
        handleSubmit,
        // setFieldValue,
        // resetForm,
        // setErrors,
    } = formik;
    return (
        <>
            <button onClick={handleShow}>로그인</button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton />
                <Modal.Body>
                    <LoginLabel>로그인</LoginLabel>
                    <Form method="post" onSubmit={handleSubmit}>
                        <TextBox>
                            <Input
                                type="text"
                                required
                                value={values.login_id}
                                onChange={handleChange('login_id')}
                            />
                            <Label>Username</Label>
                        </TextBox>
                        <TextBox>
                            <Input
                                type="password"
                                required
                                value={values.password}
                                onChange={handleChange('password')}
                            />
                            <Label>Password</Label>
                        </TextBox>
                        <ForgetContainer className="pass">
                            Forgot Password?
                        </ForgetContainer>
                        <SubmitBtn type="submit" value="login" />
                        <SignContainer>
                            Not a member?
                            <SignFont href="register">Signup</SignFont>
                        </SignContainer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal;
const LoginLabel = styled.h1`
    text-align: center;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid silver;
`;
const Form = styled.form`
    padding: 0 40px;
    box-sizing: border-box;
`;
const TextBox = styled.div`
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
`;
const Input = styled.input`
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 1rem;
    border: none;
    background: none;
    outline: none;
    &:focus ~ Label {
        top: -5px;
        color: #2691d9;
    }
    &:valid ~ Label {
        top: -5px;
        color: #2691d9;
    }
    &:focus ~ Span {
        &:before {
            width: 100%;
        }
    }
    &:valid ~ Span {
        &:before {
            width: 100%;
        }
    }
`;
const Label = styled.label`
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 1rem;
    pointer-events: none;
    transition: 0.5s;
`;
const ForgetContainer = styled.div`
    margin: -5px 0 20px 5px;
    color: #a6a6a6;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
const SubmitBtn = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #2691d9;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    &:hover {
        border-color: #2691d9;
        transition: 0.5s;
    }
`;

const SignContainer = styled.div`
    margin: 30px 0;
    text-align: center;
    font-size: 1rem;
    color: #666666;
`;
const SignFont = styled.a`
    color: #2691d9;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;
