import React from "react";
import { Col } from "react-bootstrap";

export default function CampoDescripcion({ register, errors, required = true}){
    return(
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <div className="form-group">
                <label>Descripción</label>
                <input 
                    type={"text"}
                    name={"descripcion"}
                    placeholder="Descripcion"
                    className="form-control"
                    ref={register}
                />
                {/* {errors.codigo && (<div style={{color: "red", fontSize: "14px"}}>{errors.descripcion.message}</div>)} */}
            </div>
        </Col>
    )
}





