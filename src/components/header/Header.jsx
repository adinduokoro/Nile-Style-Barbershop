import React from 'react'
import styles from "./Header.module.css"
import logo from "../../assets/nile-style-logo.svg"

const Header = () => {
  return (
    <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}

export default Header