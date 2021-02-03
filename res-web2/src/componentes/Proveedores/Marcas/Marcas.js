import React from "react";
import { Container } from "react-bootstrap";
import TemplateComponentes from "../../Compartidos/TemplateComponentes";
import FiltroMarcas from "./FiltroMarcas";

export default function Marcas(){
    return(
        <TemplateComponentes
            titulo={"Marcas"}
            filtros={<FiltroMarcas />}
        >

        </TemplateComponentes>
    )
}