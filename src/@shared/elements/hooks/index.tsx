import { SigninValues } from "@pages/auth/signin"
import { Controller, useForm, useWatch, Control  } from "react-hook-form"
import { Checkbox } from "../checkboxes"
import { RentRadio, VehicleRadio } from "../radios"
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from "primereact/calendar"
import { FileUpload } from 'primereact/fileupload';
import React from "react"
import { CloudArrowUp } from "@shared/icons"
import { FiX, FiXCircle } from "react-icons/fi"
import { Toggle } from "../switchers"
import { cities } from "@utils/mock"
import { FloatingInput } from "../inputs";
import { Bordered, InputAppend, InputGroup, Select } from "../groups";
import classNames from "classnames";
import { Avatar } from "../uploads";
import { PriceCalculate } from "@components/cargo/form/payload";
import { FloatingPhone } from "../phones";

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
                    disabled={disabled}
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
    border,
    ...rest
}:{ 
    control: Control<any>, 
    placeholder:string,
    example?:string,
    name:string,
    type:string,
    border:boolean,
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
                    border={border}
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
                id={name}
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
    items,
    selectClass,
    className,
    appended,
    grouped,
    removable,
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
               error={error}
               items={items}
               onChange={onChange}
               grouped={grouped}
               appended={appended}
               className={className}
               selectClass={selectClass}
               removable={removable}
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
                error={error}
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

export const BorderedHook = ({
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
           <Bordered 
            {...rest}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            error={error}
           />
        )}
    />
    )
} 

export const InputGroupHook = ({
    control, 
    name,
    items,
    border,
    id,
    label,
    size,
    placeholder,
    error,
     ...rest
}:any) => {

    return (

        <div className={classNames(
            'bg-white rounded-md h-[4em] pr-4-',
            border && 'border',
            {'border border-red-500': error},
        )}>
            <div className="items-center 
            h-full grid grid-cols-4
            gap-2 px-2 w-full">
                
            <div className='flex-center'>
                <BorderedHook
                    placeholder='Uzunluk'
                    name={`${name}.length`}
                    control={control} 
                />
                <div>
                    <FiX className='stroke-gray-500' />
                </div>
            </div>

            <div className='flex-center'>
                <BorderedHook 
                    placeholder='Genişlik'
                    name={`${name}.width`}
                    control={control} 
                />
                <div>
                    <FiX className='stroke-gray-500' />
                </div>
            </div>

          
            <BorderedHook 
                placeholder='Yükseklik'
                name={`${name}.height`}
                control={control} 
            />
            <div className='pl-3- pr-3- border-transparent border-l-[1px] border-gray-100'>
                <SelectHook
                    {...rest}
                    name={`${name}.unit`}
                    items={items} 
                    control={control} 
                    id={id||'value'}
                    label={label||'label'}
                    size={size||'medium'}
                    grouped
                />
            </div>
        </div>  
      </div>

    )
}

export const InputAppendHook = ({
    control, 
    name,
    id,
    label,
    items,
    border,
    size,
    placeholder,
    error,
    ...rest
}:any) => {
    const sizeName = `${name}.size`;
    const unitName = `${name}.unit`;

    return (
    <Controller
        control={control}
        name={sizeName}
        render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { isTouched, isDirty, error },
        formState,
        }) => (
            <div className={classNames(
            'bg-white rounded-md h-[4em] flex items-center', 
            'pl-3 relative justify-between w-full',
            border && 'border',
            {'border border-red-500': error},

                )}>

                <input 
                    type="text" 
                    placeholder={placeholder} 
                    className="block py-2.5 px-0 w-full text-base 
                    text-gray-900 bg-transparent appearance-none 
                    peer h-full outline-none" 
                    onBlur={onBlur}  
                    onChange={onChange}  
                    value={value}
                />
                
                <div className='pl-3- border-transparent border-l-[1px] border-gray-100'>
                    <SelectHook
                        {...rest}
                        name={unitName}
                        items={items} 
                        control={control} 
                        id={id||'value'}
                        label={label||'label'}
                        size={size||'medium'}
                        appended
                    />
                </div>
            </div> 
        )}
    />
    )
}

export const PriceHook = ({
    control, 
    name,
    size,
    error,
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
                <PriceCalculate 
                   {...rest}
                   size={size||'medium'}
                   value={value}
                   error={error}
                   onChange={onChange}
                />
            )}
        />
    )
}

export const NumberHook = (props:any) => {
    let input = (
    <Controller 
        name={props.name} 
        control={props.control} 
        rules={{ required: 'Gerekli.' }} 
        render={({ 
            field: { onChange, onBlur, value, name, ref },
            fieldState: { isTouched, isDirty, error },
            formState,
         }) => (
            
            <FloatingInput 
                name="fee.price.unit" 
                placeholder="Birim Fiyat Giriniz" 
                size='medium'
                type='number'
                value={value}
                error={error}
                onChange={(e:any)=>{

                }}
                disabled={props.disabled}
            />

        )} 
    />
    )
    return input;
};