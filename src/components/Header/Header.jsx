import React, { useState } from 'react'
import styles from "./Header.module.css";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Logo from '../../Images/logo.svg';
import FilledBtn from '../../components/Button/FilledBtn';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("/");

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/AboutUs" },
    { name: "Pricing", link: "/pricing" },
    { name: "Blog", link: "/blog" }
  ];

  const onSelectItem = (link) => {
    setSelectedItem(link);
  };

  const navItem = navItems.map((item, index) => (
    <NavLink
      id={styles.li}
      to={item.link}
      key={index}
      onClick={(e) => {
        onSelectItem(item.link);
        e.preventDefault();
        navigate(item.link);
      }}
      className={selectedItem === item.link ? styles.active : ''}
    >
      {item.name}
    </NavLink>
  ));

  const [menu, setMenu] = useState(true);

  const menuToggle = () => {
    setMenu(!menu);
  };

  const renderMenuIcon = () => {
    const IconComponent = menu ? HiMenu : CgClose;
    return <IconComponent size={30} className={styles.menuIcon} />;
  };


  return (
    <div>
      <header>
        <div className={styles.leftHeader}>
          <img src={Logo} alt="" className={styles.logo} />
          <nav>
            <ul className={styles.navlist}>{navItem}</ul>
          </nav>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.mdSm}>
            <button className={styles.menuBtn} onClick={menuToggle}>
              {renderMenuIcon()}
            </button>
            <ul className={!menu ? styles.menuList : styles.display}>
              {navItem}
              <a className={styles.register} href="/register">
                Register
              </a>
              <FilledBtn title={"Login"} />
            </ul>
          </div>
          <div className={styles.registerLogin}>
            <a href="/register">Register</a>
            <FilledBtn title={"Login"} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header