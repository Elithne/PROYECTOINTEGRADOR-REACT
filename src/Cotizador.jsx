import React, { useState } from 'react';

function Cotizador({ datos, guardarCotizacion }) {
  const [selectPropiedad, setSelectPropiedad] = useState('...');
  const [selectUbicacion, setSelectUbicacion] = useState('...');
  const [metrosCuadrados, setMetrosCuadrados] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loader = () => (
    <img src="images/Ellipsis-1.1s-44px.gif" width="40px" alt="Cargando" />
  );

  const realizarCotizacion = () => {
    if (selectPropiedad === '...' || selectUbicacion === '' || metrosCuadrados < 20) {
      alert('Debes completar todos los datos en pantalla.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const cotizacion = new Cotizador(costoM2, selectPropiedad, selectUbicacion, metrosCuadrados);
      const precioPoliza = cotizacion.cotizarPoliza();
      guardarCotizacion({
        fechaCotizacion: new Date().toLocaleString(),
        propiedad: selectPropiedad,
        ubicacion: selectUbicacion,
        metrosCuadrados: metrosCuadrados,
        poliza: precioPoliza,
      });
      setIsLoading(false);
      alert('Cotización realizada con éxito.');
    }, 2500);
  };

  return (
    <div>
      <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
      <select id="propiedad" value={selectPropiedad} onChange={(e) => setSelectPropiedad(e.target.value)}>
        <option value="...">...</option>
        {datos.map((dato) => (
          <option key={dato.tipo} value={dato.factor}>
            {dato.tipo}
          </option>
        ))}
      </select>

      <label htmlFor="ubicacion">Selecciona su Ubicación</label>
      <select id="ubicacion" value={selectUbicacion} onChange={(e) => setSelectUbicacion(e.target.value)}>
        <option value="...">...</option>
        {datos.map((dato) => (
          <option key={dato.tipo} value={dato.factor}>
            {dato.tipo}
          </option>
        ))}
      </select>

      <label htmlFor="metros2">Ingresa los Metros Cuadrados:</label>
      <input
        type="number"
        id="metros2"
        min="20"
        max="500"
        value={metrosCuadrados}
        onChange={(e) => setMetrosCuadrados(e.target.value)}
        required
      />

      <button className="button button-outline" onClick={realizarCotizacion} disabled={isLoading}>
        {isLoading ? loader() : 'Cotizar'}
      </button>
    </div>
  );
}

export default Cotizador;