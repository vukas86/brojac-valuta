import { denominations } from "./data";
import parseDenominationValue from "../utils";

function DenominationInput({
  currency,
  type,
  quantities,
  onQuantityChange,
  onReset,
}) {
  const currencyData = denominations[currency];

  const selectedDenominations =
    type === "both"
      ? [
          ...currencyData.notes.map((note) => `note-${note}`),
          ...currencyData.coins.map((coin) => `coin-${coin}`),
        ]
      : currencyData[type].map((denomination) =>
          type === "notes" ? `note-${denomination}` : `coin-${denomination}`
        );

  const calculateHandler = () => {
    const total = selectedDenominations.reduce((sum, denomination) => {
      const amount = quantities[denomination] || 0;
      const denominationValue = parseDenominationValue(
        denomination.replace("note-", "").replace("coin-", "")
      );
      return sum + amount * denominationValue;
    }, 0);
    alert(`total is ${total}`);
  };

  return (
    <div>
      {selectedDenominations.map((denomination) => {
        const displayValue = denomination
          .replace("note-", "")
          .replace("coin-", "");
        const uniqueKey = `${currency}-${denomination}`;

        return (
          <div key={uniqueKey}>
            <label>{displayValue}:</label>
            <input
              type="number"
              value={quantities[denomination] || 0}
              min="0"
              onChange={(e) =>
                onQuantityChange(denomination, parseInt(e.target.value) || 0)
              }
            />
          </div>
        );
      })}
      <button onClick={calculateHandler}>Izbroji</button>
      <button onClick={onReset}>Resetuj</button>
    </div>
  );
}

export default DenominationInput;
