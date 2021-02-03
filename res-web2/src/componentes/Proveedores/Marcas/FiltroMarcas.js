import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";


export default function FiltroMarcas(){
    return(
        <Fragment> 
            <Row>
                <Col xl={4}>
                <div className="form-group">
                        <label>Codigo</label>
                        <input 
                            name="codigo"
                            placeholder="Codigo"
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
            </Row>
        </Fragment>
    )
}