import { useState } from "react";
import { denominations } from "./components/data";

import CurrencySelector from "./components/CurrencySelector";
import DenominationType from "./components/DenominationType";
import DenominationInput from "./components/DenominationInput";

import "./App.css";

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("dinar");
  const [selectedType, setSelectedType] = useState("both");
  const [quantities, setQuantities] = useState({});

  const currencyChangeHandler = (e) => {
    setSelectedCurrency(e.target.value);
    setQuantities({});
  };

  const selectedTypeHandler = (e) => {
    setSelectedType(e.target.value);
    setQuantities({});
  };

  const handleQuantityChange = (denomination, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [denomination]: quantity,
    }));
  };

  const resetHandler = () => {
    setQuantities({});
  };

  return (
    <>
      <h1>Brojac Valuta</h1>
      <CurrencySelector
        selectedCurrency={selectedCurrency}
        onChange={currencyChangeHandler}
      />
      <DenominationType
        selectedType={selectedType}
        onChange={selectedTypeHandler}
      />
      <DenominationInput
        currency={selectedCurrency}
        type={selectedType}
        quantities={quantities}
        onQuantityChange={handleQuantityChange}
        onReset={resetHandler}
      />
    </>
  );
}

export default App;
