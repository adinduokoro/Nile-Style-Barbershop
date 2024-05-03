import React from "react";
import styles from "./Gallery.module.css";
import { Button, PageTitle } from "../../components";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className="wrapper">
        <PageTitle
          number={"4"}
          title={"Gallery"}
          subTitle={"That Won't Break the Bank"}
        />
        <div className={styles["gallery-content"]}>

        </div>
        <Button text={"See More"} />

      </div>
    </section>
  );
};

export default Gallery;
