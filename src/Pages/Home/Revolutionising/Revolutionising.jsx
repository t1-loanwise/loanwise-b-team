import RevolutionisingImg from "./RevolutionisingImg";
import RevolutionisingTxt from "./RevolutionisingTxt";
HEAD
import styles from "../LoanwiseImgText/LwImgTxt.module.css";


const Revolutionising = () => {
  return (
    <section className={styles.Revolutionising}>
      <RevolutionisingTxt />
      <RevolutionisingImg />
    </section>
  );
};

export default Revolutionising;
