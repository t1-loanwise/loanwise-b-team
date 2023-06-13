import styles from "../Header/Header.module.css";

const TransparentBtn = ({ title, icon, icon2, link, onClick }) => {
  return (
    <button
      className={styles.transparentBtn}
      onClick={onClick && (() => onClick())}
    >
      <a href={link ? link : "#"}>
        {icon2 && <img src={icon2} alt="Icon2" />}
        <span>{title}</span>
        {icon && <img src={icon} alt="Icon" />}
      </a>
    </button>
  );
};

export default TransparentBtn;
