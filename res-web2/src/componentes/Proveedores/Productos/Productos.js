import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../../Compartidos/TemplateCard";
import comestibles from "../../../img/Proveedores/Productos/comestibles.jpg";
import limpieza from "../../../img/Proveedores/Productos/limpieza.jpg";
import utensilios from "../../../img/Proveedores/Productos/utensilios.jpg";
import tecnologia from "../../../img/Proveedores/Productos/tecnologia.png";
import desechables from "../../../img/Proveedores/Productos/desechables.png";

export default function Productos() {
    return(
        <Container>
            <h2>Productos</h2>
            <Row>
                <TemplateCard
                    titulo={"Comestibles"}
                    img={comestibles}
                    alt={"Comestibles"}
                    url={"/comestibles"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Tecnología"}
                    img={tecnologia}
                    alt={"Tecnología"}
                    url={"/tecnologia"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Desechables"}
                    img={desechables}
                    alt={"Desechables"}
                    url={"/desechables"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Utensilios"}
                    img={utensilios}
                    alt={"Utensilios"}
                    url={"/utensilios"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Limpieza"}
                    img={limpieza}
                    alt={"Limpieza"}
                    url={"/limpieza"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}