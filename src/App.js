
import '../src/styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx'
import PosPage from './pos/pages/posPage.jsx';
import PosRegister from './pos/pages/posRegister.jsx';
import Footer from './components/footer.jsx';
 
function App () {
  return (
     <div className="d-flex flex-column min-vh-100">
    <Router>
      <Header /> 
      <main className="flex-grow-1">
        <Routes>
          <Route path="/Registro" element={<PosRegister/>} />
          <Route path="/Puntos-de-venta" element={<PosPage/>} />
        </Routes>
       </main>
        <Footer />
     </Router>
     </div>
  );
};
       

export default App;
