import React from 'react';

function Selector(props) {
  const cargarCombo = (array) => {
    return array.map((elemento) => (
      <option key={elemento.tipo} value={elemento.factor}>
        {elemento.tipo}
      </option>
    ));
  };

  return (
    <select id={props.id}>
      <option disabled>...</option>
      {cargarCombo(props.datos)}
    </select>
  );
}

export default Selector;