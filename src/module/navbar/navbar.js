"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  const url = pathname;
  const router = useRouter();

  const scrollToSection = () => {
    if (pathname == "/") {
      const otherSection = document.getElementById("services");
      otherSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#services");
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLeft}>
          <a className={styles.navbarBrand} href="/">
            X
          </a>
        </div>
        <div className={`${styles.navbarRight} `}>
          <button
            className={styles.navbarToggle}
            onClick={toggleNavbar}
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="navbarLinks"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            className={`${styles.navbarLinks} ${isOpen ? styles.active : ""}`}
            id="navbarLinks"
          >
            <li>
              <a onClick={scrollToSection} className={styles.navbarText}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={styles.navbarText}>
                Location
              </a>
            </li>
            <li>
              <a href="/about" className={styles.navbarText}>
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
