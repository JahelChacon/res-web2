import React from "react";
import TemplateCard from "../Compartidos/TemplateCard";
import caja from "../../img/Seguridad/caja.png";
import consecutivos from "../../img/Seguridad/consecutivos.png";
import paises from "../../img/Seguridad/paises.png";
import medidas from "../../img/Seguridad/medidas.png";
import roles from "../../img/Seguridad/roles.png";
import usuarios from "../../img/Seguridad/usuarios.png";


export default function Seguridad(){
    return(
        <div className="container">
            <h2>Seguridad</h2>
            <div className="row">
                <TemplateCard
                    titulo={"Usuarios"}
                    img={usuarios}
                    alt={"Usuarios"}
                    url={"/usuarios"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Cajas"}
                    img={caja}
                    alt={"Cajas"}
                    url={"/cajas"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Consecutivos"}
                    img={consecutivos}
                    alt={"Consecutivos"}
                    url={"/consecutivos"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Roles"}
                    img={roles}
                    alt={"Roles"}
                    url={"/roles"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Países"}
                    img={paises}
                    alt={"Países"}
                    url={"/paises"}
                ></TemplateCard>
                <TemplateCard
                    titulo={"Unidad de Medida"}
                    img={medidas}
                    alt={"Unidad de Medida"}
                    url={"/medidas"}
                ></TemplateCard>
                
            </div>
        </div>
    )
}