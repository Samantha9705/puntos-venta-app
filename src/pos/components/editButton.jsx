const EditButton = ({ onEdit, onDelete, item }) => {
  return (
    <div className="d-flex gap-2">
      <button
        className="btn btn-sm btn-warning text-white"
        onClick={() => onEdit(item)}
      >
        Editar
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDelete(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default EditButton;
