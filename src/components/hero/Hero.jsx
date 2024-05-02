import React from "react";
import styles from "./Hero.module.css";
import { Header, Navigation } from "../../components";

const Hero = () => {
  return (
    <section className={styles.box}>
      <Navigation />
      <Header />
    </section>
  );
};

export default Hero;
