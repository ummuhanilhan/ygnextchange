import { Calendar } from 'primereact/calendar';
import React, { createRef, useRef, useState } from 'react';

export const CalendarBasic = ({
    name,
    value,
    onChange,
    children,
    placeholder,
    onBlur,
    error ,
    ...rest
}:any) => {
    const calendarRef = useRef<any>(null);
    const [date, setDate] = React.useState<Date>(new Date(value));
     return (
      <div className='relative bg-white rounded-md w-full h-[4em] flex items-center'>
        <Calendar
          {...rest}
            inputRef={calendarRef}
            id="basic" 
            value={date} 
            dateFormat="dd/mm/yy"
            className='z-10 w-full -w-28'
            onChange={onChange}
            placeholder={placeholder||'Tarih Seçiniz'}
        />
        <div 
        onClick={()=>calendarRef?.current?.focus()}
        className="lay absolute z-0 cursor-pointer left-0 right-0 top-0 bottom-0"></div>
      </div>

    )
}