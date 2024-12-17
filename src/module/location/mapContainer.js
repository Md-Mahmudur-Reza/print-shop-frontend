"use client";

import React, { useEffect, useRef } from "react";

const MapContainer = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      console.error("Google Maps JavaScript API is not loaded.");
      return;
    }

    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 15,
    });

    // Add a marker
    new window.google.maps.Marker({
      position: location,
      map,
    });
  }, [location]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapContainer;
