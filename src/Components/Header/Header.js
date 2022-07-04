import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { VscAccount } from "react-icons/vsc";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://besocial.thememasters.club/wp-content/uploads/2017/03/logo.png"
        alt="logo"
      ></img>
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div className={styles.accountInfo}>
            <VscAccount className={styles.accountIcon} />
            {props.login}
          </div>
        ) : (
          <NavLink className={styles.login} to={"./login"}>
            Log in
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
