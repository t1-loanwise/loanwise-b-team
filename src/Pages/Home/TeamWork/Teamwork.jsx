import styles from "../LoanwiseImgText/LwImgTxt.module.css";
import TeamworkImg from "./TeamworkImg";
import TeamworkText from "./TeamworkText";

const Teamwork = () => {
  return (
    <div className={styles.teamwork}>
      <TeamworkImg />
      <TeamworkText />
    </div>
  );
};

export default Teamwork;
