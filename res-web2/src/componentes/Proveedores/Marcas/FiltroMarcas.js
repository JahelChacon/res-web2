import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import CampoCodigoFiltro from "../../Filtros/Campos/CampoCodigoFiltro";
import CampoNombreFiltro from "../../Filtros/Campos/CampoNombreFiltro";
import CampoDescripcionFiltro from "../../Filtros/Campos/CampoDescripcionFiltro";
import CampoNacionalidadFiltro from "../../Filtros/Campos/CampoNacionalidadFiltro";
import CampoEmpresaFiltro from "../../Filtros/Campos/CampoEmpresaFiltro";

export default function FiltroMarcas({ register, errors }){
    return(
        <Fragment> 
            <Row>
                <CampoCodigoFiltro register={register} errors={errors}/>
                <CampoNombreFiltro register={register} errors={errors}/>
                <CampoDescripcionFiltro register={register} errors={errors}/>
                <CampoNacionalidadFiltro register={register} errors={errors}/>
                <CampoEmpresaFiltro register={register} errors={errors}/>
            </Row>
        </Fragment>
    )
}