import styles from "../Header/Header.module.css";

const FilledBtn = ({ title, link, type }) => {
  return (
    <button type={type ? type : "button"} className={styles.filledBtn}>
      <a href={link ? link : "#"}>{title}</a>
    </button>
  );
};

export default FilledBtn;
