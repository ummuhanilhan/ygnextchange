import moment from 'moment';
import { Calendar } from 'primereact/calendar';
import React, { createRef, useRef, useState } from 'react';

export const CalendarBasic = ({
    name,
    value,
    onChange,
    children,
    placeholder,
    onBlur,
    error,
    ...rest
}:any) => {
    const defaults = (data:any) =>{
      if(typeof data == 'string') return new Date(data)
      if(data?.length==1) return [new Date(data[0]) ] 
      if(data?.length==2) return [new Date(data[0]), new Date(data[1])]
      if(data?.length>2) //...
      return undefined; 
    
    }
    
    const calendarRef = useRef<any>(null);
    const [date, setDate] = React.useState<Date | Date[] | undefined>(defaults(value))
     return (
      <div className='relative bg-white rounded-md w-full h-[4em] flex items-center'>
        <Calendar
            {...rest}
            inputRef={calendarRef}
            id="basic" 
            value={date} 
            dateFormat="dd/mm/yy"
            className='z-10 w-full -w-28'
            onChange={(e:any)=>{
              const dates = e.target.value;
              const stringified = [
                dates[0]?.toString(),
                dates[1]?.toString()
              ];
            
              setDate(dates)
              onChange(stringified)
              
            }}
            placeholder={placeholder||'Tarih Seçiniz'}
        />
        <div 
        onClick={()=>calendarRef?.current?.focus()}
        className="lay absolute z-0 cursor-pointer left-0 right-0 top-0 bottom-0"></div>
      </div>

    )
}