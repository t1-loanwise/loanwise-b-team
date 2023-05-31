import styles from "../Header/Header.module.css";

const FilledBtn = ({ title, link }) => {
  return (
    <button className={styles.filledBtn}>
      <a href={link ? link : "#"}> {title}</a>
    </button>
  );
};

export default FilledBtn;
