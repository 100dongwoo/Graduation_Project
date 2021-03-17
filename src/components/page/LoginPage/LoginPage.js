import React from 'react';
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
    return (
        <div>
            <h1>Join the game</h1>
            <h2>Go inside the best gamers social network!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={values.email}
                    onChange={handleChange('email')}
                />
                <input
                    type="password"
                    value={values.password}
                    onChange={handleChange('password')}
                />
                <button type="submit" onClick={handleSubmit}>
                    Login now
                </button>
                {errors.password && <p>{errors.password}</p>}
                {errors.email && <p>{errors.email}</p>}
            </form>
        </div>
    );
}

export default LoginPage;
