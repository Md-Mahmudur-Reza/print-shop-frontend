import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({ location }) => {
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
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
