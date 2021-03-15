import React from "react";
import RestauranteTemplate from "../Compartidos/Restaurantes/RestauranteTemplate";

export default function PiccolaStella({ token }) {
    return (
        <RestauranteTemplate token={token} restaurante='Piccola Stella' barras={2}/>
    )
}
