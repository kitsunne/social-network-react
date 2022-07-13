import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";
import userAlternative from "../../../assets/images/userAlternative.jpeg";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <img
        className={styles.dialogAvatar}
        src={userAlternative}
        alt="dialog-avatar"
      />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
