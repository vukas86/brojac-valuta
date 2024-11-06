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

  const handleQuantityChange = (denomination, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [denomination]: quantity,
    }));
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
        onSelectType={setSelectedType}
      />
      <DenominationInput
        currency={selectedCurrency}
        type={selectedType}
        quantities={quantities}
        onQuantityChange={handleQuantityChange}
      />
    </>
  );
}

export default App;
