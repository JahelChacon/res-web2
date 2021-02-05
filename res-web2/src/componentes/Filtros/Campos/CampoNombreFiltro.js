import React from "react";
import { Col } from "react-bootstrap";

export default function CampoNombreFiltro({ register, errors, required = true}){
    return(
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <div className="form-group">
                <label>Nombre</label>
                <input 
                    type={"text"}
                    name={"nombre"}
                    placeholder={"Nombre"}
                    className="form-control"
                    ref={register}
                />
                {/* {errors.codigo && (<div style={{color: "red", fontSize: "14px"}}>{errors.nombre.message}</div>)} */}
            </div>
        </Col>
    )
}





