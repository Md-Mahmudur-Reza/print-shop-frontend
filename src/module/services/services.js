import React from "react";
import Image from "next/image";

import styles from "./services.module.css";

import printing from "../../../public/image/printing.jpg";
import copying from "../../../public/image/copy.jpg";
import scanning from "../../../public/image/scan.jpg";
import cv from "../../../public/image/CV.jpg";

export default function Services() {
  return (
    <div className={styles.serviceSection} id="services">
      <h1 className={styles.serviceTitle}>Our Services</h1>
      <div className={styles.innerServiceSection}>
        <div className={styles.service}>
          <Image src={printing} alt="printing" className={styles.image} />
          <div className={styles.serviceText}>
            <p className={styles.serviceName}>Printing</p>
            <p className={styles.serviceDescription}>
              Black & White : 20¢/page
            </p>
            <p className={styles.serviceDescription}>Color : 50¢/page</p>
          </div>
        </div>
        <div className={styles.service}>
          <Image src={copying} alt="copying" className={styles.image} />

          <div className={styles.serviceText}>
            <p className={styles.serviceName}>Copying</p>
            <p className={styles.serviceDescription}>
              Black & White : 20¢/page
            </p>
            <p className={styles.serviceDescription}>Color : 50¢/page</p>
          </div>
        </div>
        <div className={styles.service}>
          <Image src={scanning} alt="scanning" className={styles.image} />

          <div className={styles.serviceText}>
            <p className={styles.serviceName}>Scanning</p>
            <p className={styles.serviceDescription}>10¢/page</p>
          </div>
        </div>

        <div className={styles.service}>
          <Image src={cv} alt="cv" className={styles.image} />

          <div className={styles.serviceText}>
            <p className={styles.serviceName}>CV Writing</p>
            <p className={styles.serviceDescription}>$10/cv</p>
          </div>
        </div>
      </div>
    </div>
  );
}
