import styles from "../Header/Header.module.css";

const TransparentBtn = ({ title, icon, link }) => {
  return (
    <button className={styles.transparentBtn}>
      <a href={link ? link : "#"}>
        <span>{title}</span>
        {icon && <img src={icon} alt="Icon" />}
      </a>
    </button>
  );
};

export default TransparentBtn;
