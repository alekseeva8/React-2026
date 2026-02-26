import React, { useState } from "react";
import LoginView, { LoginProps } from "../views/Login/index";


const LoginContainer = () => {
    const formInitialState = { values: { email: "", password: "" }, touched: { email: false, password: false } };

    const [loginForm, setLoginForm] = useState(formInitialState);

    const handleEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValues = { ...loginForm.values, email: e.target.value };
        const newTouched = { ...loginForm.touched, email: true };
        setLoginForm({ values: newValues, touched: newTouched });
    };

    const handlePasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValues = { ...loginForm.values, password: e.target.value };
        const newTouched = { ...loginForm.touched, password: true };
        setLoginForm({ values: newValues, touched: newTouched });
    };

    const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Email ${loginForm.values.email}; Password ${loginForm.values.password}`)
        setLoginForm(formInitialState);
    };

    const props: LoginProps = {
        loginForm: loginForm,
        onEmailChanged: handleEmailChanged,
        onPasswordChanged: handlePasswordChanged,
        onLogin: handleLogin
    }

    return (
        <LoginView {...props} />
    );
}

export default LoginContainer;