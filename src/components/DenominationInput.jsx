import { useState } from "react";

import { denominations } from "./data";
import parseDenominationValue from "../utils";

import styles from "./DenominationInput.module.css";

function DenominationInput({
  currency,
  type,
  quantities,
  onQuantityChange,
  onReset,
}) {
  const currencyData = denominations[currency];
  const [total, setTotal] = useState(0);

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
    const totalValue = selectedDenominations.reduce((sum, denomination) => {
      const amount = quantities[denomination] || 0;
      const denominationValue = parseDenominationValue(
        denomination.replace("note-", "").replace("coin-", "")
      );
      return sum + amount * denominationValue;
    }, 0);
    setTotal(totalValue);
  };

  const handleReset = () => {
    onReset();
    setTotal(0);
  };

  return (
    <>
      <div className={styles.moneyContainer}>
        {selectedDenominations.map((denomination) => {
          const displayValue = denomination
            .replace("note-", "")
            .replace("coin-", "");
          const uniqueKey = `${currency}-${denomination}`;

          return (
            <div key={uniqueKey} className={styles.moneyInput}>
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
      </div>
      <button onClick={calculateHandler}>Izbroji</button>
      <button onClick={handleReset}>Resetuj</button>

      <div>Total: {total}</div>
    </>
  );
}

export default DenominationInput;
