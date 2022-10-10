import { Controller  } from "react-hook-form"
import { Calendar } from "primereact/calendar"
import classNames from "classnames"
 
export const CalendarHook = ({
    control, 
    name,
    placeholder,
    className,
    selectionMode,
    error,
    ...rest     
}:any) => {
    return (
        <Controller
        control={control}
        name={name}
        render={({
            field,
            field: { onChange, onBlur, value, name, ref },
            fieldState: { isTouched, isDirty, error },
            formState,
        }) => (
            <div className={classNames(
                'relative bg-white rounded-md w-full h-[4em] flex items-center',
                {'border border-red-600':error}
            )}>
        <Calendar
            id={field.name}
            {...rest}
            {...field}
            // inputRef={calendarRef}
            value={value} 
            onChange={onChange}
            dateFormat="dd/mm/yy"
            selectionMode='range'
            className={classNames('z-10 w-full -w-28',{'p-invalid':error})}
            placeholder={placeholder||'Tarih Seçiniz'}
        />
        <div 
        // onClick={()=>calendarRef?.current?.focus()}
        className="lay absolute z-0 cursor-pointer left-0 right-0 top-0 bottom-0"></div>
      </div>
         
        )}
    />
    )
}
  