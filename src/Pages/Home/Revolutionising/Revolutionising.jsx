import RevolutionisingImg from "./RevolutionisingImg";
import RevolutionisingTxt from "./RevolutionisingTxt";
import styles from "../LoanwiseImgTxt/LwImgTxt.module.css";

const Revolutionising = () => {
  return (
    <div className={styles.Revolutionising}>
      <RevolutionisingTxt />
      <RevolutionisingImg />
    </div>
  );
};

export default Revolutionising;
