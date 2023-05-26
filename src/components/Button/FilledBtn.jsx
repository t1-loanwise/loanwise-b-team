import styles from "../Header/Header.module.css";

const FilledBtn = ({ title, size, link }) => {
  return (
    <button style={{ width: size }} className={styles.filledBtn}>
      <a href={link ? link : "#"}>{title}</a>
    </button>
  );
};

export default FilledBtn;
