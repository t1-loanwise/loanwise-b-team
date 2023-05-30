import styles from "../Header/Header.module.css";

const FilledBtn = ({ title, link, size }) => {
  return (
    <button className={styles.filledBtn} size={size}>
      <a href={link ? link : "#"}>{title}</a>
    </button>
  );
};

export default FilledBtn;
