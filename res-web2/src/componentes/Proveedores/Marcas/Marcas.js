import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TemplateComponentes from "../../Compartidos/TemplateComponentes";
import FiltroMarcas from "./FiltroMarcas";
import TablaMarcas from "./TablaMarcas";

export default function Marcas(){
    const [marcas, setMarcas] = useState([]);
    const [paises, setPaises] = useState([]);

    useEffect(() => {
      fetch('https://backend-web2ulacit.herokuapp.com/marcas')
        .then(response => response.json())
        .then(data => {
          setMarcas(data)
        });
      fetch('https://backend-web2ulacit.herokuapp.com/paises')
        .then(response => response.json())
        .then(data => {
            setPaises(data)
        });
    }, []);

    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = (formData) => console.log(formData);
    return(
        <div>
            <TemplateComponentes
                titulo={"Marcas"}
                filtros={<FiltroMarcas paises={paises} register={register} errors={errors}/>}
                reset={reset}
                onSubmit={handleSubmit(onSubmit)}
                insertar={"/marcas/insertar"}
            >
            </TemplateComponentes>
            <br></br>
            <TablaMarcas marcas={marcas}/>
        </div>
    )
}