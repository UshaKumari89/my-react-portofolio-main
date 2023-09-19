

import { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 50; // adjust the number as needed
  //     if (isScrolled !== scrolled) {
  //       setScrolled(!scrolled);
  //     }
  //   };

  //   document.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     // cleanup
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolled]);


  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
          <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
