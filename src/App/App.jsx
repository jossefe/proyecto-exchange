import React, { useState } from 'react';
import InsertExchange from '../components/InsertExchange';
import ExchangeCard from '../components/ExchangeCard';
import './App.css';
const currencies = {
  "USD": {
 "emoji": "\uD83C\uDDFA\uD83C\uDDF8",
    "exchangeRate": 1,
    "name": "US Dollar"
  },
  "EUR": {
    "emoji": "\uD83C\uDDEA\uD83C\uDDFA",
    "exchangeRate": 0.89,
    "name": "Euro"
  },
  "JPY": {
    "emoji": "\uD83C\uDDEF\uD83C\uDDF5",
    "exchangeRate": 114.42,
    "name": "Japanese Yen"
  },
  "GBP": {
    "emoji": "\uD83C\uDDEC\uD83C\uDDE7",
    "exchangeRate": 0.75,
    "name": "British Pound"
  },
  "AUD": {
    "emoji": "\uD83C\uDDE6\uD83C\uDDFA",
    "exchangeRate": 1.35,
    "name": "Australian Dollar"
  },
  "CAD": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDE6",
    "exchangeRate": 1.28,
    "name": "Canadian Dollar"
  },
  "CHF": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDED",
    "exchangeRate": 0.93,
    "name": "Swiss Franc"
  },
  "CNY": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDF3",
    "exchangeRate": 6.36,
    "name": "Chinese Yuan"
  },
  "SEK": {
    "emoji": "\uD83C\uDDF8\uD83C\uDDEA",
    "exchangeRate": 8.51,
    "name": "Swedish Krona"
  },
  "NZD": {
    "emoji": "\uD83C\uDDF3\uD83C\uDDFF",
    "exchangeRate": 1.49,
    "name": "New Zealand Dollar"
  },
  "INR": {
    "emoji": "\uD83C\uDDEE\uD83C\uDDF3",
    "exchangeRate": 74.57,
    "name": "Indian Rupee"
  },
  "BRL": {
    "emoji": "\uD83C\uDDE7\uD83C\uDDF7",
    "exchangeRate": 5.22,
    "name": "Brazilian Real"
  },
  "RUB": {
    "emoji": "\uD83C\uDDF7\uD83C\uDDFA",
    "exchangeRate": 73.96,
    "name": "Russian Ruble"
  },
  "ZAR": {
    "emoji": "\uD83C\uDDFF\uD83C\uDDE6",
    "exchangeRate": 16.96,
    "name": "South African Rand"
  },
  "MXN": {
    "emoji": "\uD83C\uDDF2\uD83C\uDDFD",
    "exchangeRate": 20.45,
    "name": "Mexican Peso"
  }
  // Agregar más códigos de moneda según sea necesario
};

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
    <div >
      <div className="currency-exchanger__header">
        <h1>Currency Exchange App</h1>
      </div>
      <div className="currency-exchanger__form">
        <div className="currency-exchanger__form-title">
          <h2>Add Exchange</h2>
        </div>
        <InsertExchange onAddExchange={addExchange} onSelectCurrency={handleCurrencyChange} />
      </div>
        <div className="currency-exchanger__exchanges-title">
          <h2>Exchanges</h2>
        </div>
        <div className="currency-exchanger__exchanges">
        <div className="currency-exchanger__exchange-list">
          {exchanges.map((exchange, index) => (
            <ExchangeCard key={index} exchange={exchange} currencies={currencies} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
