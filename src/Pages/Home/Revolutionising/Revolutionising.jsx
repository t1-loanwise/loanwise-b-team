import RevolutionisingImg from "./RevolutionisingImg";
import RevolutionisingTxt from "./RevolutionisingTxt";
import styles from "../LoanwiseImgText/LwImgTxt.module.css";

const Revolutionising = () => {
  return (
    <div className={styles.Revolutionising}>
      <RevolutionisingTxt />
      <RevolutionisingImg />
    </div>
  );
};

export default Revolutionising;
