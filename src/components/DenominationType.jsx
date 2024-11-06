import React from "react";

function DenominationType() {
  return (
    <select>
      <option value="both">Novčanice i Kovanice</option>
      <option value="notes">Novčanice</option>
      <option value="coins">Kovanice</option>
    </select>
  );
}

export default DenominationType;
