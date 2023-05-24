import styles from "../Header/Header.module.css";

const TransparentBtn = ({ title, icon }) => {
  return (
    <div>
      <a className={styles.transparentBtn}>
        <span>{title}</span>
        {icon && <img src={icon} alt="Icon" />}
      </a>
    </div>
  );
};

export default TransparentBtn;
