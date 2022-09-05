import { Calendar } from 'primereact/calendar';

export const CalendarBasic = ({
    name,
    value,
    onChange,
    children,
    onBlur,
    error ,
    ...rest
}:any) => {

    return (
        <Calendar 
        value={value} 
        onChange={(e:any) => onChange(e.value)}
        placeholder=""
        ></Calendar>
    )
}