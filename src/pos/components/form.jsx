import { useState, useEffect } from 'react';

const Form = ({ onGuardar, initialData }) => {
  const [descripcion, setDescripcion] = useState('');
  const [zona, setZona] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [venta, setVenta] = useState('');
  const zonasDisponibles = ['Zona Norte', 'Zona Centro', 'Zona Sur'];


  useEffect(() => {
    if (initialData) {
      setDescripcion(initialData.descripcion || '');
      setZona(initialData.zona || '');
      setLatitud(initialData.latitud || '');
      setLongitud(initialData.longitud || '');
      setVenta(initialData.venta || '');
    } else {
      setDescripcion('');
      setZona('');
      setLatitud('');
      setLongitud('');
      setVenta('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPoint = {
      descripcion,
      zona,
      latitud: parseFloat(latitud),
      longitud: parseFloat(longitud),
      venta: parseFloat(venta),
    };

    if (initialData && initialData._id) {
      newPoint._id = initialData._id;
    }

    onGuardar(newPoint);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Descripción:</label>
        <input
          type="text"
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Zona:</label>
        <select
          className="form-select"
          value={zona}
          onChange={(e) => setZona(e.target.value)}
        >
          <option value="">Selecciona una zona</option>
          {zonasDisponibles.map((z, i) => (
            <option key={i} value={z}>
              {z}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label>Latitud:</label>
        <input
          type="text"
          className="form-control"
          value={latitud}
          onChange={(e) => setLatitud(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Longitud:</label>
        <input
          type="text"
          className="form-control"
          value={longitud}
          onChange={(e) => setLongitud(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Venta:</label>
        <input
          type="text"
          className="form-control"
          value={venta}
          onChange={(e) => setVenta(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {initialData ? 'Actualizar' : 'Guardar'}
      </button>
    </form>
  );
};

export default Form;
