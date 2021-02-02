import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../../Compartidos/TemplateCard";
import buffet from "../../../img/Administracion/Especiales/buffet.png";
import especialidades from "../../../img/Administracion/Especiales/especialidades.png";
import bebidas from "../../../img/Administracion/Especiales/bebidas.jpg";


export default function Especiales(){
    return(
        <Container>
            <h2>Especiales</h2>
            <Row>
                <TemplateCard
                    titulo={"Buffet"}
                    img={buffet}
                    alt={"Buffet"}
                    url={"/buffet"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Bebidas"}
                    img={bebidas}
                    alt={"Bebidas"}
                    url={"/bebidas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Especialidades"}
                    img={especialidades}
                    alt={"Especialidades"}
                    url={"/especialidades"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}