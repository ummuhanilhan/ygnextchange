import { SigninValues } from "@pages/auth/signin"
import { Controller, useForm, useWatch, Control  } from "react-hook-form"
import { Checkbox } from "../checkboxes"
import { RentRadio, VehicleRadio } from "../radios"
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from "primereact/calendar"
import { FileUpload } from 'primereact/fileupload';
import React from "react"
import { CloudArrowUp } from "@shared/icons"
import { FiXCircle } from "react-icons/fi"
import { Toggle } from "../switchers"
import { cities } from "@utils/mock"
import { FloatingInput, FloatingPhone } from "../inputs";
import { InputAppend, InputGroup, Select } from "../groups";
import classNames from "classnames";
import { Avatar } from "../uploads";

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
                <FloatingInput
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
                <FloatingPhone
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

export const RentRadioHook = ({
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
            <RentRadio
                onBlur={onBlur}  
                onChange={onChange}  
                value={value}
                error={error}
                name={name}
                placeholder={label}
                {...rest}
            />
        )}
    />
    )
}

export const SwithcherHook = ({
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
            <Toggle
                onBlur={onBlur}  
                onChange={onChange}  
                value={value}
                error={error}
                name={name}
                {...rest}
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

export const SelectHook = ({
    control, 
    name,
    label,
    size,
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
            <Select 
               {...rest}
               size={size||'medium'}
               value={value}
               onChange={onChange}
            />
        )}
    />
    )
}

export const AvatarHook = (props:any) => {
    return (
        <Controller
        control={props.control}
        name={props.name}
        render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { isTouched, isDirty, error },
            formState,
        }) => (
            <Avatar 
                {...props}
                value={value}
                onChange={onChange}
            />
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
                    className="w-full py-[.2rem] border-none text-yg-orange"
                    mode="basic"
                />
                <CloudArrowUp className="absolute right-2 top-[.9rem] fill-yg-orange" height={25} />
            </div>
        )}
    />
    )
}

export const MultiTagHook = ({
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
            <div>

            </div>
        )}
    />
    )
}

export const InputGroupHook = ({
    control, 
    name,
    label,
    items,
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
            <InputGroup
                {...rest}
                value={value}
                onChange={onChange}
                items={items}
            />
        )}
    />
    )
}


export const InputAppendHook = ({
    control, 
    name,
    label,
    items,
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
            <InputAppend
                {...rest}
                value={value}
                onChange={onChange}
                items={items}
            />
        )}
    />
    )
}