import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'


const icon = L.icon({ iconUrl: "/marker-icon.png", iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40]});

const Map = () => {
    return (
        <MapContainer center={[43.144928139962815, 20.51435888575006]} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "400px", marginTop: '50px' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={[43.144928139962815, 20.51435888575006]} icon={icon}>
                    <Popup>
                    </Popup>
                </Marker>
        </MapContainer>
    )
}

export default Map
