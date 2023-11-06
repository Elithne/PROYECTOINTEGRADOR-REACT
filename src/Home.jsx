import Header from "./Header";
import Footer from "./Footer";
import Selector from "./Selector";
import Button from "./Button";

function Home(){
    return(
        <>
        <Header></Header>
        <h1 className="center separador">Seguros del hogar</h1>
        <div className=" center div-cotizador">
            <h2 className="center separador">Completa los datos solicitados</h2>
            <Selector texto="Selecciona el tipo de propiedad" labelSeleccionado="propiedad" idSeleccionado="propiedad"></Selector>
            <Selector texto="Selecciona su Ubicación" labelSeleccionado="ubicacion" idSeleccionado="ubicacion"></Selector>
            <label htmlFor="metros2">Ingresa los Metros Cuadrados:</label>
            <input type="number" id="metros2" min="20" max="500" required/>
            <Button texto="Cotizar"></Button>
            <div className="center separador">
                <p className="importe">Precio estimado: $ <span id="valorPoliza">0.00</span><span className="guardar ocultar" title="Guardar en historial">owo</span></p>
            </div>
        </div>
        <Footer></Footer>
        </>
    ) 
}
export default Home;