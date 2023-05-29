import styles from "../Header/Header.module.css";

const TransparentBtn = ({ title, icon }) => {
  return (
    <div>
      <p className={styles.transparentBtn}>
        <span>{title}</span>
        {icon && <img src={icon} alt="Icon" />}
      </p>
    </div>
  );
};

export default TransparentBtn;
