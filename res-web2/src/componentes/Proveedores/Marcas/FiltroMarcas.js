import React from "react";
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function FiltroMarcas(){
    onSubmit = () => {},
    onReset = () => {}
    return(
        <Row>
            <form> 
                <Col xl={4}>
                    <div className="form-group">
                        <label>Código</label>
                        <input 
                            placeholder="nombre"
                            className="form-control"
                        />
                    </div>
                </Col>
                <Col xl={4}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input 
                            placeholder="nombre"
                            className="form-control"
                        />
                    </div>
                </Col>
                <Col xl={4}>
                    <div className="form-group">
                        <label>Descripción</label>
                        <input 
                            placeholder="nombre"
                            className="form-control"
                        />
                    </div>
                </Col>
                <Col xl={4}>
                    <div className="form-group">
                        <label>Nacionalidad</label>
                        <input 
                            placeholder="nombre"
                            className="form-control"
                        />
                    </div>
                </Col>
                <Col xl={4}>
                    <div className="form-group">
                        <label>Empresa</label>
                        <input 
                            placeholder="nombre"
                            className="form-control"
                        />
                    </div>
                </Col>
            </form>
            
        </Row>
    )
}