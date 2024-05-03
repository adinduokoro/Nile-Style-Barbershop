import React from "react";
import styles from "./Services.module.css";
import { Button, PageTitle } from "../../components";
import { services } from "./data";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className="wrapper">
        <PageTitle
          number={"2"}
          title={"Services"}
          subTitle={"Producing the Best Work"}
        />
        <div className={styles["services-content"]}>
          {services.map((service, index) => {
            return <div className={styles.service} key={index}>
              
              <p>{service.description}</p>
            </div>;
          })}
        </div>
        <Button text={"All Services"} />
      </div>
    </section>
  );
};

export default Services;
