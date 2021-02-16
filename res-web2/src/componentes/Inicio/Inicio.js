import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCardInicio from "../Compartidos/Cards/TemplateCardInicio";
import seguridad from "../../img/Inicio/seguridad.jpg"
import seguridadWebp from "../../img/Inicio/seguridad.webp"
import administracion from "../../img/Inicio/administracion.png"
import administracionWebp from "../../img/Inicio/administracion.webp"
import proveedores from "../../img/Inicio/proveedores.png"
import proveedoresWebp from "../../img/Inicio/proveedores.webp"
import reportes from "../../img/Inicio/reportes.png"
import reportesWebp from "../../img/Inicio/reportes.webp"
import restaurantes from "../../img/Inicio/restaurantes.png"
import restaurantesWebp from "../../img/Inicio/restaurantes.webp"
import clientes from "../../img/Inicio/clientes.jpg"
import clientesWebp from "../../img/Inicio/clientes.webp"
import "./cssInicio.css";

export default function Inicio({ usuario }) {
    return (
        <Container fluid>
            <h1>Bienvenidos al Restaurante</h1>
            <Row>
                {(usuario.administradorSistema ||
                    usuario.administradorSeguridad ||
                    usuario.administradorCuentas) &&
                    <TemplateCardInicio
                        titulo={"Seguridad"}
                        img={seguridad}
                        imgWebp={seguridadWebp}
                        alt={"Seguridad"}
                        url={"/seguridad"}
                    ></TemplateCardInicio>
                }
                {usuario.administradorSistema &&
                    <TemplateCardInicio
                        titulo={"Restaurantes"}
                        img={restaurantes}
                        imgWebp={restaurantesWebp}
                        alt={"Restaurantes"}
                        url={"/restaurantes"}
                    ></TemplateCardInicio>
                }
                {usuario.administradorSistema &&
                    <TemplateCardInicio
                        titulo={"Clientes"}
                        img={clientes}
                        imgWebp={clientesWebp}
                        alt={"Clientes"}
                        url={"/clientes"}
                    ></TemplateCardInicio>
                }
                {usuario.administradorSistema &&

                    <TemplateCardInicio
                        titulo={"Proveedores"}
                        img={proveedores}
                        imgWebp={proveedoresWebp}
                        alt={"Proveedores"}
                        url={"/proveedores-inicio"}
                    ></TemplateCardInicio>
                }
                {usuario.administradorSistema &&
                    <TemplateCardInicio
                        titulo={"Administración"}
                        img={administracion}
                        imgWebp={administracionWebp}
                        alt={"Administración"}
                        url={"/administracion"}
                    ></TemplateCardInicio>
                }
                {(usuario.administradorSistema ||
                    usuario.administradorSeguridad ||
                    usuario.administradorCuentas) &&
                    <TemplateCardInicio
                        titulo={"Reportes"}
                        img={reportes}
                        imgWebp={reportesWebp}
                        alt={"Reportes"}
                        url={"/reportes"}
                    ></TemplateCardInicio>
                }
            </Row>
        </Container>
    )
}