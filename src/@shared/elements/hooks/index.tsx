import { SigninValues } from "@pages/auth/signin"
import { Controller, useForm, useWatch, Control  } from "react-hook-form"
import { Checkbox } from "../checkboxes"
import { FloatingLabelInput, FloatingLabelPhone } from "../inputs"
import { VehicleRadio } from "../radios"
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from "primereact/calendar"
import { FileUpload } from 'primereact/fileupload';
import React from "react"
import { CloudArrowUp } from "@shared/icons"
import { FiXCircle } from "react-icons/fi"


export const FloatLabelHook = ({
    control, 
    placeholder,
    name,
    textarea,
    type,
    ...rest
}:{ 
    control: Control<any>, 
    placeholder:string,
    example?:string,
    textarea?:boolean,
    name:string,
    type:string,
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
                    type={type}
                    error={error}
                    name={name}
                    textarea
                    {...rest}
                />
            )}
        />
    )
}


export const FloatLabelPhoneHook = ({
    control, 
    placeholder,
    name,
    type,
    ...rest
}:{ 
    control: Control<any>, 
    placeholder:string,
    example?:string,
    name:string,
    type:string,
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
                    name={name}
                    {...rest}
                />
            )}
        />
    )
}


export const CheckboxHook = ({
    control, 
    name,
    label,
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
                <Checkbox
                    onBlur={onBlur}  
                    onChange={onChange}  
                    value={value}
                    error={error}
                    name={name}
                    label={label}
                    children={label}
                    {...rest}
                />
            )}
        />
    )
}



export const VehicleRadioHook = ({
    control, 
    name,
    label,
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
            <VehicleRadio
                onBlur={onBlur}  
                onChange={onChange}  
                value={value}
                error={error}
                name={name}
                label={label}
                children={label}
                {...rest}
            />
        )}
    />
    )
}




const cities = [
    {name: 'İstanbul', code: 'IST'},
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Paris', code: 'PRS'}
];

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



export const CalendarHook = ({
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
           <div className="bg-white w-full h-[4rem]" >
             <Calendar 
                    dateFormat="dd/mm/yy"
                    maxDate={new Date()} 
                    value={value} 
                    placeholder={placeholder}
                    className="w-auto mt-2"
                    onChange={(e:any) => onChange(e.value)}     
                />
           </div>
        )}
    />
    )
}




export const AvatarHook = ({
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
            <div className="flex flex-start">
                <div className="relative w-full">
                    <FileUpload  
                        name={value}
                        url="./upload"  
                        accept="image/*" 
                        className="w-full py-[.2rem] border-none text-yukgetir-orange"
                        mode="basic"
                    />
                    <div className="bg-white">
                        <CloudArrowUp className="absolute right-3 top-[1.1rem] bg-white fill-yukgetir-orange" height={17} />
                    </div>
                </div>
                <div className="btn p-2 bg-white rounded-md ml-2 w-14 h-14 flex items-center justify-center cursor-pointer"><FiXCircle className="text-xl text-gray-400" width={35} /></div>                 
            </div>

        )}
    />
    )
}





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
                    className="w-full py-[.2rem] border-none text-yukgetir-orange"
                    mode="basic"
                />
                <CloudArrowUp className="absolute right-2 top-[.9rem] fill-yukgetir-orange" height={25} />
            </div>
        )}
    />
    )
}


