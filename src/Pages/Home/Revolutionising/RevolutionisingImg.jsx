import styles from "../LoanwiseImgTxt/LwImgTxt.module.css";
import RevolutionisingImage from "../LoanwiseImgTxt/LwFlexImg";
import Revolutionising from "../../assets/images/flexImages/LoanDefaulters/Revolutionising.svg";

const RevolutionisingImg = () => {
  return (
    <div className={styles.revImg}>
      <RevolutionisingImage image={Revolutionising} />
    </div>
  );
};

export default RevolutionisingImg;
