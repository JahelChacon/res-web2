import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../Compartidos/Cards/TemplateCard";
import bitacora from "../../img/Reportes/bitacora.jpg";
import bitacoraWebp from "../../img/Reportes/bitacora.webp";
import clientes from "../../img/Reportes/clientes.jpg";
import clientesWebp from "../../img/Reportes/clientes.webp";
import facturas from "../../img/Reportes/facturas.png";
import facturasWebp from "../../img/Reportes/facturas.webp";


export default function Reportes({ usuario }) {
    return (
        <Container>
            <h2>Reportes</h2>
            <Row>
                {(usuario.administradorSistema ||
                    usuario.administradorSeguridad) &&
                    <TemplateCard
                        titulo={"Bitácoras"}
                        img={bitacora}
                        imgWebp={bitacoraWebp}
                        alt={"Bitácoras"}
                        url={"/bitacoras"}
                    ></TemplateCard>
                }
                {usuario.administradorSistema &&
                    <TemplateCard
                        titulo={"Usuarios"}
                        img={clientes}
                        imgWebp={clientesWebp}
                        alt={"Usuarios"}
                        url={"/reporte-usuarios"}
                    ></TemplateCard>
                }
                {(usuario.administradorSistema ||
                    usuario.administradorCuentas) &&
                    <TemplateCard
                        titulo={"Facturas"}
                        img={facturas}
                        imgWebp={facturasWebp}
                        alt={"Facturas"}
                        url={"/facturas"}
                    ></TemplateCard>
                }
            </Row>
        </Container>
    )
}