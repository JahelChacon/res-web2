import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../../../Compartidos/TemplateCard";
import calientes from "../../../../img/Administracion/Especiales/Bebidas/calientes.png";
import gaseosas from "../../../../img/Administracion/Especiales/Bebidas/gaseosas.png";
import heladas from "../../../../img/Administracion/Especiales/Bebidas/heladas.png";
import vinos from "../../../../img/Administracion/Especiales/Bebidas/vinos.png";
import licores from "../../../../img/Administracion/Especiales/Bebidas/licores.png";


export default function Bebidas(){
    return(
        <Container>
            <h2>Bebidas</h2>
            <Row>
                <TemplateCard
                    titulo={"Calientes"}
                    img={calientes}
                    alt={"Calientes"}
                    url={"/bebidas-calientes"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Gaseosas"}
                    img={gaseosas}
                    alt={"Gaseosas"}
                    url={"/gaseosas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Heladas"}
                    img={heladas}
                    alt={"Heladas"}
                    url={"/bebidas-heladas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Vinos"}
                    img={vinos}
                    alt={"Vinos"}
                    url={"/vinos"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Licores"}
                    img={licores}
                    alt={"Licores"}
                    url={"/licores"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}