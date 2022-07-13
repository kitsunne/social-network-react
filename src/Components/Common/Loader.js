import React from "react";
import loader from "../../assets/images/loader3.gif";
import styles from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
