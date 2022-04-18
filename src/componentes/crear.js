import React from "react";
import { Link } from "react-router-dom";

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo:"",
            placas:""
        }
    }

    cambioValor = (e) =>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
    }

    enviarDatos = (e) =>{
        e.preventDefault();
        console.log("El formulario se envio ....");
        const{tipo,placas}=this.state;

        console.log(tipo);
        console.log(placas);

        var datosEnviar = {tipo:tipo, placas:placas}

        fetch("http://localhost/empleados/?insertar=1", {
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
            .then(respuesta => respuesta.json())
            .then(datosRespuesta => {
                console.log(datosRespuesta);
                this.props.history.push("/");
            })
            .catch(console.log)
    }

    render() {

        const{tipo,placas}=this.state;

        return (
            <div className="card">
                <div className="card-header">
                    Clientes
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div className="form-group">
                            <label htmlFor="">Tipo de cliente:</label>
                            <input type="text" name="tipo" onChange={this.cambioValor} value={tipo} id="tipo" className="form-control" placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Escribe el tipo de cliente</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Placas:</label>
                            <input type="text" name="placas" onChange={this.cambioValor} value={placas} id="placas" className="form-control" placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Escribe las placas del carro</small>
                        </div>

                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar nuevo cliente</button>
                            <Link to={"/"} className="btn btn-primary">Cancelar</Link>
                        </div>
                    </form>

                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        );
    }
}

export default Crear;