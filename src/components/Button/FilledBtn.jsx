import styles from "../Header/Header.module.css";

const FilledBtn = ({ title }) => {
  return <button className={styles.filledBtn}>{title}</button>;
};

export default FilledBtn;
