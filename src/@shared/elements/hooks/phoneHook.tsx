import { Controller, Control  } from "react-hook-form"
import React from "react"
import { FloatingLabelPhone } from "../phones";

export const PhoneHook = ({
    control, 
    placeholder,
    name,
    type,
    size,
    ...rest
}:{ 
    control: Control<any>, 
    name:string,
    type?:string,
    example?:string,
    placeholder:string,
    border?:boolean,
    verifiable?:boolean,
    verificiation?:boolean,
    success?:boolean,
    error?:string|object|boolean,
    size?: 'small' | 'medium' | 'large';
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
                <FloatingLabelPhone
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    value={value}
                    placeholder={placeholder}
                    type={type}
                    error={error}
                    size={size||'medium'}
                    name={name}
                    {...rest}
                />
            )}
        />
    )
}