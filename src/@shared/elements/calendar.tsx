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
    const defaults = (d:any) =>{
      if(d && typeof d == 'string') return [format(d) ]
      if(d && d?.length==1) return [format(d[0]) ] 
      if(d && d?.length==2) return [format(d[0]), format(d[1])]
      if(d && d?.length>2) //...
      return undefined; 
    }
    const calendarRef = useRef<any>(null);
    const [date, setDate] = React.useState(defaults(value)) 
    
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
                moment(dates[0]).format('DD/MM/YYYY'),
                moment(dates[1]).format('DD/MM/YYYY')
              ];
              setDate(dates) 
              onChange(dates)
            }}
            placeholder={placeholder||'Tarih Seçiniz'}
        />
        <div 
        onClick={()=>calendarRef?.current?.focus()}
        className="lay absolute z-0 cursor-pointer left-0 right-0 top-0 bottom-0"></div>
      </div>

    )
}

const format = (date:any)=>{
  if(!date) return;
  return new Date(moment(date, 'DD-MM-YYYY').format())
}