import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

export default function CampoNacionalidadFiltro({ register, errors, required = true}){
    const [paises, setPaises] = useState([]);

    useEffect(() => {
      fetch('https://backend-web2ulacit.herokuapp.com/paises')
        .then(response => response.json())
        .then(data => {
            setPaises(data)
        });
    }, []);

    return(
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <div className="form-group">
                <label>Nacionalidad</label>
                <select 
                    name={"nacionalidad"}
                    className="form-control"
                    ref={register({ 
                        required: true && "Port favor ingrese un valor",
                        maxLength: { value: 10, message: "El largo máximo es de 10 caracteres" },
                        minLength: { value: 3, message: "El largo mínimo es de 3 caracteres" }
                    })}>
                    {
                        paises.map(((pais, index) =>
                        <option value={pais.nombre}>{pais.nombre}</option>
                        ))
                    }
                </select>
                {/* {errors.codigo && (<div style={{color: "red", fontSize: "14px"}}>{errors.nacionalidad.message}</div>)} */}
            </div>
        </Col>
    )
}





