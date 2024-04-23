import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const MapContainer = ({ location, destination }) => {
  const [directions, setDirections] = useState(null);
  const [directionsUrl, setDirectionsUrl] = useState("");

  const mapStyles = {
    height: "400px",
    width: "100%",
    borderRadius: "5px",
    border: "solid  chocolate 2px",
  };

  useEffect(() => {
    const loadDirections = () => {
      if (!window.google || !window.google.maps) return;

      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: location,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
            const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${location.lat},${location.lng}&destination=${destination.lat},${destination.lng}`;
            setDirectionsUrl(directionsUrl);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    };

    loadDirections();
  }, [location, destination]);

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCLRlZFHfYyUU5Ka6kY1bPsnO-tS8ttEY8">
        <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={location}>
          <Marker position={location} />
          {directions && <DirectionsRenderer directions={directions} />}
          {directionsUrl && (
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
