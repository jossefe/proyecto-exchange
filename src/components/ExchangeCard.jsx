import React from 'react';
import flecha from '../img/uil_arrows-h.png';

 
const ExchangeCard = ({ exchange, currencies }) => {
  const { originCurrency, destCurrency, amount } = exchange;
  const originFlagImg = `/banderas/${currencies[originCurrency].emoji}.png`;
  const destFlagImg = `/banderas/${currencies[destCurrency].emoji}.png`;


  // Obtenemos el valor de la moneda de origen y destino
  const originCurrencyValue = currencies[originCurrency].exchangeRate;
  const destCurrencyValue = currencies[destCurrency].exchangeRate;

  const calculateExchange = () => {
    // Calcular el tipo de cambio inverso si estamos convirtiendo de una moneda a otra
    const exchangeRate =  destCurrencyValue / originCurrencyValue;
    return (amount * exchangeRate).toFixed(2);
  };
 
  return (
    <div className="card">
      <div className='card__content'>
      <div>
        <img src={originFlagImg}/> <br />
        {`${originCurrency} ${amount}`}
      </div>
      <div>
        <img src={flecha} alt="Arrow" />
      </div>
      <div>
        <img src={destFlagImg}  /> <br />
        {`${destCurrency} ${calculateExchange()}`}
      </div>
      </div>
    </div>
  );
};


export default ExchangeCard;
