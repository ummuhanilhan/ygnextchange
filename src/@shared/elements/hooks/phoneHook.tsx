import { Controller, Control  } from "react-hook-form"
import React from "react"
import { FloatingLabelPhone } from "../phones";

export const FloatLabelPhoneHook = ({
    control, 
    placeholder,
    name,
    type,
    size,
    ...rest
}:{ 
    control: Control<any>, 
    placeholder:string,
    example?:string,
    name:string,
    type:string,
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