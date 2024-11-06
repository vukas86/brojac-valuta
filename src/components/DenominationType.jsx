import React from "react";

function DenominationType({ selectedType, onChange }) {
  return (
    <select value={selectedType} onChange={onChange}>
      <option value="both">Novčanice i Kovanice</option>
      <option value="notes">Novčanice</option>
      <option value="coins">Kovanice</option>
    </select>
  );
}

export default DenominationType;
