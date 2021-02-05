import React from "react";
import TemplateTablas from "../../Compartidos/TemplateTablas";

export default function TablaMarcas() {
  return (

    <TemplateTablas columnas={[
      { titulo: "Codigo", propiedad: "codigo" },
      { titulo: "Nombre", propiedad: "nombre" },
      { titulo: "Cantidad", propiedad: "cantidad" },
      { titulo: "Restaurante", propiedad: "ejemplo" }
    ]} />

  )
}