import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../Compartidos/Cards/TemplateCard";
import especiales from "../../img/Administracion/especiales.png"
import especialesWebp from "../../img/Administracion/especiales.webp"
import mesas from "../../img/Administracion/mesas.png"
import mesasWebp from "../../img/Administracion/mesas.webp"
import empleados from "../../img/Administracion/empleados.jpg"
import empleadosWebp from "../../img/Administracion/empleados.webp"
import puestos from "../../img/Administracion/puestos.jpg"
import puestosWebp from "../../img/Administracion/puestos.webp"


export default function Administracion(){
    return(
        <Container>
            <h2>Administración</h2>
            <Row>
                <TemplateCard
                    titulo={"Especiales"}
                    img={especiales}
                    imgWebp={especialesWebp}
                    alt={"Especiales"}
                    url={"/especiales"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Mesas"}
                    img={mesas}
                    imgWebp={mesasWebp}
                    alt={"Mesas"}
                    url={"/mesas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Empleados"}
                    img={empleados}
                    imgWebp={empleadosWebp}
                    alt={"Empleados"}
                    url={"/empleados"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Puestos"}
                    img={puestos}
                    imgWebp={puestosWebp}
                    alt={"Puestos"}
                    url={"/puestos"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}