import { Controller, Control  } from "react-hook-form"
import { FloatingLabelInput } from "../inputs"
import React from "react"


export const FloatLabelHook = ({
    control, 
    placeholder,
    name,
    border,
    height,
    textarea,
    className,
    type,
    size,
    disabled,
    ...rest
}:{ 
    control: Control<any>, 
    placeholder:string,
    example?:string,
    textarea?:boolean,
    name:string,
    type:string,
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
                <FloatingLabelInput
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    value={value}
                    placeholder={placeholder}
                    className={className}
                    type={type}
                    error={error}
                    name={name}
                    height={height}
                    border={border}
                    size={size||'medium'}
                    // textarea
                    {...rest}
                />
            )}
        />
    )
}