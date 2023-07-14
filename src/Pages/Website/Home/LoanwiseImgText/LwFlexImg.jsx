import styles from "../styles.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LoanDefaultersImg = ({ image }) => {
  return (
    <div className={styles.lwFlexImg}>
      <LazyLoadImage src={image} alt="" />
    </div>
  );
};

export default LoanDefaultersImg;
