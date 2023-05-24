import React from 'react'
import HeroImg from "./HeroImg";
import HeroTxt from "./HeroTxt";
import styles from "../LoanwiseImgText/LwImgTxt.module.css";


const Hero = () => {
  return (
    <section className={styles.hero}>
      <HeroTxt />
      <HeroImg />
    </section>
  )
}

export default Hero