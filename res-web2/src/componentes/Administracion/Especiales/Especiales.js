import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../../Compartidos/Cards/TemplateCard";
import buffet from "../../../img/Administracion/Especiales/buffet.png";
import buffetWebp from "../../../img/Administracion/Especiales/buffet.webp";
import especialidades from "../../../img/Administracion/Especiales/especialidades.png";
import especialidadesWebp from "../../../img/Administracion/Especiales/especialidades.webp";
import bebidas from "../../../img/Administracion/Especiales/bebidas.jpg";
import bebidasWebp from "../../../img/Administracion/Especiales/bebidas.webp";
import BotonAtras from "../../Compartidos/Botones/BotonAtras";


export default function Especiales(){
    return(
        <Container className="text-left">
             <BotonAtras url='/administracion'/>
            <h2 className="text-center">Especiales</h2>
            <Row className="text-center">
                <TemplateCard
                    titulo={"Buffet"}
                    img={buffet}
                    imgWebp={buffetWebp}
                    alt={"Buffet"}
                    url={"/buffet"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Bebidas"}
                    img={bebidas}
                    imgWebp={especialidadesWebp}
                    alt={"Bebidas"}
                    url={"/bebidas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Especialidades"}
                    img={especialidades}
                    imgWebp={bebidasWebp}
                    alt={"Especialidades"}
                    url={"/especialidades"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}