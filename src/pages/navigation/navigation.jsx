import React from 'react';
import { Container, Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';

import customIconUrl from '../../assets/location.png';

const NavigationComponent = () => {
    const position = [41.732317, 44.779525];

    const customIcon = new L.Icon({
        iconUrl: customIconUrl,
        iconSize: [40, 40], 
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
        shadowUrl: null,
        shadowSize: null,
    });

    return (
        <Container sx={{ mt: '100px', mb: '100px' }}>
            <Box>
                <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={customIcon}>
                        <Popup>Местонахождение магазина</Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </Container>
    );
}

export default NavigationComponent;
