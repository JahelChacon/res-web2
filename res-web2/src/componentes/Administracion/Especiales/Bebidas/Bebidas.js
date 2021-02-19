import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../../../Compartidos/Cards/TemplateCard";
import calientes from "../../../../img/Administracion/Especiales/Bebidas/calientes.png";
import calientesWebp from "../../../../img/Administracion/Especiales/Bebidas/calientes.webp";
import gaseosas from "../../../../img/Administracion/Especiales/Bebidas/gaseosas.png";
import gaseosasWebp from "../../../../img/Administracion/Especiales/Bebidas/gaseosas.webp";
import heladas from "../../../../img/Administracion/Especiales/Bebidas/heladas.png";
import heladasWebp from "../../../../img/Administracion/Especiales/Bebidas/heladas.webp";
import vinos from "../../../../img/Administracion/Especiales/Bebidas/vinos.png";
import vinosWebp from "../../../../img/Administracion/Especiales/Bebidas/vinos.webp";
import licores from "../../../../img/Administracion/Especiales/Bebidas/licores.png";
import licoresWebp from "../../../../img/Administracion/Especiales/Bebidas/licores.webp";
import BotonAtras from "../../../Compartidos/Botones/BotonAtras";


export default function Bebidas(){
    return(
        <Container className="text-left">
            <BotonAtras url='especiales'/>
            <h2 className="text-center">Bebidas</h2>
            <Row className="text-center">
                <TemplateCard
                    titulo={"Calientes"}
                    img={calientes}
                    imgWebp={calientesWebp}
                    alt={"Calientes"}
                    url={"/bebidas-calientes"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Gaseosas"}
                    img={gaseosas}
                    imgWebp={gaseosasWebp}
                    alt={"Gaseosas"}
                    url={"/gaseosas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Heladas"}
                    img={heladas}
                    imgWebp={heladasWebp}
                    alt={"Heladas"}
                    url={"/bebidas-heladas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Vinos"}
                    img={vinos}
                    imgWebp={vinosWebp}
                    alt={"Vinos"}
                    url={"/vinos"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Licores"}
                    img={licores}
                    imgWebp={licoresWebp}
                    alt={"Licores"}
                    url={"/licores"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}