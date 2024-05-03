import React from "react";
import styles from "./Button.module.css";
import rightArrow from "../../assets/arrow.svg";

const Button = ({ text }) => {
  return (
    <a href="">
      <button className={styles.button}>
        <img className={styles["right-arrow"]} src={rightArrow} alt="" />
        {text}
      </button>
    </a>
  );
};

export default Button;
