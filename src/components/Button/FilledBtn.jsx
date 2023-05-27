import styles from "../Header/Header.module.css";

const FilledBtn = ({ title,size }) => {
  return <button style={{width:size}} className={styles.filledBtn}>{title}</button>;
};

export default FilledBtn;
