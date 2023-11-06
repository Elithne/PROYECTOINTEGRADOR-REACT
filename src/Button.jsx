function Button(props){
    const texto = props.texto;
    return(
        <div className="center separador">
            <button className="button button-outline">{texto}</button>
        </div>
    )
}


export default Button