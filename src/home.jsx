import { Link } from 'react-router-dom';
import './styles/home.css';

const Home = () => {
  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="home-title">Sistema de Puntos de Venta</h1>
      <p className="home-description">
        Visualiza, administra y analiza puntos de venta por zona geográfica. Accede a mapa interactivo y gráfica.
      </p>
      <Link to="/posRegister" className="btn btn-primary mt-3">
        Ir al Panel de Puntos
      </Link>
    </div>
  );
};

export default Home;
