import React from "react";
import forFun from "../../assets/images/forfun.gif";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>In progress ...</h1>
      </div>
      <div>
        <img className={styles.image} src={forFun} alt="for-fun " />
      </div>
    </div>
  );
};

export default Settings;
