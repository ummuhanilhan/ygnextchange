import { Controller } from "react-hook-form"
import React from "react"
import { Tag } from "../tags"

export const TagHook = ({
    control, 
    name,
    label,
    ...rest
}:any) => {

    return (
        <Controller
        control={control}
        name={name}
        render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { isTouched, isDirty, error },
            formState,
        }) => (
            <Tag
                {...rest}
                value={value}
                onChange={onChange}
            />
        )}
    />
    )
}