import LoginSuccessView from "../views/LoginSuccess/index";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const FormikSuccessContainer = () => {
  const location = useLocation();

  if (!location.state?.fromFormikLogin) {
    return <Navigate to="/login-formik" replace />;
  }

  const loginData = useAppSelector((state) => state.formikForm.value);
  const message = "Успешный вход с помощью formik!";
  const props = {
    loginData: loginData,
    message: message,
  };

  return <LoginSuccessView {...props} />;
};

export default FormikSuccessContainer;
