import React, { useEffect, useState } from 'react';
import Table from './table';
import PointSaleRow from './pointSaleRow';
import { getPuntos, deletePunto } from '../../services/puntos-service';

const columns = ['ID', 'Descripción', 'Zona'];

const PointList = () => {
  const [puntos, setPuntos] = useState([]);

  const pointFetch = async () => {
    try {
      const res = await getPuntos();
      setPuntos(res.data);
    } catch (error) {
      console.error('Error al obtener puntos:', error);
    }
  };

  useEffect(() => {
    pointFetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePunto(id);
      pointFetch();
    } catch (error) {
      console.error('Error al eliminar punto:', error);
    }
  };

  const handleEdit = (data) => {
    alert(`Editar punto: ${data.descripcion}`);
  };

  return (
    <Table
      columns={columns}
      data={puntos}
      RowComponent={PointSaleRow}
      onEditar={handleEdit}
      onEliminar={handleDelete}
    />
  );
};

export default PointList;
