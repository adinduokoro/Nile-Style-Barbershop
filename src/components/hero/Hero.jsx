import React from "react";
import styles from "./Hero.module.css";
import { Navigation } from "../../components";

const Hero = () => {
  return (
    <section className={styles.box}>
      <Navigation />
      {/* Hero */}
    </section>
  );
};

export default Hero;
