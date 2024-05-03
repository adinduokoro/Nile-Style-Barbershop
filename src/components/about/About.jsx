import React from "react";
import styles from "./About.module.css";
import { PageTitle } from "../index";
import rightArrow from "../../assets/arrow.svg"

const About = () => {
  return (
    <section className={styles.about}>
      <div className="wrapper">
        <PageTitle
          number={"1"}
          title={"About"}
          subTitle={"Redefining Authenticity"}
        />
        <p className={styles["about-content"]}>
          Welcome to Nile Style, where timeless tradition meets contemporary
          charm right at the heart of our vibrant community. Since our
          establishment in 1998, Nile Style Barbershop has proudly stood as a
          cornerstone, seamlessly blending the classic essence of old-school
          barbering with a touch of modern sophistication.<br/><br/> Step into our
          welcoming space and immerse yourself in the cozy embrace of our
          family-friendly ambiance, complemented by the utmost professionalism
          from our skilled team. Regardless of age or gender, from men to women
          and children, we are committed to surpassing your expectations and
          leaving you with a memorable experience.<br/><br/> Here at Nile Style, it's
          about more than just a haircut; it's about forging meaningful
          connections and crafting unforgettable moments. We invite you to join
          our extended family and embark on a journey of excellence, where each
          visit embodies our tradition of exceptional service, one haircut at a
          time.
        </p>
        <button className={styles.button}>
          <img className={styles["right-arrow"]} src={rightArrow} alt="" />
          Read More
        </button>
      </div>
    </section>
  );
};

export default About;
