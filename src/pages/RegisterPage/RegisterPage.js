import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from 'styled-components';
import './button.css';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
function RegisterPage(props) {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            login_id: '',
            password: '',
            checkPassword: '',
            nickname: '',
        },
        validationSchema: yup.object().shape({
            login_id: yup.string().email('존재하지 않는 형식입니다.'),
            // .required('필수 항목입니다.'),
            password: yup.string().min(8, '비밀번호는 최소 4자리 이상입니다.'),
            // .required('필수 항목입니다.'),
            // checkPassword: yup.string().required('필수 항목입니다.'),
            checkPassword: yup
                .string()
                .min(8, '비밀번호는 최소 4자리 이상입니다.')
                .oneOf([yup.ref('password'), null], '비밀번호와 같지않습니다.'),
            // phoneNumber: yup
            //     .string()
            //     .max(11, '최대 11자리입니다 ')
            //     .required('- 없이 숫자만 입력해주세요.'),
            nickname: yup
                .string()
                .min(2, '최소 2자리 이상 입니다 ')
                .max(6, '최대 6자리 이하 입니다'),
            // .required('필수 항목입니다.'),
        }),
        onSubmit: (values, { setSubmitting, setErrors }) => {
            // console.log(values);
            axios
                .post('v1/users/sign-up/', values)
                .then((res) => {
                    if (res.data.code !== 'OK') {
                        alert(res.data.msg);
                        return;
                    }
                    alert('회원가입 되었습니다.');
                    props.history.replace('/');
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
        resetForm,
        // setErrors,
    } = formik;
    const [passwordHide, setPasswordHide] = useState(true);
    const [checkPasswordHide, setCheckPasswordHide] = useState(true);
    const onClickChange = (e, id) => {
        // e.preventDefault();
        if (id === 'password') {
            setPasswordHide(!passwordHide);
        } else if (id === 'checkPassword')
            setCheckPasswordHide(!checkPasswordHide);
    };
    return (
        <Container>
            <LoginContainer>
                <JoinFont>회원가입</JoinFont>

                <FormContainer onSubmit={handleSubmit}>
                    {/*아이디*/}
                    <TextContainer>
                        <ShowBox>
                            <TextLabel>아이디</TextLabel>
                        </ShowBox>
                        <Textbox>
                            <Input
                                placeholder="이메일"
                                type="email"
                                value={values.login_id}
                                onChange={handleChange('login_id')}
                                style={{
                                    border:
                                        values.login_id.length === 0
                                            ? 'border: 1px solid #adaabf'
                                            : !errors.login_id
                                            ? '1px solid #00d8be'
                                            : '1px solid #ff5631',
                                }}
                            />
                            {values.login_id && !errors.login_id && (
                                <SuccessIcons className="far fa-check-circle" />
                            )}
                            {values.login_id && errors.login_id && (
                                <FailIcons className="far fa-times-circle" />
                            )}
                            {errors.login_id && (
                                <ErrorFont>{errors.login_id}</ErrorFont>
                            )}
                        </Textbox>
                    </TextContainer>
                    {/*비밀번호*/}
                    <TextContainer>
                        <ShowBox>
                            <TextLabel>비밀번호</TextLabel>
                            {/*<HideLabel*/}
                            {/*    onClick={(e) => {*/}
                            {/*        onClickChange(e, 'password');*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    {passwordHide ? 'Hide' : 'Show'}*/}
                            {/*</HideLabel>*/}
                        </ShowBox>
                        <Textbox>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    <Tooltip style={{ color: 'red' }}>
                                        {passwordHide
                                            ? '비밀번호 보여주기'
                                            : '비밀번호 숨기기'}
                                    </Tooltip>
                                }
                            >
                                <LockIcons
                                    onClick={(e) => {
                                        onClickChange(e, 'password');
                                    }}
                                    className={
                                        passwordHide
                                            ? 'fas fa-lock'
                                            : 'fas fa-lock-open'
                                    }
                                />
                            </OverlayTrigger>

                            {/*<LockIcons className="fas fa-lock" />*/}
                            <Input
                                placeholder="비밀번호"
                                type={passwordHide ? 'password' : 'text'}
                                value={values.password}
                                onChange={handleChange('password')}
                                style={{
                                    padding: '12px 3rem',
                                    border: !values.password
                                        ? 'border: 1px solid #adaabf'
                                        : !errors.password
                                        ? '1px solid #00d8be'
                                        : '1px solid #ff5631',
                                }}
                            />
                            {values.password && !errors.password && (
                                <SuccessIcons className="far fa-check-circle" />
                            )}
                            {values.password && errors.password && (
                                <FailIcons className="far fa-times-circle" />
                            )}
                            {errors.password && (
                                <ErrorFont>{errors.password}</ErrorFont>
                            )}
                        </Textbox>
                    </TextContainer>
                    {/*비밀번호 체크*/}

                    <TextContainer>
                        <ShowBox>
                            <TextLabel>비밀번호 확인</TextLabel>
                        </ShowBox>
                        <Textbox>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    <Tooltip style={{ color: 'red' }}>
                                        {passwordHide
                                            ? '비밀번호 확인 보여주기'
                                            : '비밀번호 확인 숨기기'}
                                    </Tooltip>
                                }
                            >
                                <LockIcons
                                    onClick={(e) => {
                                        onClickChange(e, 'checkPassword');
                                    }}
                                    className={
                                        checkPasswordHide
                                            ? 'fas fa-lock'
                                            : 'fas fa-lock-open'
                                    }
                                />
                            </OverlayTrigger>

                            <Input
                                placeholder="비밀번호 확인"
                                type={checkPasswordHide ? 'password' : 'text'}
                                value={values.checkPassword}
                                onChange={handleChange('checkPassword')}
                                style={{
                                    padding: '12px 3rem',
                                    border: !values.checkPassword
                                        ? 'border: 1px solid #adaabf'
                                        : !errors.checkPassword
                                        ? '1px solid #00d8be'
                                        : '1px solid #ff5631',
                                }}
                            />
                            {values.checkPassword && !errors.checkPassword && (
                                <SuccessIcons className="far fa-check-circle" />
                            )}
                            {values.checkPassword && errors.checkPassword && (
                                <FailIcons className="far fa-times-circle" />
                            )}
                            {errors.checkPassword && (
                                <ErrorFont>{errors.checkPassword}</ErrorFont>
                            )}
                        </Textbox>
                        {/*{errors.checkPassword && (*/}
                        {/*    <ErrorFont>{errors.checkPassword}</ErrorFont>*/}
                        {/*)}*/}
                    </TextContainer>
                    {/*닉네임*/}
                    <TextContainer>
                        <ShowBox>
                            <TextLabel>닉네임</TextLabel>
                        </ShowBox>
                        <Textbox>
                            <Input
                                placeholder="닉네임"
                                type="text "
                                value={values.nickname}
                                onChange={handleChange('nickname')}
                                style={{
                                    border: !values.nickname
                                        ? 'border: 1px solid #adaabf'
                                        : !errors.nickname
                                        ? '1px solid #00d8be'
                                        : '1px solid #ff5631',
                                }}
                            />
                            {values.nickname && !errors.nickname && (
                                <SuccessIcons className="far fa-check-circle" />
                            )}
                            {values.nickname && errors.nickname && (
                                <FailIcons className="far fa-times-circle" />
                            )}
                            {errors.nickname && (
                                <ErrorFont>{errors.nickname}</ErrorFont>
                            )}
                        </Textbox>
                    </TextContainer>

                    {/*버튼*/}

                    {/*<button type="submit" onClick={handleSubmit}>*/}
                    {/*    Login now*/}
                    {/*</button>*/}
                    <ButtonContainer>
                        <div className="wrap">
                            <button
                                className="button"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                회원가입 하귀
                            </button>
                        </div>
                        <div className="wrap">
                            <button
                                className="button"
                                type="reset"
                                onClick={resetForm}
                            >
                                다시입력
                            </button>
                        </div>
                    </ButtonContainer>
                    {/*{errors.password && (*/}
                    {/*    <ErrorFont>{errors.password}</ErrorFont>*/}
                    {/*)}*/}
                    {/*{errors.email && <ErrorFont>{errors.email}</ErrorFont>}*/}
                    {/*{errors.checkPassword && (*/}
                    {/*    <ErrorFont>{errors.checkPassword}</ErrorFont>*/}
                    {/*)}*/}
                    {/*{errors.nickname && (*/}
                    {/*    <ErrorFont>{errors.nickname}</ErrorFont>*/}
                    {/*)}*/}
                </FormContainer>
            </LoginContainer>
        </Container>
    );
}

export default RegisterPage;

const Container = styled.div``;

const JoinFont = styled.p`
    font-size: 40px;
    padding-top: 60px;
    border-bottom: 1px solid #cccccc;
    text-align: center;
    margin-bottom: 4rem;
    line-height: 5rem;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const ErrorFont = styled.p`
    color: #f2685b;
`;
const FormContainer = styled.form`
    width: 100%;
`;
const TextContainer = styled.div`
    width: 530px;
    text-align: left;
    margin: 1rem auto auto;
    height: 5.4rem;
    display: flex;
    justify-content: space-between;
`;
const Textbox = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    position: relative;
    width: 400px;
`;
const Input = styled.input`
    background-color: #eaf0fe;
    width: 100%;
    height: 52px;
    border: 1px solid #adaabf;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(50, 43, 95, 0.08);
    border-radius: 4px;
    padding: 12px 1.5rem;
    &:focus {
        outline: none;
        border: 1px solid blue;
        //border: 1px solid #00d8be;
    }
`;

const LoginContainer = styled.div`
    margin: auto;
    max-width: 1250px;
    text-align: center;
`;
const TextLabel = styled.p`
    margin-bottom: 3px;
    font-weight: bold;
    font-size: 1rem;
`;
const HideLabel = styled(TextLabel)`
    cursor: pointer;
`;
const ShowBox = styled.div`
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
`;
const SuccessIcons = styled.i`
    position: absolute;
    right: 12px;
    top: 16px;
    color: #00d8be;
`;
const FailIcons = styled.i`
    position: absolute;
    top: 16px;
    right: 12px;
    color: #ff5631;
`;
const LockIcons = styled.i`
    position: absolute;
    top: 16px;
    left: 16px;
    color: #adaabf;
    cursor: pointer;
`;
//<i class="fas fa-lock-open"></i>
