import React, { useState } from "react";
import InputPassword from "./InputPassword";

export default function InsertarPassword({
    name,
    register,
    errors,
    size = 'grande',
}) {
    const [contrasenaValor, setContrasenaValor] = useState(false);
    const [cambioContrasenaValor, setCambioContrasenaValor] = useState(false);

    const handleChangeContrasena = (e) => {
        setContrasenaValor(e.target.value);
    }

    const handleChangeConfirmarContrasena = (e) => {
        setCambioContrasenaValor(e.target.value);
    }

    return (
        <React.Fragment>
            <InputPassword
                label='Contraseña'
                name={name}
                placeholder='Contraseña'
                size={size}
                required={true}
                register={register}
                onChange={handleChangeContrasena}
                errors={errors} />
            <InputPassword
                label='Confirmar Contrasena'
                name='contrasenaConfirmar'
                placeholder='Confirmar Contrasena'
                size={size}
                required={true}
                register={register}
                onChange={handleChangeConfirmarContrasena}
                errors={errors} />
            {
                (contrasenaValor !== cambioContrasenaValor) &&
                <div className='pl-3 pb-3' style={{ color: "red", fontSize: "14px", width: "100%" }}>Las contraseñas deben coincidir</div>
            }
        </React.Fragment>
    )
}
