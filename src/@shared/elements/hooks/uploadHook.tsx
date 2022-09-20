import { Controller  } from "react-hook-form"
import { FileUpload } from 'primereact/fileupload';
import React from "react"
import { CloudArrowUp } from "@shared/icons"

export const FileUploadHook = ({
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
            <div className="relative w-full">
                <FileUpload  
                    name={value}
                    url="./upload"  
                    accept="image/*" 
                    className="w-full py-[.2rem] border-none text-yg-orange"
                    mode="basic"
                />
                <CloudArrowUp className="absolute right-2 top-[.9rem] fill-yg-orange" height={25} />
            </div>
        )}
    />
    )
}