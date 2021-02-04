import React from "react";
import TemplateCard from "../Compartidos/TemplateCard";
import { Container, Row } from "react-bootstrap";
import marcas from "../../img/Proveedores/marcas.png"
import marcasWebp from "../../img/Proveedores/marcas.webp"
import productos from "../../img/Proveedores/productos.png"
import productosWebp from "../../img/Proveedores/productos.webp"
import proveedores from "../../img/Proveedores/proveedores.png"
import proveedoresWebp from "../../img/Proveedores/proveedores.webp"

export default function Proveedores(){
    return(
        <Container> 
            <h2>Proveedores</h2>
            <Row>
                <TemplateCard
                    titulo={"Marcas"}
                    img={marcas}
                    imgWebp={marcasWebp}
                    alt={"Marcas"}
                    url={"/marcas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Productos"}
                    img={productos}
                    imgWebp={productosWebp}
                    alt={"Productos"}
                    url={"/productos"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Proveedores"}
                    img={proveedores}
                    imgWebp={proveedoresWebp}
                    alt={"Proveedores"}
                    url={"/proveedores-2"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}