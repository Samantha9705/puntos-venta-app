const AddButton = ({ onClick }) => {
  return (
    <button
      className="add-button"
      onClick={onClick}
    >
      <i className="bi bi-plus-lg"></i> 
      
    </button>
  );
};

export default AddButton;
