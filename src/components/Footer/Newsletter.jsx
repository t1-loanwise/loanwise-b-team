import TransparentBtn from "../Button/TransparentBtn";
import FilledBtn from "../Button/FilledBtn";
import styles from "./Footer.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <p>Join Our Newsletter to be up-to-date with our latest news. </p>
      <div className={styles.newsletterBtns}>
        <TransparentBtn title={"Subscribe"} />
        <FilledBtn title={"Get A Membership"} />
      </div>
    </div>
  );
};

export default Newsletter;
