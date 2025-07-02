import { Marker, Popup } from 'react-leaflet';

const PosMarker = ({ coords, descripcion, venta, zona }) => (
  <Marker position={coords}>
    <Popup>
      <div>
        <strong>{descripcion}</strong><br />
        Venta: ${venta}<br />
        Zona: {zona}
      </div>
    </Popup>
  </Marker>
);

export default PosMarker;
