import '../styles/RowSale.css'
const PointSaleRow = ({ data, onEditar, onEliminar }) => {
    return (
        <tr>
            <td>{data._id}</td>
            <td>{data.descripcion}</td>
            <td>{data.zona}</td>
            <td className="text-end">
                <button className="btn btn-sm btn-editar me-2" onClick={() => onEditar(data)}>
                    Editar
                </button>
                <button className="btn btn-sm btn-eliminar" onClick={() => onEliminar(data._id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default PointSaleRow;
