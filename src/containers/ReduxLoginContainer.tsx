import { updateEmail, updatePassword } from "../features/login-redux/loginSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LoginView, { LoginProps } from "../views/Login/index";
import { useNavigate } from "react-router-dom";

const ReduxLoginContainer = () => {
  const loginForm = useAppSelector((state) => state.loginForm.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEmail(e.target.value));
  };

  const handlePasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updatePassword(e.target.value));
  };

  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/login-redux/success", { state: { fromReduxLogin: true } });
  };

  const props: LoginProps = {
    loginForm: loginForm,
    onEmailChanged: handleEmailChanged,
    onPasswordChanged: handlePasswordChanged,
    onLogin: handleLogin,
  };

  return <LoginView {...props} />;
};

export default ReduxLoginContainer;
