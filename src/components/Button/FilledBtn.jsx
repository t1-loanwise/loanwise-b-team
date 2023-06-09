import styles from "../Header/Header.module.css";

const FilledBtn = ({ title, link, type, onClick, ...props }) => {
  return (
    <button
      type={type ? type : "button"}
      className={styles.filledBtn}
      onClick={onClick}
      props={props}
    >
      {type === "submit" ? title : <a href={link ? link : "#"}>{title}</a>}
    </button>
  );
};

export default FilledBtn;
