import React from 'react';
import styled from 'styled-components';

function RegisterPage(props) {
    return (
        <Container>
            <Content>
                <LoginLabel>Login</LoginLabel>
                <Form method="post">
                    <TextBox>
                        <Input type="text" required />
                        <Span></Span>
                        <Label>Username</Label>
                    </TextBox>
                    <TextBox>
                        <Input type="password" required />
                        <Span></Span>
                        <Label>Password</Label>
                    </TextBox>
                    <ForgetContainer className="pass">
                        Forgot Password?
                    </ForgetContainer>
                    <SubmitBtn type="submit" value="login" />
                    <SignContainer>
                        Not a member?
                        <SignFont
                            target="_blank"
                            rel="noopener"
                            href={RegisterPage}
                        >
                            Signup
                        </SignFont>
                    </SignContainer>
                </Form>
            </Content>
        </Container>
    );
}

export default RegisterPage;
const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background: linear-gradient(120deg, #2980b9, #8e44ad);
`;
const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: white;
    border-radius: 10px;
`;
const LoginLabel = styled.h1`
    text-align: center;
    padding: 0 0 20px 0;
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
const Span = styled.span`
    &:before {
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        width: 0%;
        height: 2px;
        background: #2691d9;
        transition: 0.5s;
    }
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
