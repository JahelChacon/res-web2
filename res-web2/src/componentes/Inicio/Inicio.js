import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import seguridad from "../../img/seguridad.jpg"
import administracion from "../../img/administracion.png"
import proveedores from "../../img/proveedores.png"
import reportes from "../../img/reportes.png"
import restaurantes from "../../img/restaurantes.png"
import clientes from "../../img/clientes.jpg"
import "./cssInicio.css";



export default function Inicio() {
    return(
        <div className="container">
            <h1>Bienvenidos al Restaurante</h1> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-md-12 col-sm-6 col-xs-4">
                        <div className="card">
                            <img src={seguridad} className="card-img-top" alt="Seguridad"></img>
                            <div className="card-body">
                                <h3>Seguridad</h3>
                            </div>
                            <div className="card-footer">
                                <Link to="/seguridad" className="btn btn-success btn-block">Ir</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12 col-sm-6 col-xs-4">
                        <div className="card">
                            <img src={restaurantes} className="card-img-top" alt="Seguridad"></img>
                            <div className="card-body">
                                <h3>Restaurantes</h3>
                            </div>
                            <div className="card-footer">
                                <Link to="/restaurantes" className="btn btn-success btn-block">Ir</Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-xl-4 col-md-12 col-sm-6 col-xs-4">
                        <div className="card">
                            <img src={clientes} className="card-img-top" alt="Seguridad"></img>
                            <div className="card-body">
                                <h3>Clientes</h3>
                            </div>
                            <div className="card-footer">
                                <Link to="/clientes" className="btn btn-success btn-block">Ir</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-12 col-sm-6 col-xs-4">
                        <div className="card">
                            <img src={proveedores} className="card-img-top" alt="Seguridad"></img>
                            <div className="card-body">
                                <h3>Proveedores</h3>
                            </div>
                            <div className="card-footer">
                                <Link to="/proveedores" className="btn btn-success btn-block">Ir</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12 col-sm-6 col-xs-4">
                        <div className="card">
                            <img src={administracion} className="card-img-top" alt="Seguridad"></img>
                            <div className="card-body">
                                <h3>Administración</h3>
                            </div>
                            <div className="card-footer">
                                <Link to="/administracion" className="btn btn-success btn-block">Ir</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12 col-sm-6 col-xs-4">
                        <div className="card">
                            <img src={reportes} className="card-img-top" alt="Seguridad"></img>
                            <div className="card-body">
                                <h3>Reportes</h3>
                            </div>
                            <div className="card-footer">
                                <Link to="/reportes" className="btn btn-success btn-block">Ir</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}