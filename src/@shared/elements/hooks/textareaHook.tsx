import { Controller, Control  } from "react-hook-form"
import React from "react"
import { FloatingInput } from "../inputs"
import { Textarea } from "../textareas"


export const TextareaHook = ({
    control, 
    name,
    size,
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
                <Textarea 
                   {...rest}
                   size={size||'medium'}
                   value={value}
                   onChange={onChange}
                />
            )}
        />
    )
}