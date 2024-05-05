import React from "react";
import styles from "./Contact.module.css";
import { Button, PageTitle } from "../../components";
import { hours } from "./data";
import facebookIcon from "../../assets/facebook-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";

const Contact = () => {
  return (
    <section className={`${styles.contact} bg-setting`}>
      <div className="wrapper">
        <PageTitle
          number={"5"}
          title={"Contact"}
          subTitle={"Visit Us Today!"}
        />
        <div className={styles["contact-container"]}>
          <div className={styles["hours-of-operation"]}>
            <h2 className={styles.title}>HOURS</h2>
            <div className={styles["hours-container"]}>
              {hours.map((hour, index) => {
                return (
                  <h2 className={styles.hour} key={index}>
                    <div className={styles.weekday}>{hour.weekday} </div>

                    <div className={styles.nickname}>{hour.nickname}</div>

                    <span className={styles.time}>{hour.hour}</span>
                  </h2>
                );
              })}
            </div>
            <h4 className={styles.disclaimer}>
              Last customer admitted 30 minutes prior to closing
            </h4>
          </div>
          <div className={styles["operation-info"]}>
            <div className={styles.phone}>
              <h2 className={styles.cta}>Get in Touch</h2>
              <h2 className={styles.number}>(410) 624-5899</h2>
            </div>
            <div className={styles.address}>
              <h2 className={styles.cta}>Location</h2>
              <h2 className={styles["business-name"]}>Nile Style Barbershop</h2>
              <h2 className={styles.street}>6622 Hardford Rd</h2>
              <h2 className={styles.zipcode}>Baltimore MD, 21224</h2>
            </div>
            <div className={styles.social}>
              <h2 className={styles.cta}>Follow Us</h2>
              <div className={styles.icons}>
                <a href="">
                  <img src={facebookIcon} alt="" />
                </a>
                <a href="">
                  <img src={instagramIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
