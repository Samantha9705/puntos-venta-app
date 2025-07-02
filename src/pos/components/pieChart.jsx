import { useEffect, useState } from 'react';
import { getPuntos } from '../../services/puntos-service';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#00809D', '#FF7601', '#F3A26D'];
const legendPayload = [
  { value: 'Zona Centro', type: 'square', color: '#00809D' },
  { value: 'Zona Norte', type: 'square', color: '#FF7601' },
  { value: 'Zona Sur', type: 'square', color: '#F3A26D' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartSalesByZone = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPuntos()
      .then(res => setData(res.data))
      .catch(err => console.error('Error al obtener puntos:', err));
  }, []);

  // Agrupa ventas por zona
  const groupedData = data.reduce((acc, current) => {
    const existingZone = acc.find(item => item.name === current.zona);
    if (existingZone) {
      existingZone.value += current.venta;
    } else {
      acc.push({ name: current.zona, value: current.venta });
    }
    return acc;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie
          data={groupedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200}
          fill="#8884d8"
          dataKey="value"
        >
          {groupedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Legend payload={legendPayload} verticalAlign="bottom" height={40} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartSalesByZone;
