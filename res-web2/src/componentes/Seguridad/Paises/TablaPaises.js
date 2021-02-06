import React from "react";
import TemplateTablas from "../../Compartidos/TemplateTablas";

export default function TablaPaises() {
  return (

    <TemplateTablas columnas={[
      { titulo: "Codigo", propiedad: "codigo" },
      { titulo: "Nombre", propiedad: "nombre" }
    ]} />

  )
}