import React, { Fragment, useState } from "react";
import login from "../../img/Ayuda/login.png";
import main_menu from "../../img/Ayuda/main_menu.png";
import menu_seguridad from "../../img/Ayuda/menu_seguridad.png";
import menu_admin from "../../img/Ayuda/menu_admin.png";
import menu_proveedores from "../../img/Ayuda/menu_proveedores.png";
import menu_reportes from "../../img/Ayuda/menu_reportes.png";
import cliente_principal from "../../img/Ayuda/cliente_principal.png";
import filtros from "../../img/Ayuda/filtros.png";


function Accordion({ header, children }) {
    const [showBody, setShowBody] = useState(false);
    return (
      <div class="card mb-4" style={{
        height: 'auto'
      }}>
        <div class="card-header flex" style={{
          alignItems: 'center',
          cursor: 'pointer'
        }} onClick={() => setShowBody(show => !show)}>
          <div className="mr-2">{showBody ? '🟢' : '🔵'}</div>
          <div>{header}</div>
        </div>
        {showBody && (
          <div class="card-body">
            {children}
          </div>
        )}
      </div>
    );
  }

export default function Ayuda(){
    return(
        <Fragment>
            <h1 className="mb-4">Ayuda</h1>
            <Accordion header={(<h2>Iniciar Sesión</h2>)}>
                <img src={login} style={{ width: "100%", height: "100%" }} />
            </Accordion>
            <Accordion header={(<h2>Menú principal</h2>)}>
                <img src={main_menu} style={{ width: "100%", height: "100%" }} />
            </Accordion>
            <Accordion header={(<h2>Menú de seguridad</h2>)}>
                <img src={menu_seguridad} style={{ width: "100%", height: "100%" }} />
            </Accordion>
            <Accordion header={(<h2>Menú de administración</h2>)}>
                <img src={menu_admin} style={{ width: "100%", height: "100%" }} />
            </Accordion>
            <Accordion header={(<h2>Menú de reportes</h2>)}>
                <img src={menu_reportes} style={{ width: "100%", height: "100%" }} />
            </Accordion>
            <Accordion header={(<h2>Menú de proveedores</h2>)}>
                <img src={menu_proveedores} style={{ width: "100%", height: "100%" }} />
            </Accordion>
            <Accordion header={(<h2>Página de los clientes</h2>)}>
                <img src={cliente_principal} style={{ width: "100%", height: "100%" }} />
            </Accordion>
            <Accordion header={(<h2>Filtros</h2>)}>
                <img src={filtros} style={{ width: "100%", height: "100%" }} />
            </Accordion>
        </Fragment>
    )   
}