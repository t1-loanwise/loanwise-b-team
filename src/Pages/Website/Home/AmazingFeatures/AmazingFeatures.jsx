import React from "react";
import { features } from "./Features.js";
import Arrow from "../../../../Images/Arrow.svg";
import styles from "../styles.module.css";
import AmazingFeaturesTxt from "./AmazingFeaturesTxt.jsx";

const AmazingFeatures = () => {
  const Feature = features.map((item) => (
    <div className={styles.feature} key={item.id}>
      <div className={styles.featureImg}>
        <img src={item.image} alt="User" />
      </div>
      <p>{item.text}</p>
    </div>
  ));

  return (
    <section className={styles.featureWrapper}>
      <AmazingFeaturesTxt />
      <div className={styles.featureContainer}>
        <div className={styles.bigFeature}>
          <h3>Check out our amazing features.</h3>
          <div className={styles.bigFeatureImg}>
            <img src={Arrow} alt="" />
          </div>
          <div className={styles.features}>{Feature}</div>
        </div>
        <div className={styles.features}>{Feature}</div>
      </div>
    </section>
  );
};

export default AmazingFeatures;
