import React, { useState } from 'react';

const CurrencyComboBox = ({ currencies, onSelectCurrency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(Object.keys(currencies)[0]);

  const handleCurrencyChange = (event) => {
    const currency = event.target.value;
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
  };

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={`/banderas/${currencies[selectedCurrency].emoji.toLowerCase()}.png`}
        alt={selectedCurrency}
        style={{ width: '20px', position: 'absolute', left: '5px', top: '7px' }}
      />
      <select value={selectedCurrency} onChange={handleCurrencyChange} style={{ paddingLeft: '30px' }}>
        {Object.keys(currencies).map((currencyCode) => (
          <option key={currencyCode} value={currencyCode}>
            {currencies[currencyCode].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyComboBox;
