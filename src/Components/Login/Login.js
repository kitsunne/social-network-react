import React from "react";
import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";

const Login = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1>Login</h1>
    </div>
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={loginFormSchema}
      >
        {() => (
          <Form>
            <div className={styles.email}>
              <Field type={"text"} name={"email"} placeholder={"e-mail"} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div className={styles.password}>
              <Field
                type={"password"}
                name={"password"}
                placeholder={"password"}
              />
            </div>
            <ErrorMessage name="password" component="div" />

            <div className={styles.checkbox}>
              <Field type={"checkbox"} name={"rememberMe"} />
              <label htmlFor={"rememberMe"}> remember me </label>
            </div>

            <button className={styles.button} type={"submit"}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default Login;
