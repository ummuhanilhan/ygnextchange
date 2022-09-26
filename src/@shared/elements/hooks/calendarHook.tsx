import { Controller  } from "react-hook-form"
import { Calendar } from "primereact/calendar"
import { CalendarBasic } from "../calendar"
import classNames from "classnames"
 
export const CalendarHook = ({
    control, 
    name,
    placeholder,
    className,
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
           <CalendarBasic 
            {...rest}
            dateFormat="dd/mm/yy"
            value={value} 
            placeholder={placeholder}
            className={classNames(className, 'w-auto mt-2' )}
            onChange={onChange}
            // onChange={(e:any) => onChange(e.value)}     

           />
        )}
    />
    )
}
 