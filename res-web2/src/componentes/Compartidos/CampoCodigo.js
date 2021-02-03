import React from "react";
import clsx from "clsx";

export default function CampoCodigo({ register, errors, required = true}){
    return(
        <div className="form-group">
            <label>Código</label>
            <input
                name="codigo"
                type="text"
                ref={register({
                required: required && "Debe insertar un valor",
                maxLength: { value: 255, message: "El largo máximo es de 255 caracteres" }
                })}
                className={clsx("form-control", errors.codigo && "is-invalid")}
                placeholder={"Código"}
            />
            {errors.codigo && (<div className="invalid-feedback">{errors.codigo.message}</div>)}
        </div>
    )
}