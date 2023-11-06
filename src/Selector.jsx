function Selector(props){
    const texto = props.texto;
    const labelSeleccionado = props.labelSeleccionado;
    const idSeleccionado = props.idSeleccionado;
    return(
        <>
        <label htmlFor={labelSeleccionado}>{texto}</label>
        <select id={idSeleccionado}>
            <option disabled>...</option>
        </select></>
    )
}
export default Selector;