"use client";
import React from "react";

import MapContainer from "./mapContainer";
import styles from "./location.module.css";

export default function Location() {
  const location = { lat: 42.320127, lng: -83.031074 };

  return (
    <div className={styles.locationSection} id="location">
      <h1 className={styles.locationTitle}>Location</h1>
      <div className={styles.mapSection}>
        <MapContainer location={location} />
      </div>
    </div>
  );
}
