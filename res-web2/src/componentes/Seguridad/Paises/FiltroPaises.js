import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import CampoCodigoFiltro from "../../Filtros/Campos/CampoCodigoFiltro";
import CampoNombreFiltro from "../../Filtros/Campos/CampoNombreFiltro";

export default function FiltroPaises({ register, errors }){
    return(
        <Fragment> 
            <Row>
                <CampoCodigoFiltro register={register} errors={errors}/>
                <CampoNombreFiltro register={register} errors={errors}/>
            </Row>
        </Fragment>
    )
}