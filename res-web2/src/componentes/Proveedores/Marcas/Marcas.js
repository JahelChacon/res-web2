import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import TemplateComponentes from "../../Compartidos/TemplateComponentes";
import FiltroMarcas from "./FiltroMarcas";

export default function Marcas(){
    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = (formData) => console.log(formData);
    return(
        <TemplateComponentes
            titulo={"Marcas"}
            filtros={<FiltroMarcas register={register} errors={errors}/>}
            reset={reset}
            onSubmit={handleSubmit(onSubmit)}
        >

        </TemplateComponentes>
    )
}