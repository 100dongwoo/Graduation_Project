import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from 'styled-components';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Link as LinkS } from 'react-scroll';

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
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            {console.log(values.email)}
            <div>
                <h1>Join the game</h1>
                <h2>Go inside the best gamers social network!</h2>
                <form onSubmit={handleSubmit}>
                    <Textbox>
                        <input
                            type="email"
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                    </Textbox>
                    <Textbox>
                        <input
                            type="password"
                            value={values.password}
                            onChange={handleChange('password')}
                        />
                    </Textbox>

                    <button type="submit" onClick={handleSubmit}>
                        Login now
                    </button>
                    {errors.password && <p>{errors.password}</p>}
                    {errors.email && <p>{errors.email}</p>}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
const Formcontainer = styled.form``;
const Textbox = styled.div`
    margin-top: 1rem;
`;
