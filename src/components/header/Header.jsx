import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/nile-style-logo.svg";
import logoAnimation from "../../assets/since-1998.svg";
import pageScroller from "../../assets/page-scroller.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <img
        className={styles["logo-animation"]}
        src={logoAnimation}
        alt="since-1998"
      />
      <a href="">
        <button className={styles.button}>
          Book an Appointment
        </button>
      </a>
      <img
        className={styles["page-scroller"]}
        src={pageScroller}
        alt="page-scroller"
      />
    </div>
  );
};

export default Header;
