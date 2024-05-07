import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { navLinks } from "./data";
import { Icon } from "@iconify/react";

const Navigation = () => {
  const [toggle, setToggle] = useState(false)

  const openMenu = () => {
    setToggle(true)
    console.log(toggle)
  } 

  const closeMenu = () => {
    setToggle(false)
    
  } 

  return (
    <div className={styles.navigation}>
      <ul className={toggle ? `${styles["nav-content"]} ${styles["active-menu"]}` : `${styles["nav-content"]}`}>
        {navLinks.map((link, index) => {
          return (
            <li className={styles.link} key={index}>
              <a href={link.path}>{link.name}</a>
              <hr />
            </li>
          );
        })}
        <Icon className={styles["menu-to-close-alt-transition"]} icon="line-md:menu-to-close-alt-transition" onClick={closeMenu}/>
      </ul>
        <Icon className={styles["close-to-menu-alt-transition"]} icon="line-md:close-to-menu-alt-transition" onClick={openMenu}/>
    </div>
  );
};

export default Navigation;
