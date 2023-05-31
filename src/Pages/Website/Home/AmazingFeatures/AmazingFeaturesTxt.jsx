import React from 'react'
import styles from "../styles.module.css";
import Arrow from "../../../../Images/Arrow.svg";


const AmazingFeaturesTxt = () => {
  return (
    <div className={styles.featureHeader}>
      <div className={styles.AmazingText}>
        <h2>Discover how our innovative loan risk assessment tool can benefit your institution.</h2>
        <p>Our goal is to help financial institutions make more informed lending decisions and reduce the risk of loan default. We developed the Loan Default Prediction App to provide an innovative solution that simplifies the loan application process, reduces the time it takes to process loan applications, and improves the accuracy of loan decisions.</p>
      </div>

      <div className={styles.AmazingImg}>
        <img src={Arrow} alt="" />
      </div>
    </div>
  )
}

export default AmazingFeaturesTxt