import HeroText from "../LoanwiseImgText/LwFlexText";
import FilledBtn from "../../../components/Button/FilledBtn";
import TransparentBtn from "../../../components/Button/TransparentBtn";
import styles from '../LoanwiseImgText/styles.module.css'
import Icon from '../../../Images/arrow-right.svg'
import History from '../../../Images/History.svg'

const heading = 'Transform lending with accurate risk prediction'

const paragraph = 'Our app accurately predicts default risk for borrowers, helping financial institutions make informed lending decisions and minimize the impact of defaults'

const HeroTxt = () => {
  return <div className={styles.heroText}>
    <div className={styles.history}>
      <img src={History} alt="History" />
      <span>Watch Our History</span>
    </div>
    <HeroText heading={heading} paragraph={paragraph} />
    <div className={styles.heroBtns}>
      <FilledBtn title={'Get Started'} />
      <TransparentBtn title={'Learn More'} icon={Icon} />
    </div>
  </div>;
};

export default HeroTxt;
