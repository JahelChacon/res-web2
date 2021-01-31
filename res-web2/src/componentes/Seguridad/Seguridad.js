import React from "react";
import TemplateCard from "../Compartidos/TemplateCard";
import hols from "../../img/Inicio/reportes.png";

export default function Seguridad(){
    return(
        <div className="container">
            <h2>Seguridad</h2>
            <div className="row">
                <TemplateCard
                    titulo={"Ejemplo"}
                    img={hols}
                    alt={"Seguridad"}
                    url={"/seguridad"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Ejemplo"}
                    img={hols}
                    alt={"Seguridad"}
                    url={"/seguridad"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Ejemplo"}
                    img={hols}
                    alt={"Seguridad"}
                    url={"/seguridad"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Ejemplo"}
                    img={hols}
                    alt={"Seguridad"}
                    url={"/seguridad"}
                ></TemplateCard>
            </div>
        </div>
    )
}