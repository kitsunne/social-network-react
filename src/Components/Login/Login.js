import React from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <p>
          Please, use this data to login to your test account:
          <p>
            <strong>Email: kitsunne.testing@gmail.com</strong>{" "}
          </p>
          <p>
            <strong>Password: KitTestAcc</strong>{" "}
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
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                  <ErrorMessage name="password" component="p" />
                </div>
                <div className={styles.checkbox}>
                  <Field type="checkbox" name="rememberMe" />
                  <label htmlFor="rememberMe">remember me</label>
                </div>
                <button className={styles.button} type="submit">
                  <span>Login</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
