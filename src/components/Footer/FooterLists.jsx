import styles from "./Footer.module.css";
import LinkedIn from "../../Images/socials/linkedIn.svg";
import Instagram from "../../Images/socials/instagram.svg";
import Twitter from "../../Images/socials/twitter.svg";

const FooterLists = () => {
  const footerItems = [
    {
      title: "Resources",
      items: [
        { name: "Blog", link: "/blog" },
        { name: "FAQ", link: "#faq" },
        { name: "Help Center", link: "/help" },
        { name: "Contact Us", link: "/contact" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", link: "/aboutUs" },
        { name: "Careers", link: "/careers" },
        { name: "Privacy Policy", link: "/privacy" },
        { name: "Terms of Use", link: "/terms" },
      ],
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
          <li key={listItemIndex}>
            {typeof listItem === "object" ? (
              <a href={listItem.link}>{listItem.name}</a>
            ) : (
              listItem
            )}
          </li>
        ))}
      </div>
    </ul>
  ));

  return <div className={styles.footerLists}>{footerItem}</div>;
};

export default FooterLists;
