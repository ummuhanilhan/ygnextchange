import { Controller  } from "react-hook-form"
import { FileUpload } from 'primereact/fileupload';
import React from "react"
import { CloudArrowUp } from "@shared/icons"
import { Upload } from "../uploads";

export const UploadHook = ({
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
            <Upload  
                {...rest}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                control={control}
                height="h-[4em]"
            />
         )}
    />
    )
}