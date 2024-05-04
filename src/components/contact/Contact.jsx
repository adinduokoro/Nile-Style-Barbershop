import React from "react";
import styles from "./Contact.module.css";
import { Button, PageTitle } from "../../components";
import { hours } from "./data";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="wrapper">
        <PageTitle
          number={"5"}
          title={"Contact"}
          subTitle={"Visit Us Today!"}
        />
        <div className={styles["contact-content"]}>
          <div className={styles["hours-of-operation"]}>
            <h2 className={styles.title}>HOURS</h2>
            <div className={styles["hours-container"]}>
              {hours.map((hour, index) => {
                return (
                  <h2 className={styles.hour} key={index}>
                    {hour.weekday} <span>{hour.hour}</span>
                  </h2>
                );
              })}
            </div>
            <h4 className={styles.disclaimer}>
              Last customer admitted 30 minutes prior to closing
            </h4>
          </div>

          {/* contact */}
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
