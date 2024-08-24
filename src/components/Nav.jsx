import React, { useEffect, useState } from 'react';
import styles from './Nav.module.css';
import useCurrent from './hooks/useCurrent';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');
  const { section } = useCurrent();

  useEffect(() => {
    setActiveNav(section);
  }, [section]);

  const handleClick = (nav) => {
    setActiveNav(nav);
  };

  return (
    <nav className={styles.navigationbar}>
      <ul className={styles.navigation}>
        <li
          className={`${styles.navItems} ${activeNav === 'home' ? styles.active : ''}`}
          onClick={() => handleClick('home')}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={`${styles.navItems} ${activeNav === 'About' ? styles.active : ''}`}
          onClick={() => handleClick('About')}
        >
          <a href="#About">About</a>
        </li>
        <li
          className={`${styles.navItems} ${activeNav === 'Projects' ? styles.active : ''}`}
          onClick={() => handleClick('Projects')}
        >
          <a href="#Projects">Projects</a>
        </li>
        <li
          className={`${styles.navItems} ${activeNav === 'Contact' ? styles.active : ''}`}
          onClick={() => handleClick('Contact')}
        >
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
