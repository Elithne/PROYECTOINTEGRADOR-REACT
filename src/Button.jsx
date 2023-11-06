import React, { useState } from 'react';

function Button() {

  return (
    <button
      className="button button-outline"
      onClick={accion}
      disabled={isLoading}
    >
      {isLoading ? loader() : 'Cotizar'}
    </button>
  );
}

export default Button;
