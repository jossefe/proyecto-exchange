import React, { useState } from 'react';
import InsertExchange from '../components/InsertExchange';
import './App.css';

const initialExchanges = [
  {
    originCurrency: "EUR",
    destCurrency: "USD",
    amount: 2
  },
  {
    originCurrency: "USD",
    destCurrency: "JPY",
    amount: 2
  }
];

const App = () => {
  const [exchanges, setExchanges] = useState(initialExchanges);

  const addExchange = (newExchange) => {
    setExchanges([...exchanges, newExchange]);
  };

  const handleCurrencyChange = (currency) => {
    // Aquí puedes agregar lógica para manejar el cambio de moneda
    console.log(`Selected currency: ${currency}`);
  };

  return (
    <div className="currency-exchanger">
      <div className="currency-exchanger__header">
        <h1>Currency Exchange App</h1>
      </div>
      <div className="currency-exchanger__form">
        <div className="currency-exchanger__form-title">
          <h2>Add Exchange</h2>
        </div>
        <InsertExchange onAddExchange={addExchange} onSelectCurrency={handleCurrencyChange} />
      </div>
      <div className="currency-exchanger__exchanges">
        <div className="currency-exchanger__exchanges-title">
          <h2>Exchanges</h2>
        </div>
        <div className="currency-exchanger__exchange-list">
          {exchanges.map((exchange, index) => (
            <div key={index}>
              <h3>{`${exchange.originCurrency} to ${exchange.destCurrency}`}</h3>
              <p>Amount: {exchange.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
