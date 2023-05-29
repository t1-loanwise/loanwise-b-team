import FilledBtn from "../../../components/Button/FilledBtn";
import LwFlexText from "../LoanwiseImgText/LwFlexText";
import styles from "../styles.module.css";

const heading = "Revolutionising lending with predictive analytics.";
const paragraph =
  "At Loan Default Prediction, we're passionate about revolutionising the lending industry by providing innovative technology that helps financial institutions make more informed lending decisions and minimise the risk of loan defaults.";

const RevolutionisingTxt = () => {
  return (
    <div className={styles.revText}>
      <LwFlexText paragraph={paragraph} heading={heading} />
      <FilledBtn title={"Get Started"} link={"/register"} />
    </div>
  );
};

export default RevolutionisingTxt;
