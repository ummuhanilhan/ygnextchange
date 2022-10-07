import { Controller  } from "react-hook-form"
import React from "react"
import { cities } from "@utils/mock"
import { Select } from "@shared/elements/selects";

export const SelectHook = (props:any) => {

    return (
        <Controller
        name={props.name}
        control={props.control}
        render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { isTouched, isDirty, error },
            formState,
        }) => 
        (
            <Select 
                {...props} 
                error={error}
                value={value}
                id={props.id||'slug'}
                label={props.label||'value'}
                onChange={onChange}
                size={props.size||'medium'}
            />
        )
    }
    />
    )
}

 
 