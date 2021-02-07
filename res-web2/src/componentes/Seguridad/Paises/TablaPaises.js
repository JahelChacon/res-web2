import React from "react";
import TemplateTablas from "../../Compartidos/TemplateTablas";

export default function TablaPaises({ paises }) {
  return (
    <TemplateTablas
      data={paises}
      columnas={[
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" }
      ]} />
  )
}