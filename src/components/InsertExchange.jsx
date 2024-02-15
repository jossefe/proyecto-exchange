import React, { useState } from 'react';
import CurrencyComboBox from './CurrencyComboBox';
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

const InsertExchange = ({ onAddExchange }) => {
  const [originCurrency, setOriginCurrency] = useState('USD');
  const [destCurrency, setDestCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!originCurrency || !destCurrency || !amount) 
    
    return;

    const newExchange = {
      id: new Date().getTime(),
      originCurrency,
      destCurrency,
      amount: parseFloat(amount),
    };

    onAddExchange(newExchange);
    setAmount('');
  };

  return (
    <form className='currency-exchanger__form 'onSubmit={handleSubmit}>
      <label className='currency-exchanger__form-group select'>
        From:
        <CurrencyComboBox
          currencies={currencies}
          onSelectCurrency={setOriginCurrency} 
        />
      </label>
      <label className='currency-exchanger__form-group select'>
        To:
        <CurrencyComboBox
          currencies={currencies}
          onSelectCurrency={setDestCurrency} 
        />
      </label>
      <label className='currency-exchanger__form-group '>
        Amount:
        <input 
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label >
      <button className='currency-exchanger__form-button' type="submit">Add Exchange</button>
    </form>
  );
};

export default InsertExchange;