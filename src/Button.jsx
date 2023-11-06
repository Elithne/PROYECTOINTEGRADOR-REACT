// Button.js
import React, { useState } from 'react';

function Button(props) {
  const [isLoading, setIsLoading] = useState(false);

  const loader = () => (
    <img src="src/assets/images/Ellipsis-1.1s-44px.gif" width="40px" />
  );

  const cotizar = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Realiza la cotización aquí y actualiza el precio
      setIsLoading(false);
      props.guardarCotizacion(cotizacion);
    }, 2500);
  };

  return (
    <button
      className="button button-outline"
      onClick={cotizar}
      disabled={isLoading}
    >
      {isLoading ? loader() : 'Cotizar'}
    </button>
  );
}

export default Button;