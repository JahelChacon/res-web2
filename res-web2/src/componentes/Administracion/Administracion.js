import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../Compartidos/TemplateCard";
import especiales from "../../img/Administracion/especiales.png"
import mesas from "../../img/Administracion/mesas.png"
import empleados from "../../img/Administracion/empleados.jpg"
import puestos from "../../img/Administracion/puestos.jpg"


export default function Administracion(){
    return(
        <Container>
            <h2>Administración</h2>
            <Row>
                <TemplateCard
                    titulo={"Especiales"}
                    img={especiales}
                    alt={"Especiales"}
                    url={"/especiales"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Mesas"}
                    img={mesas}
                    alt={"Mesas"}
                    url={"/mesas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Empleados"}
                    img={empleados}
                    alt={"Empleados"}
                    url={"/empleados"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Puestos"}
                    img={puestos}
                    alt={"Puestos"}
                    url={"/puestos"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}