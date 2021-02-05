import React from "react";
import { Col } from "react-bootstrap";

export default function CampoEmpresa({ register, errors, required = true}){
    return(
        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="form-group">
                <label>Empresa</label>
                <input 
                    type={"text"}
                    name={"empresa"}
                    placeholder="Empresa"
                    className="form-control"
                    ref={register({
                        required: true && "Port favor ingrese un valor",
                        maxLength: { value: 10, message: "El largo máximo es de 10 caracteres" },
                        minLength: { value: 3, message: "El largo mínimo es de 3 caracteres" }
                    })}
                />
                {errors.empresa && (<div style={{color: "red", fontSize: "14px"}}>{errors.empresa.message}</div>)}
            </div>
        </Col>
    )
}





