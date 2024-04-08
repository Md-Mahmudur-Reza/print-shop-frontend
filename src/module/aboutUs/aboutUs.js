import React from "react";
import styles from "./aboutUs.module.css";
import Image from "next/image";

import about from "../../../public/image/printing.jpg";

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h1 className={styles.Title}>About Us</h1>
      <div className={styles.descriptionSection}>
        <div className={styles.descriptionText}>
          {" "}
          Welcome to Brown Man Printing Shop, where convenience meets quality
          just steps away from the University of Windsor! Whether you need
          printing, photocopying, scanning, or professional CV services,
          we&apos;ve got you covered at unbeatable prices. Our printing rates
          are as follows: Black and white print: 15 cents per page or 25 cents
          for double-sided. Color print: 35 cents per page or 65 cents for
          double-sided. Scanning services are available at just 5 cents per
          page, and it&apos;s complimentary if you opt for any other service.
          Need copies made? We offer photocopying at 15 cents per page or 25
          cents for double-sided. In addition to our printing and copying
          services, we provide professional CV writing for only $5. Plus, when
          you choose our CV writing service, we&apos;ll print up to 6 pages for
          free! Drop by today and let our expert team help you with all your
          document needs. Experience the difference at Brown Man Printing!
        </div>
        <div className={styles.descriptionImage}>
          <Image className={styles.image} src={about} alt="about" />
        </div>
      </div>
    </div>
  );
}
