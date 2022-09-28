import { Controller  } from "react-hook-form"
import { Calendar } from "primereact/calendar"
import { CalendarBasic } from "../calendar"
import classNames from "classnames"
 
export const CalendarHook = ({
    control, 
    name,
    placeholder,
    className,
    selectionMode,
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
            value={value} 
            onChange={onChange}
            dateFormat="dd/mm/yy"
            placeholder={placeholder}
            className={classNames(className, 'w-auto mt-2' )}
            selectionMode={selectionMode}
           />
        )}
    />
    )
}
  