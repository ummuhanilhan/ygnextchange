import { Controller } from "react-hook-form"
import React from "react"
import { Tag } from "../tags"

export const TagHook = ({
    control, 
    name,
    label,
    error,
    id,
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
                onChange={(data:any)=>{
                    console.log('data', data);
                    onChange(data)
                }}
                id={id||'slug'}
                label={label||'value'}
                error={error}
            />
        )}
    />
    )
}
