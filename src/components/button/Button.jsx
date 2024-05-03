import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <a href="">
      <button className={styles.button}>
        {text}
      </button>
    </a>
  );
};

export default Button;
