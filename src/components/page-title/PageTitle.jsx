import React from "react";
import styles from "./PageTitle.module.css";

const PageTitle = ({ number, title, subTitle }) => {
  return (
    <div className={styles.PageTitle}>
      <h3 className={styles.number}>/ 0{number}</h3>
      <hr className={styles["horizontal-line-1"]} />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <hr className={styles["horizontal-line-2"]} />
        <h2>{subTitle}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
