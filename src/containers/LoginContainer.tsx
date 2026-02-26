import React, { useState } from "react";
import LoginView, { LoginProps } from "../views/Login/index";

const isValidEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value.trim());
};

const isValidPassword = (value: string) => {
    return value.trim().length >= 6;
};

const LoginContainer = () => {
    const initialUserState = { email: "", password: "" };
    const initialEmailStatus = { valid: false, errorDisabled: true };
    const initialPasswordStatus = { valid: false, errorDisabled: true };

    const [user, setUser] = useState(initialUserState);
    const [emailStatus, setEmailStatus] = useState(initialEmailStatus);
    const [passwordStatus, setPasswordStatus] = useState(initialPasswordStatus);

    const handleEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newObj = { ...user, email: e.target.value };
        setUser(newObj);
        const isValid = isValidEmail(e.target.value);
        setEmailStatus({ valid: isValid, errorDisabled: false });
    };

    const handlePasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newObj = { ...user, password: e.target.value };
        setUser(newObj);
        const isValid = isValidPassword(e.target.value);
        setPasswordStatus({ valid: isValid, errorDisabled: false });
    };

    const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Email ${user.email}; Password ${user.password}`)
        setUser(initialUserState);
    };

    const props: LoginProps = {
        user: user,
        onEmailChanged: handleEmailChanged,
        onPasswordChanged: handlePasswordChanged,
        onLogin: handleLogin,
        emailStatus: emailStatus,
        passwordStatus: passwordStatus,
    }

    return (
        <LoginView {...props} />
    );
}

export default LoginContainer;