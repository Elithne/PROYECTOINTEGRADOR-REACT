// Historial.js
import React from 'react';
import TablaCotizaciones from './TablaCotizaciones';

function Historial(props) {
  return (
    <div>
      <h2>Historial de Cotizaciones</h2>
      <TablaCotizaciones historialCotizaciones={props.historialCotizaciones} />
    </div>
  );
}

export default Historial;