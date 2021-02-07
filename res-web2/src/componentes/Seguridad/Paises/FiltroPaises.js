import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import InputTexto from "../../Compartidos/Inputs/InputTexto";

export default function FiltroPaises({ register, errors }){
    return(
        <Fragment> 
            <Row>
                <InputTexto register={register} errors={errors} label='Codigo' name='codigo' placeholder='Codigo' size='mediano'/>
                <InputTexto register={register} errors={errors} label='Nombre' name='nombre' placeholder='Nombre' size='mediano'/>
            </Row>
        </Fragment>
    )
}