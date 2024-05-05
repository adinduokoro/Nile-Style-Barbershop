import React from "react";
import styles from "./Gallery.module.css";
import { Button, PageTitle } from "../../components";
import {images} from "./data"

const Gallery = () => {
  return (
    <section className={`${styles.gallery} bg-setting`}>
      <div className="wrapper">
        <PageTitle
          number={"4"}
          title={"Gallery"}
          subTitle={"That Won't Break the Bank"}
        />
        <div className={styles["gallery-content"]}>
          {images.map((image, index) => {
            return(
              <div className={styles["image-container"]} key={index}>
                <img src={image} alt="" />
              </div>
            )
          })}
        </div>
        <Button text={"See More"} />
      </div>
    </section>
  );
};

export default Gallery;
