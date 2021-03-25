import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from 'styled-components';

function LoginPage(props) {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            email: yup
                .string()
                .email('존재하지 않는 형식입니다.')
                .required('필수 항목입니다.'),
            password: yup
                .string()
                .min(8, '비밀번호는 최소 4자리 이상입니다.')
                .required('필수 항목입니다.'),
        }),
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
    const [passwordHide, setPasswordHide] = useState(true);
    const onClickChange = (e, id) => {
        // e.preventDefault();
        if (id === 'password') {
            setPasswordHide(!passwordHide);
        }
    };
    return (
        <Container>
            <Logincontainer>
                <h1>회원가입</h1>

                <form onSubmit={handleSubmit}>
                    <Formcontainer>
                        <TextContainer>
                            <Textbox>
                                <Input
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    style={{
                                        border: !values.email
                                            ? 'border: 1px solid #adaabf'
                                            : !errors.email
                                            ? '1px solid #00d8be'
                                            : '1px solid #ff5631',
                                    }}
                                />
                                {values.email && !errors.email && (
                                    <SuccessIcons className="far fa-check-circle" />
                                )}
                                {values.email && errors.email && (
                                    <FailIcons className="far fa-times-circle" />
                                )}
                            </Textbox>
                        </TextContainer>
                        <TextContainer>
                            <ShowBox>
                                <TextLabel>이메일</TextLabel>
                                <HideLabel
                                    onClick={(e) => {
                                        onClickChange(e, 'password');
                                    }}
                                >
                                    {passwordHide ? 'Hide' : 'Show'}
                                </HideLabel>
                            </ShowBox>
                            <Textbox>
                                <LockIcons className="fas fa-lock" />
                                <Input
                                    type={passwordHide ? 'password' : 'text'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    style={{ padding: '12px 3rem' }}
                                />
                                {values.password && !errors.password && (
                                    <SuccessIcons className="far fa-check-circle" />
                                )}
                                {values.password && errors.password && (
                                    <FailIcons className="far fa-times-circle" />
                                )}
                            </Textbox>
                        </TextContainer>
                        <button type="submit" onClick={handleSubmit}>
                            Login now
                        </button>
                        {errors.password && <p>{errors.password}</p>}
                        {errors.email && <p>{errors.email}</p>}
                    </Formcontainer>
                </form>
            </Logincontainer>
        </Container>
    );
}

export default LoginPage;

const Container = styled.div``;
const Formcontainer = styled.form`
    width: 100%;
    background: yellow;
`;
const TextContainer = styled.div`
    margin: auto;
    max-width: 448px;
    text-align: left;
    margin-top: 1rem;
`;
const Textbox = styled.div`
    margin: auto;
    max-width: 448px;
    text-align: left;
    display: flex;
    position: relative;
`;
const Input = styled.input`
    width: 100%;
    height: 3rem;
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

const Logincontainer = styled.div`
    margin: auto;
    max-width: 1250px;
    text-align: center;
`;
const TextLabel = styled.p`
    margin-bottom: 3px;
`;
const HideLabel = styled(TextLabel)`
    cursor: pointer;
`;
const ShowBox = styled.div`
    display: flex;
    align-items: center;
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
    right: 12px;
    top: 16px;
    color: #ff5631;
`;
const LockIcons = styled.i`
    position: absolute;
    left: 16px;
    top: 16px;
    color: #adaabf;
`;
