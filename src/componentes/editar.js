import React from 'react';

class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        //console.log(this.props.match.params.id);

        fetch("http://localhost/empleados/")
            .then(respuesta => respuesta.json())
            .then(datosRespuesta => {
                console.log(datosRespuesta);
                this.setState({ datosCargados: true, empleados: datosRespuesta })
            })
            .catch(console.log)
    }

    render() { 
        return ( 
            <div className="card">
                <div className="card-header">
                    Editar empleados
                </div>
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
                <div className="card-footer text-muted">
                    Footer
                </div>
            </div>
         );
    }
}
 
export default Editar;