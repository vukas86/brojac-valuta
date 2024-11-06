import { denominations } from "./data";
import parseDenominationValue from "../utils";

function DenominationInput({ currency, type, quantities, onQuantityChange }) {
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

  return (
    <div>
      {selectedDenominations.map((denomination) => {
        const uniqueKey = `${currency}-${type}-${denomination}`;

        return (
          <div key={uniqueKey}>
            <label>
              {denomination.replace("note-", "").replace("coin-", "")}:
            </label>
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
      <input type="number" name="Moj Broj" id="45" />
    </div>
  );
}

export default DenominationInput;
