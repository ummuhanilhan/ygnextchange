import { Controller, Control  } from "react-hook-form"
import React from "react"
import { FloatingInput } from "../inputs"


export const InputHook = ({
    control, 
    name,
    size,
    ...rest
}:{ 
    name:string,
    control: Control<any>, 
    placeholder:string,
    type?:string,
    example?:string,
    textarea?:boolean,
    border?:boolean,
    height?:string,
    size?:'small' | 'medium' | 'large',
    className?: string,
    disabled?:boolean,
  }) => {

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { isTouched, isDirty, error },
                formState,
            }) => (
                <FloatingInput 
                   {...rest}
                   size={size||'medium'}
                   value={value}
                   onChange={onChange}
                />
            )}
        />
    )
}