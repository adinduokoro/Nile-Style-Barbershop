import React from "react";
import styles from "./Navigation.module.css";
import { navLinks } from "./data";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles["nav-content"]}>
        {navLinks.map((link, index) => {
          return (
            <li className={styles.link} key={index}>
              <a href={link.path}>{link.name}</a>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
