import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet'; 
import './Map.css'; 

const Map = () => {
  // Custom marker icon
  const customIcon = new L.DivIcon({
    className: 'custom-icon', // This class will be used for styling
    html: '<div class="custom-marker-icon"></div>', // Add HTML content or icon
    iconSize: [40, 40], // Set the size of the icon
    iconAnchor: [20, 40], // Anchor point of the icon (from where the position will be calculated)
  });

  return (
    <div className="map-cls">
      {/* Leaflet Map */}
      <MapContainer
        center={[51.505, -0.09]} // Set initial center coordinates for the map
        zoom={13} // Set initial zoom level
        style={{ height: '100%', width: '100%', borderRadius: '10px' }} // Style the map container
        zoomControl={false} // Disable zoom controls (optional)
        attributionControl={false} // Disable Leaflet watermark (optional)
      >
        {/* Tile Layer: Adding OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        
        {/* Marker with Custom Icon */}
        <Marker position={[51.50, -0.00]} icon={customIcon}>
          <Popup className='popup-content--wrapper'>
            <div className="popup-content">
              <h3 className='map-title'>McDonald's<br/>
              <span className='span-text map-span'>South London</span>
              </h3>
              
              <p className='map-text'>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
              <p className='map-phone'>Phone number<br/>
              <span className='span-text mobile-no'> +934443-43</span>
              </p>
              
              <p className='map-phone'>Website<br/><a className="span-link" href="http://mcdonalds.uk/" target="_blank" rel="noopener noreferrer">http://mcdonalds.uk/</a></p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
