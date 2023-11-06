import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Selector from './Selector';
import Button from './Button';
import Historial from './Historial';
import Cotizador from './Cotizador';

function Home() {
  const [datos, setDatos] = useState([]);
  const [historialCotizaciones, setHistorialCotizaciones] = useState([]);

  useEffect(() => {
    // Realiza la carga de datos aquí (puede ser una solicitud a una API o una importación de datos)
    // Actualiza el estado con los datos
  }, []);

  const guardarCotizacion = (cotizacion) => {
    // Guarda la cotización en el historialCotizaciones y actualiza el estado
  };

  return (
    <div>
      <Header />
      <h1 className="center separador">Seguros del hogar</h1>
      <div className="center div-cotizador">
        <h2 className="center separador">Completa los datos solicitados</h2>
        <Selector
          texto="Selecciona el tipo de propiedad"
          datos={datos}
        />
        <Selector
          texto="Selecciona su Ubicación"
          datos={datos}
        />
        <label htmlFor="metros2">Ingresa los Metros Cuadrados:</label>
        <input type="number" id="metros2" min="20" max="500" required />
        <Button
          texto="Cotizar"
          guardarCotizacion={guardarCotizacion}
        />
        <div className="center separador">
          <p className="importe">
            Precio estimado: $ <span id="valorPoliza">0.00</span>
            <span className="guardar ocultar" title="Guardar en historial">owo</span>
          </p>
        </div>
      </div>
      <Footer />
      <Historial historialCotizaciones={historialCotizaciones} />
    </div>
  );
}

export default Home;