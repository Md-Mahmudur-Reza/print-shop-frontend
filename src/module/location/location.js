"use client";
import React from "react";

import MapContainer from "./mapContainer";
import styles from "./location.module.css";

export default function Location() {
  const location = { lat: 42.30461120605469, lng: -83.0713119506836 };

  return (
    <div className={styles.locationSection}>
      <h1 className={styles.locationTitle}>Location</h1>
      <div className={styles.mapSection}>
        <MapContainer location={location} />
      </div>
    </div>
  );
}
