import { useEffect, useState } from 'react';
import '../styles/POSregister.css';
import {
  getPuntos,
  createPunto,
  updatePunto,
  deletePunto
} from '../../services/puntos-service.js';
import Modal from '../components/modal.jsx';
import Form from '../components/form.jsx';
import Table from '../components/table.jsx';
import AddButton from '../components/addButton.jsx';
import PointSaleRow from '../components/pointSaleRow.jsx';

const PosRegister = () => {
  const [datos, setDatos] = useState([]);
  const [modalNuevoAbierto, setModalNuevoAbierto] = useState(false);
  const [modalEdicionAbierto, setModalEdicionAbierto] = useState(false);
  const [puntoEditando, setPuntoEditando] = useState(null);

  // Cargar puntos desde la API
  const fetchPuntos = async () => {
    try {
      const res = await getPuntos();
      setDatos(res.data);
    } catch (error) {
      console.error('Error al cargar puntos:', error);
      const errorMessage = error.response?.data?.error || 'Error desconocido al cargar punto.';
      alert('Error al cargar punto: ' + errorMessage);
    }
  };

  useEffect(() => {
    fetchPuntos();
  }, []);

  // Crear 
  const handleGuardarNuevo = async (nuevo) => {
    try {
      await createPunto(nuevo);
      fetchPuntos(); // recarga los datos
      setModalNuevoAbierto(false);
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Error desconocido al crear punto.';
      alert('Error al crear punto: ' + errorMessage);
      console.error('Error al crear punto:', error);
    }
  };

  // Edición
  const handleEditar = (punto) => {
    setPuntoEditando(punto);
    setModalEdicionAbierto(true);
  };

  // Guardar
  const handleGuardarEdicion = async (puntoActualizado) => {
    try {
      await updatePunto(puntoActualizado._id, puntoActualizado);
      fetchPuntos();
      setModalEdicionAbierto(false);
      setPuntoEditando(null);
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Error desconocido al actualizar punto.';
      alert('Error al actualizar punto: ' + errorMessage);
      console.error('Error al actualizar punto:', error);
    }
  };

  // Eliminar 
  const handleEliminar = async (id) => {
    try {
      await deletePunto(id);
      fetchPuntos();
    } catch (error) {
      console.error('Error al eliminar punto:', error);
      const errorMessage = error.response?.data?.error || 'Error desconocido al eliminar punto.';
      alert('Error al eliminar punto: ' + errorMessage);
    }
  };

  return (
    <div className="pos-register-container">
      <h2 className="pos-register-title">Registrar Punto de Venta</h2>

      <div className="pos-register-button-wrapper">
        <AddButton onClick={() => setModalNuevoAbierto(true)} />
      </div>

      <Modal
        show={modalNuevoAbierto}
        onClose={() => setModalNuevoAbierto(false)}
        title="Nuevo Punto de Venta"
      >
        <Form onGuardar={handleGuardarNuevo} />
      </Modal>

      <Modal
        show={modalEdicionAbierto}
        onClose={() => {
          setModalEdicionAbierto(false);
          setPuntoEditando(null);
        }}
        title="Editar Punto de Venta"
      >
        <Form
          initialData={puntoEditando}
          onGuardar={handleGuardarEdicion}
        />
      </Modal>

      <div className="pos-register-table-wrapper">
        <Table
          columns={['ID', 'Descripción', 'Zona']}
          data={datos}
          RowComponent={PointSaleRow}
          onEditar={handleEditar}
          onEliminar={handleEliminar}
        />
      </div>
    </div>
  );
};

export default PosRegister;
