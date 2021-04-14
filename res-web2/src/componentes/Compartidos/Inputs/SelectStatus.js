import React from "react";
import { STATUS_MESA } from "../../../utils/utils";
import InputSelect from "./InputSelect";

export default function SelectStatus({
    value,
    register,
    errors,
    label,
    name,
    size,
    required,
    disabled,
}) {
    return (
            <InputSelect
                value={value}
                required={required}
                disabled={disabled}
                label={label}
                name={name}
                size={size}
                register={register}
                errors={errors}>
                <option value={STATUS_MESA.LIBRE}>{STATUS_MESA.LIBRE}</option>
                <option value={STATUS_MESA.OCUPADA}>{STATUS_MESA.OCUPADA}</option>
                <option value={STATUS_MESA.RESERVADA}>{STATUS_MESA.RESERVADA}</option>
            </InputSelect>
    )
}
