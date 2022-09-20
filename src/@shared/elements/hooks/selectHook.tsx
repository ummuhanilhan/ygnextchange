import { Controller  } from "react-hook-form"
import { MultiSelect } from 'primereact/multiselect';
import React from "react"
import { cities } from "@utils/mock"
import { FloatingSelect } from "@shared/elements/selects";

export const SelectHook = (props:any) => {

    return (
        <Controller
        control={props.control}
        name={props.name}
        render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { isTouched, isDirty, error },
            formState,
        }) => (
            <FloatingSelect 
                {...props} 
                value={value}
                setValue={onChange}
            />
        )}
    />
    )
}

 

export const MultiSelectHook = ({
    control, 
    name,
    placeholder,
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
            <MultiSelect 
                value={value} 
                options={cities}
                placeholder={placeholder}
                optionLabel="name" 
                optionValue="code"
                className="w-full py-[.43rem]"
                onChange={(e) => onChange(e.value)}
            />
        )}
    />
    )
}