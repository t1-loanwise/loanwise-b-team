import styles from "../styles.module.css";
import TickCircle from "../../../../Images/tickcircle.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LoanDefaultersText = ({ listItems, heading, paragraph }) => {
  let listItem = null;

  if (listItems && listItems.length > 0) {
    listItem = listItems.map((item, index) => (
      <li key={index}>
        <LazyLoadImage src={TickCircle} alt="Tick Circle" />
        <span>{item}</span>
      </li>
    ));
  }

  return (
    <div className={styles.lwFlexText}>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      {listItem && <ul>{listItem}</ul>}
    </div>
  );
};

export default LoanDefaultersText;
