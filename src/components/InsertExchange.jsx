import React, { useState } from 'react';
import CurrencyComboBox from './CurrencyComboBox';
import arrow from '../img/Vector.png';

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
};

const InsertExchange = ({ onAddExchange }) => {
  const [originCurrency, setOriginCurrency] = useState('USD');
  const [destCurrency, setDestCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!originCurrency || !destCurrency || !amount) { //validamos si han introducido algo en los  inputs
      setError('Por favor, introduce el cambio que deseas realizar.'); //cargamos el error
      return;
    }
//creamos un exchange nuevo 
    const newExchange = {
      id: new Date().getTime(),
      originCurrency,
      destCurrency,
      amount: parseFloat(amount),
    };
//utilizamos la funcion onAddExchange con el nuevo exchange 
    onAddExchange(newExchange);
    setAmount(''); //reseteamos la cantidad
    setError(''); //resteamos el error
  };

  return (
    <div>
      <form className='currency-exchanger__form' onSubmit={handleSubmit}>
        <label className='currency-exchanger__form-group'>
          <div>Amount:</div>
          <input 
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}//recodemos el amount que ponen en input 
          />
        </label >
        <label className='currency-exchanger__form-group select'>
          Origin Currency:
          {/* llamamos a currencyComboBox para hacer la seleccion de la moneda de origin */}
          <CurrencyComboBox
            currencies={currencies}
            onSelectCurrency={setOriginCurrency} 
          />
        </label>
        <div className='currency-exchanger__form-group--arrow'>
          <img src={arrow} alt="" />
        </div>
        <label className='currency-exchanger__form-group select'>
          Destination Currency
           {/* lo mismo con la de destino */}
          <CurrencyComboBox
            currencies={currencies}
            onSelectCurrency={setDestCurrency} 
          />
        </label>
        <button className='currency-exchanger__form-button' type="submit">Add </button>
      </form>
      {error && <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</div>}{/*mstamos el error con un estilo sencillo */}
    </div>
  );
};

export default InsertExchange;
