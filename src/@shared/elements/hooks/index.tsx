import { SigninValues } from "@pages/auth/signin"
import { Controller, useForm, useWatch, Control  } from "react-hook-form"
import { Checkbox } from "../checkboxes"
import { FloatingLabelInput, FloatingLabelPhone } from "../inputs"


export const FloatLabelHook = ({
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
                <FloatingLabelInput
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    value={value}
                    ref={ref}
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
                    ref={ref}
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
                    ref={ref}
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

