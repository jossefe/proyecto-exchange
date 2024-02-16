import React, { useState } from 'react';
import flecha from '../img/uil_arrows-h.png';
import eliminar from '../img/lets-icons_remove.png';

const ExchangeCard = ({ exchange, currencies }) => {
  const { originCurrency, destCurrency, amount } = exchange;
  const originFlagImg = `/banderas/${currencies[originCurrency].emoji}.png`;
  const destFlagImg = `/banderas/${currencies[destCurrency].emoji}.png`;

  // Obtenemos el valor de la moneda de origen y destino
  const originCurrencyValue = currencies[originCurrency].exchangeRate;
  const destCurrencyValue = currencies[destCurrency].exchangeRate;

  const calculateExchange = () => {
    // Calculamos el tipo de cambio convertiendo de una moneda a otra
    const exchangeRate = destCurrencyValue / originCurrencyValue;
    return (amount * exchangeRate).toFixed(2);
  };

  const [deleted, setDeleted] = useState(false);
//funcion para eliminar el card
  const handleDeleteCard = () => {
    setDeleted(true);
  };

  return (

    <div className="card" style={{ display: deleted ? 'none' : 'block' }}>{/*comprabamos si se a eliminado para borar el card  */}
      
      <div className="card__content">
        <div>
          <img src={originFlagImg} alt="Origin Flag" /> <br />
          {`${originCurrency} ${amount}`} {/* ponemos la cantidad cogiedola del amount directamente */}
        </div>
        <div>
          <img src={flecha} alt="Arrow" />
        </div>
        <div>
          <img src={destFlagImg} alt="Destination Flag" /> <br />
          {`${destCurrency} ${calculateExchange()}`}{/* utilizamos el cambio que hemos hecho antes*/}
        </div>
        <img src={eliminar} alt="Delete" className="delete-icon" onClick={handleDeleteCard} />{/* imagen que utilizamos para eliminar el card */}
      </div>
    </div>
  );
};

export default ExchangeCard;
