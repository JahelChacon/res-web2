import React from "react";
import { Container, Row } from "react-bootstrap";
import TemplateCard from "../../Compartidos/TemplateCard";
import comestibles from "../../../img/Proveedores/Productos/comestibles.jpg";
import comestiblesWebp from "../../../img/Proveedores/Productos/comestibles.webp";
import limpieza from "../../../img/Proveedores/Productos/limpieza.jpg";
import limpiezaWebp from "../../../img/Proveedores/Productos/limpieza.webp";
import utensilios from "../../../img/Proveedores/Productos/utensilios.jpg";
import utensiliosWebp from "../../../img/Proveedores/Productos/utensilios.webp";
import tecnologia from "../../../img/Proveedores/Productos/tecnologia.png";
import tecnologiaWebp from "../../../img/Proveedores/Productos/tecnologia.webp";
import desechables from "../../../img/Proveedores/Productos/desechables.png";
import desechablesWebp from "../../../img/Proveedores/Productos/desechables.webp";

export default function Productos() {
    return(
        <Container>
            <h2>Productos</h2>
            <Row>
                <TemplateCard
                    titulo={"Comestibles"}
                    img={comestibles}
                    imgWebp={comestiblesWebp}
                    alt={"Comestibles"}
                    url={"/comestibles"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Tecnología"}
                    img={tecnologia}
                    imgWebp={tecnologiaWebp}
                    alt={"Tecnología"}
                    url={"/tecnologia"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Desechables"}
                    img={desechables}
                    imgWebp={desechablesWebp}
                    alt={"Desechables"}
                    url={"/desechables"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Utensilios"}
                    img={utensilios}
                    imgWebp={utensiliosWebp}
                    alt={"Utensilios"}
                    url={"/utensilios"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Limpieza"}
                    img={limpieza}
                    imgWebp={limpiezaWebp}
                    alt={"Limpieza"}
                    url={"/limpieza"}
                ></TemplateCard>
            </Row>
        </Container>
    )
}