const Alert = ({ type = "info", message, onClose }) => {
  
  const colorMap = {
    guardado: {
      background: "#3fd0c9",  
      text: "#ffffff",       
      border: "#30b8b0"
    },
    error: {
      background: "#ff4d4f",  
      text: "#ffffff",
      border: "#cc3b3d"
    },
    warning: {
      background: "#ffcc00",  
      text: "#000000",
      border: "#e6b800"
    },
    info: {
      background: "#e6f7ff", 
      text: "#005d7a",
      border: "#91d5ff"
    },
    eliminado: {
      background: "#ffcc00",  
      text: "#000000",
      border: "#e6b800"
    },
    actualizado: {
      background: "#e6f7ff", 
      text: "#005d7a",
      border: "#91d5ff"
    }
  };

  const colors = colorMap[type] || colorMap.info;

  const alertStyle = {
    backgroundColor: colors.background,
    color: colors.text,
    border: `1px solid ${colors.border}`,
    padding: "10px 15px",
    borderRadius: "8px",
    position: "relative",
    marginBottom: "1rem"
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "8px",
    right: "12px",
    background: "none",
    border: "none",
    fontSize: "16px",
    color: colors.text,
    cursor: "pointer"
  };

  return (
    <div style={alertStyle}>
      <strong>{type.toUpperCase()}:</strong> {message}
      {onClose && (
        <button onClick={onClose} style={closeButtonStyle}>
        </button>
      )}
    </div>
  );
};

export default Alert;
