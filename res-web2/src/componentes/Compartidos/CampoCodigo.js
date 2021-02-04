import React from "react";
import { Col } from "react-bootstrap";

export default function CampoCodigo({ register, errors, required = true}){
    return(
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <div className="form-group">
                <label>Codigo</label>
                <input 
                    type={"text"}
                    name={"codigo"}
                    placeholder="codigo"
                    className="form-control"
                    ref={register({
                        required: true && "Port favor ingrese un valor",
                        maxLength: { value: 5, message: "El largo máximo es de 255 caracteres" }
                    })}
                />
                {errors.codigo && (<div style={{color: "red", fontSize: "14px"}}>{errors.codigo.message}</div>)}
            </div>
        </Col>
    )
}