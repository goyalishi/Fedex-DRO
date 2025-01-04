import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = ({coordinates}) => {
  return (
    <div className="w-full h-full bg-gray-200">
      <GoogleMapReact
                bootstrapURLKeys={{ key:import.meta.env.VITE_GOOGLE_MAPS_API_KEY  }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true }} 
                onChange={() => {}}
                onChildClick={() => {}
              }    
                >

                </GoogleMapReact>
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-700">Map will be displayed here</p>
      </div>
    </div>
  );
};

export default Map;
