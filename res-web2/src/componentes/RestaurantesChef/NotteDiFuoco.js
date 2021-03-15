import React from "react";
import RestauranteTemplate from "../Compartidos/Restaurantes/RestauranteTemplate";

export default function NotteDiFuoco({ token }) {
    return (
        <RestauranteTemplate token={token} restaurante='Notte di Fuoco' barras={1}/>
    )
}
