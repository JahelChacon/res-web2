import React from "react";
import TemplateCard from "../Compartidos/Cards/TemplateCard";
import { Container, Row } from "react-bootstrap";
import marcas from "../../img/Proveedores/marcas.png"
import marcasWebp from "../../img/Proveedores/marcas.webp"
import productos from "../../img/Proveedores/productos.png"
import productosWebp from "../../img/Proveedores/productos.webp"
import proveedores from "../../img/Proveedores/proveedores.png"
import proveedoresWebp from "../../img/Proveedores/proveedores.webp"
import BotonAtras from "../Compartidos/Botones/BotonAtras";

export default function ProveedoresInicio(){
    return(
        <Container className="text-left"> 
            <BotonAtras/>
            <h2 className="text-center">Proveedores</h2>
            <Row className="text-center">
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
                    url={"/proveedores"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}