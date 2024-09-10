"use client";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const mapContainerStyle = {
    width: '100%',
    height: '500px',
};





export default function Map({ mines }) {
    const [selectedPlant, setSelectedPlant] = useState(null);
    const center = { lat: mines.Latitude, lng: mines.Longitude };
    const [zoom, setZoom] = useState(6); // Start with zoom level 6

    useEffect(() => {
        let zoomTimeout;
        if (zoom < 10) { // Target zoom level is 10
            zoomTimeout = setTimeout(() => {
                setZoom((prevZoom) => prevZoom + 1); // Increase zoom by 1 every second
            }, 100); // Adjust this delay (ms) to control animation speed
        }
        return () => clearTimeout(zoomTimeout);
    }, [zoom]);

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={zoom}
            >

                <Marker
                    key={mines.id}
                    position={{ lat: mines.Latitude, lng: mines.Longitude }}
                    onClick={() => setSelectedPlant(mines)}
                />


                {selectedPlant && (
                    <InfoWindow
                        position={{ lat: selectedPlant.Latitude, lng: selectedPlant.Longitude }}
                        onCloseClick={() => setSelectedPlant(null)}
                    >
                        <div className="text-black">
                            <h2 className="font-bold text-xl">{selectedPlant.Mine_Name}</h2>
                            <p>Type: {selectedPlant.Mine_Type}</p>
                            <p>Emissions: {selectedPlant.CO2_Emissions} tons</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
}
