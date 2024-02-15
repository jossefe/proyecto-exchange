 import React, { useState } from 'react';

const CurrencyComboBox = ({ currencies, onSelectCurrency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(Object.keys(currencies)[0]);

  const handleCurrencyChange = (event) => {
    const currency = event.target.value;
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
  };
  return (
    <div>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        {Object.keys(currencies).map((currencyCode) => (
          <option key={currencyCode} value={currencyCode}>
            <img src={`/banderas/${currencies[currencyCode].emoji.toLowerCase()}.png`} alt="" /> {currencies[currencyCode].name}
          </option>
        ))}
      </select>
    </div>
  );
  
};
export default CurrencyComboBox;