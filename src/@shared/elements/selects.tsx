import { ArrowClockwise, CheckCircle, ChevronDown, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React, { createRef, useRef } from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";
import rawCountries from "@utils/dummy/rawCountries";
import tr from "@utils/dummy/countries/tr.json";
import classNames from "classnames";
import { FloatInputProps } from "./inputs";
import Outside from "@utils/useoutside";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { InputAppend } from "./tags";

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
  items, 
  success
}:any) => {
  const [value, setValue] = React.useState('')
  const onChange = (val:string) => setValue(val)
  
    const [selected, setSelected] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(items);

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
        
          className={classNames(
          "select relative rounded-md w-full cursor-pointer",
          'flex items-center justify-end h-[4em]',
            border && 'border',
            {'active':active},
            {'passive':!active},
          )}
          >
         
            {!mini  &&
            (
              selected ?
              <Label 
                  open={open}
                  size={size}
                  selected={selected}
                  placeholder={data.find((f:any)=>f.slug===selected)?.value}
                  name={name}
              />: 
                <Label 
                  open={open}
                  size={size}
                  selected={selected}
                  placeholder={placeholder}
                  name={name}
              />
            )
            }


            {mini && (
              <React.Fragment>
                   
               <Label 
                  open={open}
                  size={size}
                  selected={selected}
                  placeholder={placeholder}
                  name={name}
                />
                     
               <Label 
                  open={open}
                  size={'medium'}
                  mini
                  selected={selected}
                  placeholder={data.find((f:any)=>f.slug===selected)?.value}
                  name={name}
                  color='text-gray-700'
                />
                
              </React.Fragment>
            )}

            
            <div className="lay absolute left-0 right-0 bottom-0 top-0" 
            onClick={()=> setOpen(!open)}></div>

            <InputAppend 
               color={!!error?'fill-red-500':'fill-gray-500'}
               status={open}
               removable
               setValue={setSelected}
               value={selected}
          />
          </div>

            <ul className={classNames(
              'select-dropdown absolute top-16 mt-1 right-0',
              'bg-white h-auto z-30 rounded-md w-full',
              'drop-shadow-md overflow-hidden',
              {'hidden':!open}
            )}>
               
               <SimpleBar style={{ maxHeight: '200px' }}>
                {data?.map((item:any,i:number)=>(
                    <li key={`select-item-${i}`} 
                    className={classNames(
                      'px-4 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-50',
                    )}
                    onClick={()=>{
                      setSelected(item.slug)
                      setOpen(false)
                    }}
                  >
                      <p className={classNames(
                          selected===item.slug ? 'text-gray-400' : 'text-gray-700'
                      )}>{item.value}</p>
                    </li>
                  ))}
              </SimpleBar>


            </ul>
          </Outside>
      
      </div>
    );
} 







const Label = ({open,size,selected, placeholder, name,mini, color}:any) => {

  return(
      <label
          className={classNames(
            color ? color : 'text-gray-500 ',
            'p-2 absolute top-0 left-0 rounded-md flex items-center transition-all duration-200 ease-in-out cursor-pointer',
                size=='small' ? (selected ? 'text-sm pt-2' : 'text-base pt-5') : '',
                size=='medium' ? (selected ? ( mini ? 'text-base pt-7' : 'text-base pt-5') : 'text-base pt-5') : '',
          )}
          htmlFor={name}
          >
          {placeholder}
      </label>
  )
}
