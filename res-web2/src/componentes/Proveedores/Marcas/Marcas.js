import React from "react";
import { useForm } from "react-hook-form";
import TemplateComponentes from "../../Compartidos/TemplateComponentes";
import FiltroMarcas from "./FiltroMarcas";
import TablaMarcas from "./TablaMarcas";

export default function Marcas(){
    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = (formData) => console.log(formData);
    return(
        <div>
        <TemplateComponentes
            titulo={"Marcas"}
            filtros={<FiltroMarcas register={register} errors={errors}/>}
            reset={reset}
            onSubmit={handleSubmit(onSubmit)}
            insertarURL={"/marcas/insertar"}
        >
        
        <TablaMarcas />
        </TemplateComponentes>
        
        
        
        </div>
    )
}