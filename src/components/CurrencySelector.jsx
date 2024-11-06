function CurrencySelector({ selectedCurrency, onChange }) {
  return (
    <select value={selectedCurrency} onChange={onChange}>
      <option value="dinar">Dinar</option>
      <option value="euro">Euro</option>
      <option value="dollar">Dolar</option>
    </select>
  );
}

export default CurrencySelector;
