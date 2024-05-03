import React from "react";
import styles from "./Hero.module.css";
import { Header, Navigation } from "../../components";
import logo from "../../assets/nile-style-logo.svg";
import logoAnimation from "../../assets/since-1998.svg"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Navigation />
      <Header />
    </section>
  );
};

export default Hero;
