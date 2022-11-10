import classNames from "classnames";
import React, { createRef } from "react";
import { CountryCodeDropdown, InputAppend } from "./inputs";


export const FloatingLabelPhone = ({ 
    size,
    type,
    name,
    placeholder,
   // value,
   // onChange,
    onBlur,
    error }:any) => {
      const [value, setValue] = React.useState('')
      const onChange = (val:string) => setValue(val)
      const [active, setActive] = React.useState<any>(value);
      const [hide, setHide] = React.useState(true);
      const [status, setStatus] = React.useState(false);
      const inputRef = createRef<HTMLInputElement>();
      const [code, setCode] = React.useState<any>({});
      const [open, setOpen] = React.useState(false);
    
      function handleActivation(e:any) {
        setActive(!!e.target.value);
        onChange(e.target.value);
      }
      function handleLabel(e:any) {
        setOpen(true)
        const node = inputRef.current;
        node && node.focus();
      }
  
      const isActive = value || active;
  
    React.useEffect(()=>{
      setCode({country:'', countryCode:''});
    },[active])
  
    React.useEffect(()=>{
      if(value)
        setActive(true)
      else
        setActive(false)
    },[value])
  
  
    function handleCode(data:any){
      setCode(data)
    } 
  
    return (
      <div className={classNames(
        'w-full floatinglabel-phone',
        {'error': error},
        size||'medium',
         )}
        >
          <div  className={classNames(
            'relative border rounded input border-box',
            'mb-1- h-[55px]- h-[4rem] border-gray-500 border-opacity-25',
            'flex items-center justify-between',
            {'active':active},
            {'passive':!active},
          )}>
            
                <div className={classNames(
                  'flex items-center mt-[1.44rem] absolute left-[.5rem] top-[.4rem]',
                  {'hidden':!active},
                )}>
                  <CountryCodeDropdown 
                    status={status}
                    setStatus={setStatus}
                    handleCode={handleCode}
                  />
                  <p className="font-bold ml-1 text-sm">+{code.countryCode||'90'}</p>
                </div>
            <input  
              className={classNames(
                'outline-none w-full h-full rounded bg-transparent text-sm pr-10',
                'transition-all duration-200 ease-in-out p-2',
                value || active ? "pt-6 text-gray-500 pl-[3.8rem]" : "pt-2", 
                active && code.countryCode?.length == 2 ? 'pl-[3.8rem]' : '',
                active && code.countryCode?.length > 2 ? 'pl-[4.5rem]' : '',
                active && code.countryCode?.length == 4 ? 'pl-[4.8rem]' : '',
              )}
              id={name}
              value={value}
              type="text"
              ref={inputRef}
              onTouchMove={handleActivation}
              onChange={handleActivation}
              
            />
            <label
              className={[
                "absolute top-0 left-0 flex items-center p-2 transition-all duration-200 ease-in-out",
                value || active ? "text-xs font-medium " : "text-sm text-gray-500 pt-3"
              ].join(" ")}
              htmlFor={name}
              onClick={handleLabel}
              onTouchMove={handleLabel}
  
            >
              {placeholder}
            </label>
            <InputAppend 
               type={type}
               color={!!error?'fill-red-500':'fill-gray-500'}
               hide={hide}
               value={value}
               onChange={onChange}
               active={active}
               setActive={setActive}
               status={status}
               toggle={()=>setHide(!hide)}
          />
          </div>
      </div>
    );
  }
  