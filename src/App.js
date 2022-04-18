import React from "react";
import './App.css';
import Listar from "./componentes/listado";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import  Crear  from "./componentes/crear";
import Editar from './componentes/editar';

function App() {
  return (
    <Router>

        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>Principal <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to={"/crear"}>Crear empleado</Link>
              <Link className="nav-item nav-link" to={"/editar"}>Editar empleado</Link>
          </div>
      </nav>

    <div className="container">
      <br></br>

      <Listar></Listar>
      <Crear></Crear>
      <Editar></Editar>  

    </div>
    </Router>
  );
}

export default App;
