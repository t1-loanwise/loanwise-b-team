import styles from "./Footer.module.css";
import LinkedIn from "../../Images/socials/linkedIn.svg";
import Instagram from "../../Images/socials/instagram.svg";
import Twitter from "../../Images/socials/twitter.svg";

const FooterLists = () => {
  const footerItems = [
    {
      title: "Resources",
      items: ["Blog", "FAQ", "Help Center", "Contact Us"],
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Privacy Policy", "Terms of Use"],
    },
    {
      title: "Contact",
      items: [
        "loanwise@gmail.com",
        "+123-457-789-00\n+123-457-789-00",
        "123, Numberone Avenue,\nVI, Lagos.",
        [
          <img key="linkedin" src={LinkedIn} alt="LinkedIn" />,
          <img key="instagram" src={Instagram} alt="Instagram" />,
          <img key="twitter" src={Twitter} alt="Twitter" />,
        ],
      ],
    },
  ];

  const footerItem = footerItems.map((item, index) => (
    <ul key={index}>
      <h4>{item.title}</h4>
      <div className={styles.lists}>
        {item.items.map((listItem, listItemIndex) => (
          <li key={listItemIndex}>{listItem}</li>
        ))}
      </div>
    </ul>
  ));

  return <div className={styles.footerLists}>{footerItem}</div>;
};

export default FooterLists;
