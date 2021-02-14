import React from "react";
import { Container, Row } from "react-bootstrap"
import TemplateCard from "../Compartidos/Cards/TemplateCard";
import caja from "../../img/Seguridad/caja.png";
import cajaWebp from "../../img/Seguridad/caja.webp";
import consecutivos from "../../img/Seguridad/consecutivos.png";
import consecutivosWebp from "../../img/Seguridad/consecutivos.webp";
import paises from "../../img/Seguridad/paises.png";
import paisesWebp from "../../img/Seguridad/paises.webp";
import medidas from "../../img/Seguridad/medidas.png";
import medidasWebp from "../../img/Seguridad/medidas.webp";
import roles from "../../img/Seguridad/roles.png";
import rolesWebp from "../../img/Seguridad/roles.webp";
import usuarios from "../../img/Seguridad/usuarios.png";
import usuariosWebp from "../../img/Seguridad/usuarios.webp";


export default function Seguridad({ usuario }) {
    return (
        <Container>
            <h2>Seguridad</h2>
            <Row>
                {(usuario.administradorSistema || usuario.administradorSeguridad) &&
                    <TemplateCard
                        titulo={"Usuarios"}
                        img={usuarios}
                        imgWebp={usuariosWebp}
                        alt={"Usuarios"}
                        url={"/usuarios"}
                    ></TemplateCard>
                }
                {(usuario.administradorSistema ||
                    usuario.administradorCuentas ||
                    usuario.administradorSeguridad) &&
                    <TemplateCard
                        titulo={"Cajas"}
                        img={caja}
                        imgWebp={cajaWebp}
                        alt={"Cajas"}
                        url={"/cajas"}
                    ></TemplateCard>
                }
                {(usuario.administradorSistema || usuario.administradorSeguridad) &&
                    <React.Fragment>
                        <TemplateCard
                            titulo={"Consecutivos"}
                            img={consecutivos}
                            imgWebp={consecutivosWebp}
                            alt={"Consecutivos"}
                            url={"/consecutivos"}
                        ></TemplateCard>
                        <TemplateCard
                            titulo={"Roles"}
                            img={roles}
                            imgWebp={rolesWebp}
                            alt={"Roles"}
                            url={"/roles"}
                        ></TemplateCard>
                        <TemplateCard
                            titulo={"Países"}
                            img={paises}
                            imgWebp={paisesWebp}
                            alt={"Países"}
                            url={"/paises"}
                        ></TemplateCard>
                        <TemplateCard
                            titulo={"Unidad de Medida"}
                            img={medidas}
                            imgWebp={medidasWebp}
                            alt={"Unidad de Medida"}
                            url={"/medidas"}
                        ></TemplateCard>
                    </React.Fragment>
                }
            </Row>
        </Container>
    )
}