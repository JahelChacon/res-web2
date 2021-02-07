import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TemplateComponentes from "../../Compartidos/TemplateComponentes";
import FiltroPaises from "./FiltroPaises";
import TablaPaises from "./TablaPaises";

export default function Paises(){
    const [paises, setPaises] = useState([]);

    useEffect(() => {
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
                titulo={"Países"}
                filtros={<FiltroPaises register={register} errors={errors} />}
                reset={reset}
                onSubmit={handleSubmit(onSubmit)}
                insertar={"/paises/insertar"}
            >
            </TemplateComponentes>
            <br></br>
            <TablaPaises paises={paises}/>
        </div>
    )
}