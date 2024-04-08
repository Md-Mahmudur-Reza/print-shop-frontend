"use client";
import React from "react";

import styles from "./header.module.css";

export default function Header() {
  const scrollToSection = () => {
    const otherSection = document.getElementById("services");
    otherSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.header}>
      {/* <div className={styles.notice}>Shop is closed today</div> */}
      <div className={styles.innerHeader}>
        <div className={styles.brand}>
          <h1>
            This is
            <div className={styles.brandName}>Brown Man Printing</div>{" "}
          </h1>
          <p>Where Ideas Take Shape, Ink by Ink!</p>
        </div>
        <div className={styles.nav}>
          <a onClick={scrollToSection} className={styles.button}>
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
