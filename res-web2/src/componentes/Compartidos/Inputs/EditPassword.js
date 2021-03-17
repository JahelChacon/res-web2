import React, { useState } from "react";
import InputPassword from "./InputPassword";
import InputCheckbox from "./InputCheckbox";

export default function EditPassword({
    name,
    register,
    errors,
    size = 'grande',
}) {
    const [isPassworRequired, setIsPassworRequired] = useState(false);
    const [contrasenaValor, setContrasenaValor] = useState(false);
    const [cambioContrasenaValor, setCambioContrasenaValor] = useState(false);

    const handleCheckBox = () => {
        setIsPassworRequired(!isPassworRequired);
        setContrasenaValor(false);
        setCambioContrasenaValor(false);
    }

    const handleChangeContrasena = (e) => {
        setContrasenaValor(e.target.value);
    }

    const handleChangeConfirmarContrasena = (e) => {
        setCambioContrasenaValor(e.target.value);
    }

    return (
        <React.Fragment>
            <InputCheckbox
                label='Cambio de Contraseña'
                name='cambioContrasena'
                onChange={handleCheckBox}
                size={size}
                register={register} />
            {
                isPassworRequired &&
                <React.Fragment>
                    <InputPassword
                        label='Contraseña'
                        name={name}
                        placeholder='Contraseña'
                        size={size}
                        required={isPassworRequired}
                        register={register}
                        onChange={handleChangeContrasena}
                        errors={errors} />
                    <InputPassword
                        label='Confirmar Contrasena'
                        name='contrasenaConfirmar'
                        placeholder='Confirmar Contrasena'
                        size={size}
                        required={isPassworRequired}
                        register={register}
                        onChange={handleChangeConfirmarContrasena}
                        errors={errors} />
                    {
                        (contrasenaValor !== cambioContrasenaValor) &&
                        <div className='pl-3 pb-3' style={{ color: "red", fontSize: "14px", width: "100%" }}>Las contraseñas deben coincidir</div>
                    }
                </React.Fragment>
            }

        </React.Fragment>
    )
}
