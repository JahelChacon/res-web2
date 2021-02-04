import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import CampoCodigo from "../../Compartidos/CampoCodigo";
import CampoNombre from "../../Compartidos/CampoNombre";
import CampoDescripcion from "../../Compartidos/CampoDescripcion";
import CampoNacionalidad from "../../Compartidos/CampoNacionalidad";
import CampoEmpresa from "../../Compartidos/CampoEmpresa";

export default function FiltroMarcas({ register, errors }){
    return(
        <Fragment> 
            <Row>
                <CampoCodigo register={register} errors={errors}/>
                <CampoNombre register={register} errors={errors}/>
                <CampoDescripcion register={register} errors={errors}/>
                <CampoNacionalidad register={register} errors={errors}/>
                <CampoEmpresa register={register} errors={errors}/>
            </Row>
        </Fragment>
    )
}