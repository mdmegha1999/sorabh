import React from 'react';

const MapComponent = () => {
  const initializeMap = () => {
    // Set the coordinates for the location in Hyderabad
    const hyderabad = { lat: 17.3850, lng: 78.4867 };

    // Create a new map centered at the Hyderabad location
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: hyderabad
    });

    // Create a marker for the Hyderabad location
    const marker = new window.google.maps.Marker({
      position: hyderabad,
      map: map
    });

    // Add a click event listener to the marker
    marker.addListener('click', () => {
      window.open('https://www.google.com/maps?q=Hyderabad');
    });
  };

  window.onload = initializeMap;

  return (
    <div id="map" style={{ height: '400px', width: '100%' }}>kjksj,m</div>
  );
};

export default MapComponent;
