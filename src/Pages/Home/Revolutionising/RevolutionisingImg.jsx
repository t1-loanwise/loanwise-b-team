import styles from "../LoanwiseImgText/LwImgTxt.module.css";
import RevolutionisingImage from "../LoanwiseImgText/LwFlexImg";
import Revolutionising from "../../../Images/Revolutionising.svg";

const RevolutionisingImg = () => {
  return (
    <div className={styles.revImg}>
      <RevolutionisingImage image={Revolutionising} />
    </div>
  );
};

export default RevolutionisingImg;
