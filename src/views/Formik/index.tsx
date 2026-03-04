import React from "react";
import { Formik, Form } from "formik";
import * as styles from "./styles";
import * as functions from "../../shared/functions/index";
import { LoginData } from "../../features/login-redux/formikSlice";
import * as constants from "../../shared/constants/index";
import { TextField } from "./textField";
import { Description } from "./description";

type FormikLoginProps = {
  onLogin: (values: LoginData) => void;
};

const validate = (values: LoginData) => {
  const errors = {} as LoginData;

  if (!values.email) {
    errors.email = "Обязателен";
  } else if (!functions.isValidEmail(values.email)) {
    errors.email = "Некорректный email";
  }

  if (!values.password) {
    errors.password = "Обязателен";
  } else if (!functions.isValidPassword(values.password)) {
    errors.password = "Минимум 6 символов";
  }

  return errors;
};

const FormikView = ({ onLogin }: FormikLoginProps) => {
  const textFieldStyle = {
    inputContainer: styles.inputContainer,
    errorMassage: styles.errorMassage,
  };
  return (
    <>
      <Formik
        initialValues={constants.loginInitialValues}
        validate={validate}
        onSubmit={(values, actions) => {
          onLogin(values);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form style={styles.mainContainer}>
            <TextField label="Ваш email" name="email" type="email" style={textFieldStyle} />
            <TextField label="Пароль" name="password" type="password" style={textFieldStyle} />

            <button type="submit" disabled={isSubmitting}>
              Войти
            </button>

            <Description label="Почта" name="email" type="email" />
            <Description label="Пароль" name="password" type="password" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormikView;
