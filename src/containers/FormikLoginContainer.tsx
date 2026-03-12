import FormikView from "../views/Formik/index";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { saveLoginData } from "../features/login-redux/formikSlice";
import { LoginData } from "../features/login-redux/formikSlice";

const FormikLoginContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (values: LoginData) => {
    dispatch(saveLoginData(values));
    navigate("/login-formik/success", { state: { fromFormikLogin: true } });
  };

  return <FormikView onLogin={handleLogin} />;
};

export default FormikLoginContainer;
