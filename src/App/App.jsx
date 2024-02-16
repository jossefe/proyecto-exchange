import React, { useState } from 'react';
import InsertExchange from '../components/InsertExchange';
import ExchangeCard from '../components/ExchangeCard';
import './App.css';
import logo from '../img/ep_money.png';
const currencies = {
  "USD": {
 "emoji": "us",
    "exchangeRate": 1,
    "name": "US Dollar"
  },
  "EUR": {
    "emoji": "eu",
    "exchangeRate": 0.89,
    "name": "Euro"
  },
  "JPY": {
    "emoji": "jp",
    "exchangeRate": 114.42,
    "name": "Japanese Yen"
  },
  "GBP": {
    "emoji": "gb",
    "exchangeRate": 0.75,
    "name": "British Pound"
  },
  "AUD": {
    "emoji": "au",
    "exchangeRate": 1.35,
    "name": "Australian Dollar"
  },
  "CAD": {
    "emoji": "ca",
    "exchangeRate": 1.28,
    "name": "Canadian Dollar"
  },
  "CHF": {
    "emoji": "ch",
    "exchangeRate": 0.93,
    "name": "Swiss Franc"
  },
  "CNY": {
    "emoji": "cn",
    "exchangeRate": 6.36,
    "name": "Chinese Yuan"
  },
  "SEK": {
    "emoji": "se",
    "exchangeRate": 8.51,
    "name": "Swedish Krona"
  },
  "NZD": {
    "emoji": "nz",
    "exchangeRate": 1.49,
    "name": "New Zealand Dollar"
  },
  "INR": {
    "emoji": "in",
    "exchangeRate": 74.57,
    "name": "Indian Rupee"
  },
  "BRL": {
    "emoji": "br",
    "exchangeRate": 5.22,
    "name": "Brazilian Real"
  },
  "RUB": {
    "emoji": "ru",
    "exchangeRate": 73.96,
    "name": "Russian Ruble"
  },
  "ZAR": {
    "emoji": "za",
    "exchangeRate": 16.96,
    "name": "South African Rand"
  },
  "MXN": {
    "emoji": "mx",
    "exchangeRate": 20.45,
    "name": "Mexican Peso"
  }
  // Agregar más códigos de moneda según sea necesario
};

const initialExchanges = [//exchages iniciales
  {
    originCurrency: "MXN",
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
  };

  return (
    <div >
      <div className="currency-exchanger__header">
        <h1>Currency Exchange </h1>
      </div>
      <div className="currency-exchanger__form">
        <div className="currency-exchanger__form-title">
          <img src={logo} alt="" />
        </div> 
        {/* llamamos al InsertExchange  para insertar un exchange*/}
        <InsertExchange onAddExchange={addExchange} onSelectCurrency={handleCurrencyChange} />
      </div>
        <div className="currency-exchanger__exchanges-title">
          <h2>Exchanges</h2>
        </div>
        <div className="currency-exchanger__exchanges">
        <div className="currency-exchanger__exchange-list">
          {/* mapeamos los exchanges y creamos un changeCard por cada insert */}
          {exchanges.map((exchange, index) => (
            <ExchangeCard key={index} exchange={exchange} currencies={currencies} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
