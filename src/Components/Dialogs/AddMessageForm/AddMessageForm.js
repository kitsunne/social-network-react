import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./AddMessageForm.module.css";

const AddMessageForm = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values);
  };

  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <div className={styles.formContainer}>
            <div className={styles.textarea}>
              <Field
                name="newMessageBody"
                as="textarea"
                placeholder="Write smth..."
              />
            </div>
            <button className={styles.button} type="submit">
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddMessageForm;
