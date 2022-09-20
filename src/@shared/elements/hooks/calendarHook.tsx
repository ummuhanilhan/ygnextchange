import { Controller  } from "react-hook-form"
import { Calendar } from "primereact/calendar"
 
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
 