import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../Compartidos/TemplateCard";
import bitacora from "../../img/Reportes/bitacora.jpg";
import clientes from "../../img/Reportes/clientes.jpg";
import facturas from "../../img/Reportes/facturas.png";


export default function Reportes(){
    return(
        <Container>
            <h2>Reportes</h2>
            <Row>
                <TemplateCard
                    titulo={"Bitácoras"}
                    img={bitacora}
                    alt={"Bitácoras"}
                    url={"/bitacora"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Usuarios"}
                    img={clientes}
                    alt={"Usuarios"}
                    url={"/reportes-clientes"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Facturas"}
                    img={facturas}
                    alt={"Facturas"}
                    url={"/facturas"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}