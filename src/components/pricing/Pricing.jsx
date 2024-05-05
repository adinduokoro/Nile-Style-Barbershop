import React from "react";
import styles from "./Pricing.module.css";
import { Button, PageTitle } from "../../components";
import { products } from "./data";

const Pricing = () => {
  return (
    <section className={`${styles.pricing} bg-setting`}>
      <div className="wrapper">
        <PageTitle
          number={"3"}
          title={"Pricing"}
          subTitle={"That Won't Break the Bank"}
        />
        <div className={styles["pricing-content"]}>
          {products.map((product, index) => {
            return (
              <div className={styles.product} key={index}>
                <h2 className={styles.title}>
                  ${product.price}&nbsp; • &nbsp;{product.name}{" "}
                </h2>
                <p>{product.desc}</p>
              </div>
            );
          })}
        </div>
        <div className={styles["button-container"]}>
          <Button text={"All Prices"} />
          <h4 className={styles.disclaimer}>Prices may vary with each barber</h4>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
