import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCardInicio from "../Compartidos/TemplateCardInicio";
import seguridad from "../../img/Inicio/seguridad.jpg"
import administracion from "../../img/Inicio/administracion.png"
import proveedores from "../../img/Inicio/proveedores.png"
import reportes from "../../img/Inicio/reportes.png"
import restaurantes from "../../img/Inicio/restaurantes.png"
import clientes from "../../img/Inicio/clientes.jpg"
import "./cssInicio.css";

export default function Inicio() {
    return(
        <Container fluid>
            <h1>Bienvenidos al Restaurante</h1> 
                <Row>
                    <TemplateCardInicio
                        titulo={"Seguridad"}
                        img={seguridad}
                        alt={"Seguridad"}
                        url={"/seguridad"}
                    ></TemplateCardInicio>
                    <TemplateCardInicio
                        titulo={"Restaurantes"}
                        img={restaurantes}
                        alt={"Restaurantes"}
                        url={"/restaurantes"}
                    ></TemplateCardInicio>
                    <TemplateCardInicio
                        titulo={"Clientes"}
                        img={clientes}
                        alt={"Clientes"}
                        url={"/clientes"}
                    ></TemplateCardInicio> 
                
                    <TemplateCardInicio
                        titulo={"Proveedores"}
                        img={proveedores}
                        alt={"Proveedores"}
                        url={"/proveedores"}
                    ></TemplateCardInicio>
                    <TemplateCardInicio
                        titulo={"Administración"}
                        img={administracion}
                        alt={"Administración"}
                        url={"/administracion"}
                    ></TemplateCardInicio>
                    <TemplateCardInicio
                        titulo={"Reportes"}
                        img={reportes}
                        alt={"Reportes"}
                        url={"/reportes"}
                    ></TemplateCardInicio>
                </Row>
        </Container>
    )
}