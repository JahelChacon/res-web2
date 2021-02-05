import React from "react";
import { Col } from "react-bootstrap";

export default function CampoEmpresaFiltro({ register, errors, required = true}){
    return(
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <div className="form-group">
                <label>Empresa</label>
                <input 
                    type={"text"}
                    name={"empresa"}
                    placeholder="Empresa"
                    className="form-control"
                    ref={register}
                />
                {/* {errors.codigo && (<div style={{color: "red", fontSize: "14px"}}>{errors.empresa.message}</div>)} */}
            </div>
        </Col>
    )
}





