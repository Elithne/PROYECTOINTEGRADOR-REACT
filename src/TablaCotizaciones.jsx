// TablaCotizaciones.js
import React from 'react';

function TablaCotizaciones(props) {
  const retornoTablaHTML = (fila) => {
    return (
      <tr key={fila.fechaCotizacion}>
        <td>{fila.fechaCotizacion}</td>
        <td>{fila.propiedad}</td>
        <td>{fila.ubicacion}</td>
        <td>{fila.metrosCuadrados}</td>
        <td>$ {parseFloat(fila.poliza).toLocaleString()}</td>
      </tr>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Fecha y Hora</th>
          <th>Propiedad</th>
          <th>Ubicación</th>
          <th>Metros Cuadrados</th>
          <th>Importe de Póliza</th>
        </tr>
      </thead>
      <tbody>{props.historialCotizaciones.map(retornoTablaHTML)}</tbody>
    </table>
  );
}

export default TablaCotizaciones;