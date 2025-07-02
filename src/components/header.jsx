import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/header.css'


//Menu Hamburgesa
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <header>
      <nav className="navbar navbar-expand-md bg-info px-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white fw-bold">
            Test Front
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" onClick={closeNavbar}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/Registro" className="nav-link text-white" onClick={closeNavbar}>Registro</Link>
              </li>
              <li className="nav-item">
                <Link to="/Puntos-de-venta" className="nav-link text-white" onClick={closeNavbar}>Puntos de Venta</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
