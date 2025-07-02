
const BotonPrincipal = ({ texto, onClick, tipo = 'button' }) => {
  return (
    <button className="boton-principal text-center mt-5" onClick={onClick} type={tipo}>
      {texto}
    </button>
  );
};

export default BotonPrincipal;
