import React from "react";
import TemplateCard from "../Compartidos/TemplateCard";
import { Container, Row } from "react-bootstrap";
import marcas from "../../img/Proveedores/marcas.png"
import productos from "../../img/Proveedores/productos.png"
import proveedores from "../../img/Proveedores/proveedores.png"

export default function Proveedores(){
    return(
        <Container> 
            <h2>Proveedores</h2>
            <Row>
                <TemplateCard
                    titulo={"Marcas"}
                    img={marcas}
                    alt={"Marcas"}
                    url={"/marcas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Productos"}
                    img={productos}
                    alt={"Productos"}
                    url={"/productos"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Proveedores"}
                    img={proveedores}
                    alt={"Proveedores"}
                    url={"/proveedores-proveedores"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}