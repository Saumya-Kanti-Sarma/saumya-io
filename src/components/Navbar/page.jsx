"use client"

import Link from "next/link"
import styles from "./styles.module.css"
import { useState } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [image, setImage] = useState("menu");
  const [menuDisplay, setMenuDisplay] = useState("none");
  const [logoColor, setLogoColor] = useState("#ffffff7e");
  const pathName = usePathname();
  function handleToggleMenu() {
    if (image == "menu") {
      setImage("cross");
      setMenuDisplay("");
    }
    else {
      setImage("menu");
      setMenuDisplay("none");
    }
  };
  return (
    <>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.saumyaBtn}
          style={{ color: pathName == "/" ? "#fff" : "#ffffff7e" }}>Saumya Sarma</Link>
        <button className={styles.navMenuBtn} onClick={handleToggleMenu}>
          <img src={`/images/${image || "menu"}.svg`} />
        </button>
        <div className={styles.navLinks}>
          <Link href={"/works"} className={pathName == "/works" ? styles.activeLink : styles.navLinksBtns}>Works</Link>
          <Link href={"/meetSaumya"} className={pathName == "/meetSaumya" ? styles.activeLink : styles.navLinksBtns}>Meet Saumya</Link>
          <Link href={"/blogs"} className={pathName == "/blogs" ? styles.activeLink : styles.navLinksBtns}>Blogs</Link>
          <Link href={"/heros"} className={pathName == "/heros" ? styles.activeLink : styles.navLinksBtns}>Heros</Link>
          <h2 className={styles.saumya}>Saumya Sarma</h2>
        </div>
        <button className={styles.navBtns} >
          <img src={`/images/search.svg`} />
        </button>
      </nav>
      <menu className={styles.navMenu} style={{ display: menuDisplay }}>
        <Link href={"/"} onClick={handleToggleMenu}>Home</Link>
        <Link href={"/works"} onClick={handleToggleMenu}>Works</Link>
        <Link href={"/meetSaumya"} onClick={handleToggleMenu}>Meet Saumya</Link>
        <Link href={"/blogs"} onClick={handleToggleMenu}>Blogs</Link>
        <Link href={"/heros"} onClick={handleToggleMenu}>Heros</Link>
      </menu>
    </>
  )
}

export default Navbar
