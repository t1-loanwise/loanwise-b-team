 HEAD
import styles from "../LoanwiseImgText/LwImgTxt.module.css";


import TeamworkImage from "../LoanwiseImgText/LwFlexImg";
import GirlFrame from "../../../Images/girlFrame.svg";

const TeamworkImg = () => {
  return (
    <div className={styles.teamworkImg}>
      <TeamworkImage image={GirlFrame} />
    </div>
  );
};

export default TeamworkImg;
