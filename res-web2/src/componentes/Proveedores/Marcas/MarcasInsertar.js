import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row } from "react-bootstrap";
import CampoCodigo from "../../Compartidos/CampoCodigo";
import CampoNombre from "../../Compartidos/CampoNombre";
import CampoDescripcion from "../../Compartidos/CampoDescripcion";
import CampoNacionalidad from "../../Compartidos/CampoNacionalidad";
import CampoEmpresa from "../../Compartidos/CampoEmpresa";


export default function MarcasInsertar(){
    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = (formData) => console.log(formData);

    return(
        <Container>
            <Row>
                <CampoCodigo register={register} errors={errors}/>
                <CampoNombre register={register} errors={errors}/>
                <CampoDescripcion register={register} errors={errors}/>
                <CampoNacionalidad register={register} errors={errors}/>
                <CampoEmpresa register={register} errors={errors}/>
            </Row>
        </Container>
    )
}