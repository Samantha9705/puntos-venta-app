
const BotonSecundario = ({ texto, onClick, tipo = 'button' }) => {
  return (
    <button className="boton-secundario" onClick={onClick} type={tipo}>
      {texto}
    </button>
  );
};

export default BotonSecundario;
