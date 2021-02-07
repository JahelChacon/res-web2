import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import InputTexto from "../../Compartidos/Inputs/InputTexto";
import InputSelect from "../../Compartidos/Inputs/InputSelect";

export default function FiltroMarcas({ register, errors, paises }){
    return(
        <Fragment> 
            <Row>
                <InputTexto register={register} errors={errors} label='Codigo' name='codigo' placeholder='Codigo' size='mediano'/>
                <InputTexto register={register} errors={errors} label='Nombre' name='nombre' placeholder='Nombre' size='mediano'/>
                <InputTexto register={register} errors={errors} label='Empresa' name='empresa' placeholder='Empresa' size='mediano'/>
                <InputSelect register={register} errors={errors} label='Nacionalidad' name='nacionalidad' placeholder='Nacionalidad' size='mediano'>
                    {
                        paises.map(((pais, index) =>
                        <option value={pais.nombre}>{pais.nombre}</option>
                        ))
                    }
                </InputSelect>
            </Row>
        </Fragment>
    )
}