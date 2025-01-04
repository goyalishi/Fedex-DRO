import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = ({coordinates}) => {
  return (
    <div className="w-full h-full bg-gray-200">
      <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyCRVRc_FX856cAwbBLxwaeGp6PNM-ZeE2w' }}
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
