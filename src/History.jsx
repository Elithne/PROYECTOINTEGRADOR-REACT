    import Button from "./Button";
    import Footer from "./Footer";
    import { Link } from "react-router-dom";
    
    function History(){
    return(
        <>
            <h1 className="center separador">Ver Historial 📋</h1>
            <div className=" center div-cotizador">
            <table>
                <thead>
                    <tr>
                        <th>Fecha de cotización</th>
                        <th>Propiedad</th>
                        <th>Ubicación</th>
                        <th>Metros cuadrados</th>
                        <th>Póliza mensual</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aquí</td>
                        <td>verás</td>
                        <td>las</td>
                        <td>cotizaciones</td>
                        <td>realizadas</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/"><Button texto="Volver"></Button></Link>
        </div>
        <Footer></Footer>
        </>
    ) 

}
export default History;