import React from 'react';
import { Container, Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const NavigationComponent = () => {
    const position = [41.732317, 44.779525]; // Замените на координаты вашего магазина

    return (
        <Container sx={{ mt: '100px', mb: '100px' }}>
            <Box>
                <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>Местонахождение магазина</Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </Container>
    );
}

export default NavigationComponent;
