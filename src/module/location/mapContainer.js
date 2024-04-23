import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const MapContainer = ({ location }) => {
  // const [directions, setDirections] = useState(null);
  // const [directionsUrl, setDirectionsUrl] = useState("");

  const mapStyles = {
    height: "400px",
    width: "100%",
    borderRadius: "5px",
    border: "solid  chocolate 2px",
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCLRlZFHfYyUU5Ka6kY1bPsnO-tS8ttEY8">
        <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={location}>
          <Marker position={location} />
          {/* {directions && <DirectionsRenderer directions={directions} />}
          {directionsUrl && (
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          )} */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
