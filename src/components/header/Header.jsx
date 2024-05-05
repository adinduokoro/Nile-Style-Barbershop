import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/nile-style-logo.svg";
import logoAnimation from "../../assets/since-1998.svg";
import pageScroller from "../../assets/page-scroller.svg";
import { Button } from "../../components";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <img
        className={styles["logo-animation"]}
        src={logoAnimation}
        alt="since-1998"
      />
      <div className={styles["button-container"]}>
        <Button text={"Book an Appointment"} />
      </div>
      <div className={styles["scroller-container"]}>
        <img
          className={styles["page-scroller"]}
          src={pageScroller}
          alt="page-scroller"
        />
      </div>
    </div>
  );
};

export default Header;
