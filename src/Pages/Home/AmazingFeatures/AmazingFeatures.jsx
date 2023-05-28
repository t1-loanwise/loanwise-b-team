import React from "react";
import { features } from "./Features.js";
import Group from "../../../Images/Group.svg";
import styles from "../styles.module.css";

const AmazingFeatures = () => {
  const Feature = features.map((item) => (
    <div className={styles.feature} key={item.id}>
      <img src={item.image} alt="User" />
      <p>{item.text}</p>
    </div>
  ));

  return (
    <section className={styles.featureWrapper}>
      <div className={styles.bigFeature}>
        <h3>Check out our amazing features.</h3>
        <img src={Group} alt="" />
      </div>
      <div className={styles.features}>{Feature}</div>
    </section>
  );
};

export default AmazingFeatures;
