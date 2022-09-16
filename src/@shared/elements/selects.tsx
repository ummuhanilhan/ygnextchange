import { ArrowClockwise, CheckCircle, ChevronDown, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React, { createRef, useRef } from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";
import rawCountries from "@utils/dummy/rawCountries";
import tr from "@utils/dummy/countries/tr.json";
import classNames from "classnames";
import { FloatInputProps } from "./inputs";
import Outside from "@utils/useoutside";

export const FloatingSelect = ({ 
  size,
  type,
  name,
  height,
  placeholder,
  example='',
  border,
  className,
  verifiable,
  verified,
  mini,
  // value,
  // onChange,
  onBlur,
  appendix,
  backgroundColor,
  error, 
  success
}:FloatInputProps) => {
  const [value, setValue] = React.useState('')
  const onChange = (val:string) => setValue(val)
  
    const [active, setActive] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    return (
      <div className={classnames(
      'w-full flashback floatinglabel-selects rounded-md relative', 
       className,
       size||'medium',
       backgroundColor||'bg-white',
       {'error': error},
      {'success': success},
      )}>
          <Outside cb={()=>setOpen(false)}>

          <div 
          onClick={()=>{
            setOpen(!open);
           
          }}
          className={classNames(
          "select relative border rounded-md w-full cursor-pointer",
          'flex items-center justify-end',
            size=='small' && 'h-[55px] ',
            size=='medium' && 'h-[4em]',
            size=='large' && 'h-[4em]',
            {'active':active},
            {'passive':!active},
          )}
          >
         
            <label
              className={classNames(
                'p-2 absolute top-0 left-0 rounded-md flex items-center transition-all duration-200 ease-in-out cursor-pointer',
                active ? "font-medium " : " text-gray-500 ",
                size=='small' ? (active ? 'text-xs' : 'text-sm pt-4') : '',
                size=='medium' ? (active ? 'text-xs pt-3' : 'text-base pt-5') : '',
                size=='large' ? (active ? 'text-sm' : 'text-base pt-5') : '',
              )}
              htmlFor={name}
            >
              {placeholder}
            </label>

            <InputAppend 
              type={type}
              active={active}
              color={!!error?'fill-red-500':'fill-gray-500'}
              value={value}
              onChange={onChange}
              setActive={setActive}
              status={true}
          />
          </div>

            <ul className={classNames(
              'select-dropdown absolute top-16 mt-2 right-0',
              'bg-white w-full h-32 z-10 rounded-md',
              'drop-shadow-md',
              {'hidden':!open}
            )}>
                  <li className={classNames('p-2')}></li>
            </ul>
          </Outside>
    
          {false && error && (
            <p className="mb-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Some error message. </p>
          )}
      </div>
    );
} 


/**
 * Appdendix of input 
 * @param type
 * @returns callback
 */
 export const InputAppend = ({
  type, 
  value, 
  onChange, 
  color, 
  hide, 
  toggle, 
  active, 
  setActive, 
  verifiable, 
  verified, 
  status
}:any) =>{

  return (
    <React.Fragment> 
        <div className=" cursor-pointer w-22
        absolute top-0 bottom-0
         h-full bg-blue-500- flex items-center justify-center pl-2 pr-4">
      
           <ChevronDown
              onClick={()=>setActive(!active)} 
              className={[
                "icon h-4 icon-gray absolute- right-4",
                color,
                active ? "top-[30%]" : "top-[30%]",
                {'hidden': !status}
            ].join(' ')} />

        </div>
    </React.Fragment>

  )
}

