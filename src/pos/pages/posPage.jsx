import { useEffect, useState } from 'react';
import '../styles/POSpage.css';
import { getPuntos } from '../../services/puntos-service.js';
import ZoneFilter from '../components/zoneFilter.jsx';
import MapPos from '../components/mapPos.jsx';
//import DummyData from '../data/dummy-data.js';
import PieChartSalesByZone from '../components/pieChart.jsx';


const PosPage = () => {
  const [puntos, setPuntos] = useState([]);
  const [zone, setZone] = useState([]);
  const [SelectZone, setSelectZone] = useState('');

  useEffect(() => {
    getPuntos()
      .then(res => {
        setPuntos(res.data);
        const zonasUnicas = [...new Set(res.data.map(p => p.zona))];
        setZone(zonasUnicas);
      })
      .catch(err => console.error(err));
  }, []);

  // filtro con API
  const FilterPoint = SelectZone
    ? puntos.filter(p => p.zona === SelectZone)
    : puntos;

  //Filtro sin API
  //  const filteredPoints = selectedZone
  //   ? DummyData.filter(p => p.zona === selectedZone)
  //   : DummyData;

  return (

    <div className="container my-4">
      <h2>Puntos de Venta</h2>
      <div className="pos-page-filter-wrapper">
        <ZoneFilter
          zones={zone}
          selectedZone={SelectZone}
          onChange={setSelectZone}
        />

      </div>

      <div className="row g-4">
  <div className="col-12 col-md-6">
    <div className="pos-page-map-wrapper w-100" style={{ minHeight: '300px', height: '100%' }}>
      <MapPos puntos={FilterPoint} />
    </div>
  </div>
  <div className="col-12 col-md-6">
    <div className="pos-page-chart-wrapper w-100" style={{ minHeight: '300px', height: '100%' }}>
      <PieChartSalesByZone data={FilterPoint} />
    </div>
  </div>
</div>

    </div>

  );
};

export default PosPage;
