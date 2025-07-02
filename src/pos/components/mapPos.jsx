
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PosMarker from './posMarker';

//Marcadores del Mapa (iconos)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

const MapPos = ({ puntos }) => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MapContainer center={[23.6345, -102.5528]} zoom={5} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {puntos.map((punto) => (
          <PosMarker
            key={punto._id}
            coords={[punto.latitud, punto.longitud]}
            descripcion={punto.descripcion}
            venta={punto.venta}
            zona={punto.zona}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPos;
