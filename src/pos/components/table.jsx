import '../styles/Table.css'
const Table = ({ columns = [], data = [], RowComponent, onEditar, onEliminar }) => {
  return (
    <table className="table-custom">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
          <th className="text-end">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <RowComponent
            key={item._id}
            data={item}
            onEditar={onEditar}
            onEliminar={onEliminar}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
