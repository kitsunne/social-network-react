import React from "react";
import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";

const Login = (props) => (
  <div className={styles.container}>
    <div className={styles.infoContainer}>
      <p>
        Please, use this data to login to your test account:
        <p>
          <strong>Email: free@samuraijs.com</strong>{" "}
        </p>
        <p>
          <strong>Password: free</strong>{" "}
        </p>
      </p>
    </div>

    <div className={styles.formContainer}>
      <div className={styles.header}>
        <h1>Login</h1>
      </div>
      <div className={styles.form}>
        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          validationSchema={loginFormSchema}
          onSubmit={(values) => {
            props.login(values.email, values.password, values.rememberMe);
          }}
        >
          {() => (
            <Form>
              <div className={styles.email}>
                <Field type="email" name="email" placeholder="e-mail" />
                <ErrorMessage name="email" component="p" />
              </div>
              <div className={styles.password}>
                <Field type="password" name="password" placeholder="password" />
                <ErrorMessage name="password" component="p" />
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="rememberMe" />
                <label htmlFor="rememberMe">remember me</label>
              </div>

              <button className={styles.button} type="submit">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
);

export default connect(null, { login })(Login);
