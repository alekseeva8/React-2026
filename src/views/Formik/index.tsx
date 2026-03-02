import React, { CSSProperties } from "react";
import { Formik, Form, useField } from "formik";
import * as styles from "./styles";
import * as functions from "../../shared/functions/index";
import { LoginData } from "../../features/login-redux/formikSlice";
import * as constants from "../../shared/constants/index";


type FormikLoginProps = {
  onLogin: (values: LoginData) => void;
};

type TextFieldStyle = {
  inputContainer: CSSProperties;
  errorMassage: CSSProperties;
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

const TextField = (props: { label: string; name: string; type: string; style: TextFieldStyle }) => {
  const [field, meta] = useField(props.name); // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  return (
    <div style={styles.inputContainer}>
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} type={props.type} {...field} />
      {meta.touched && meta.error ? <div style={styles.errorMassage}>{meta.error}</div> : null}
    </div>
  );
};

const Description = (props: { label: string; name: string; type: string }) => {
  const [field] = useField(props);
  return (
    <div>
      <p>
        {props.label}: {field.value}
      </p>
    </div>
  );
};
