import React from "react";
import Image from "next/image";

import logo from "../../../public/image/logoBrown.png";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section1}>
        {/* <div> */}
        <Image src={logo} alt="logo" className={styles.logo} />
        <div className={styles.aboutText}>
          Welcome to <span className={styles.brown}>Brown Man Printing</span>{" "}
          Shop, where convenience meets quality just steps away from the
          University of Windsor! Whether you need printing, photocopying,
          scanning, or professional CV writing services, we have got you covered
          at unbeatable prices.
        </div>
        {/* </div> */}
      </div>
      <div className={styles.section2}>
        <div className={styles.title}>Hours</div>
        <div className={styles.hoursSection}>
          <div className={styles.day}>Saturday</div>
          <div className={styles.time}>6a.m. - 12a.m.</div>
        </div>
        <div className={styles.hoursSection}>
          <div className={styles.day}>Sunday</div>
          <div className={styles.time}>6a.m. - 12a.m.</div>
        </div>
        <div className={styles.hoursSection}>
          <div className={styles.day}>Monday</div>
          <div className={styles.time}>6a.m. - 12a.m.</div>
        </div>
        <div className={styles.hoursSection}>
          <div className={styles.day}>Tuesday</div>
          <div className={styles.time}>6a.m. - 12a.m.</div>
        </div>
        <div className={styles.hoursSection}>
          <div className={styles.day}>Wednesday</div>
          <div className={styles.time}>6a.m. - 12a.m.</div>
        </div>
        <div className={styles.hoursSection}>
          <div className={styles.day}>Thursday</div>
          <div className={styles.time}>6a.m. - 12a.m.</div>
        </div>
        <div className={styles.hoursSection}>
          <div className={styles.day}>Friday</div>
          <div className={styles.time}>6a.m. - 12p.m. | 3p.m. - 12a.m.</div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.title}>Contact Us</div>
        <div className={styles.text}>
          <span className={styles.bold}>Phone:</span> +1(647)808-3578
        </div>
        <div className={styles.text}>
          <span className={styles.bold}>Email:</span>{" "}
          ayonchowdhury1997@gmail.com
        </div>
        <div className={styles.text}>
          <span className={styles.bold}>Address:</span> 567 Chatham Street East,
          Windsor, ON
        </div>
      </div>
    </footer>
  );
}
