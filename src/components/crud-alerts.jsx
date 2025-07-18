//Alertas con sweetAlert 

import Swal from "sweetalert2";

const mostrarAlerta = (mensaje, tipo = 'success') => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: tipo, // success | error | warning | info
    title: mensaje,
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });
};

export default mostrarAlerta;