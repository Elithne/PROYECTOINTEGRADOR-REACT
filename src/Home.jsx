import { Link } from "react-router-dom"
import Propiedad from "./Propiedad";
import Ubicacion from "./Ubicacion";
import Metros from "./Metros";
import Button from "./Button";
import Importe from "./Importe";
import Footer from "./Footer";

function Home(){
    return(
        <>
        <header>
            <h1 className="center separador">Seguros del hogar 🏡</h1>   
            <div className="historial"><Link to="/Historial"><span title="Ver Historial">📋</span></Link>
        </div>  
            </header>
        <div className=" center div-cotizador">
            <h2 className="center separador">Completa los datos solicitados</h2>
            <Propiedad></Propiedad>
            <Ubicacion></Ubicacion>
            <Metros></Metros>
            <Button texto="Cotizar"></Button>
            <Importe></Importe>
        </div>
        <Footer></Footer>
        </>
    ) 
}
export default Home;