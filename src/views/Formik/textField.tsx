import React, { CSSProperties } from "react";
import { useField } from "formik";
import * as styles from "./styles";

type TextFieldStyle = {
  inputContainer: CSSProperties;
  errorMassage: CSSProperties;
};

export const TextField = (props: {
  label: string;
  name: string;
  type: string;
  style: TextFieldStyle;
}) => {
  const [field, meta] = useField(props.name); // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  return (
    <div style={styles.inputContainer}>
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} type={props.type} {...field} />
      {meta.touched && meta.error ? <div style={styles.errorMassage}>{meta.error}</div> : null}
    </div>
  );
};
