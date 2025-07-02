const ZoneFilter = ({ zones, selectedZone, onChange }) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        value={selectedZone}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Todas las zonas</option>
        {zones.map((zone, index) => (
          <option key={index} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ZoneFilter;
