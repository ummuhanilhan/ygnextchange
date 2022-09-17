import { ArrowClockwise, CheckCircle, ChevronDown, ChevronRight, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React, { createRef, useRef } from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";
import rawCountries from "@utils/dummy/rawCountries";
import tr from "@utils/dummy/countries/tr.json";
import classNames from "classnames";
import { FloatInputProps } from "./inputs";
import Outside from "@utils/useoutside";
import { FiMinimize, FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

export const items = [
    {id:1, slug:'10truck-open', value:'10 Teker Kamyon Açık', label:''},
    {id:2, slug:'10truck-close', value:'10 Teker Kamyon Kapalı', label:''},
    {id:3, slug:'dorse1', value:'Canlı Hayvan Taşıma Dorsesi', label:''},
    {id:4, slug:'truck1', value:'Damperli Kamyon / Kırkayak', label:''},
    {id:5, slug:'18wheel1', value:'Isı Kontrollü Kamyon / Kırkayak', label:''},
    {id:6, slug:'trailertruck1', value:'Konteyner Dorsesi (Kılçık Dorsesi)', label:''},
    {id:7, slug:'1', value:'B Sınıfı', label:''},
    {id:8, slug:'2', value:'BE Sınıfı', label:''},
    {id:9, slug:'3', value:'C1 Sınıfı', label:''},

]

export const items2 = [
    {id:7, slug:'1', value:'B Sınıfı', label:''},
    {id:8, slug:'2', value:'BE Sınıfı', label:''},
    {id:9, slug:'3', value:'C1 Sınıfı', label:''},

]

export const FloatingTags = ({ 
  size,
  type,
  name,
  height,
  placeholder,
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
    const scrollRef = useRef<HTMLUListElement>(null)
    const [selected, setSelected] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(items);
    const allSelected = selected.length == data.length;
    return (
      <div className={classnames(
      'w-full flashback floatinglabel-selects rounded-md relative', 
       className,
       size||'medium',
       {'error': error},
      {'success': success},
      )}>
          <Outside cb={()=>setOpen(false)} >

          <div 
          className={classNames(
          "select relative rounded-md w-full cursor-pointer",
          backgroundColor||'bg-white',
          true && 'border',
          'flex items-center justify-end',
            size=='medium' && 'h-[4em]',
            size=='small' && 'h-[4em]',
            {'active':open},
            {'passive':!open},
          )}
          >
            <div className="flex items-start w-full">
                
                {selected.length<=0 &&  <label
                    className={classNames(
                        'p-2 absolute top-0 left-0 rounded-md flex items-center transition-all duration-200 ease-in-out cursor-pointer',
                        false ? "font-medium " : " text-gray-500 ",
                        size=='small' ? (open || selected.length>0 ? 'text-sm' : 'text-base pt-5') : '',
                        size=='medium' ? (false ? 'text-xs pt-3' : 'text-base pt-5') : '',
                        size=='large' ? (false ? 'text-sm' : 'text-base pt-5') : '',
                    )}
                    htmlFor={name}
                    >
                    {placeholder}
                </label>}
                
                <ul 
                    ref={scrollRef}
                    className='w-[89%] px-3 z-20 overflow-x-hidden
                    flex items-start'
                >
                   
                    {selected.map((item:any,i:number)=>{
                        const el = (
                            <li 
                                key={`selected-${i}`}
                                className='float-left mr-1 z-20 flex items-center bg-gray-50 rounded-md p-1 px-2'>
                                <p
                                onClick={()=>setOpen(!open)}
                                className='w-max text-gray-400 pr-1 text-sm'>{item.value}</p>
                                <FiMinusCircle
                                onClick={()=>{
                                    const newSelected:any = selected.filter((s:any)=>s.id!=item.id)
                                    setSelected(newSelected)
                                }}
                                className='text-gray-400' />
                            </li>
                        )
                        //if(i<2)
                            return el;
                    })}
                     <li className="lay absolute left-0 top-0 right-0 bottom-0" 
                    onClick={()=>setOpen(!open)}
                    ></li>
                </ul>

                <div className="lay absolute left-0 top-0 right-0 bottom-0" 
                onClick={()=>setOpen(!open)}
                ></div>

            </div>
            {selected.length>2 && (
                <div 
                onClick={()=>setOpen(!open)}
                className='absolute right-10 top-[1.1rem] text-gray-700 text-base'>
                {selected.length}</div>
            ) }
            <InputAppend 
                color={!!error?'fill-red-500':'fill-gray-500'}
                status={open}
                onClick={()=>setOpen(!open)}
            />
         </div>

            <ul className={classNames(
              'select-dropdown absolute top-16 mt-2 right-0',
              'bg-white h-auto z-10 rounded-md w-full',
              'drop-shadow-md overflow-hidden',
              {'hidden':!open}
            )}>
                <SimpleBar style={{ maxHeight: '200px' }}>
                <li 
                    className={classNames(
                        'px-3 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-50',
                        false ? 'text-gray-400' : 'text-gray-700'
                    )}
                    onClick={()=>{
                        if(allSelected){
                            setSelected([])
                        }else{
                            // @ts-ignore
                            setSelected(data)
                        }
                        // selected.length<=0 && setSelected(data)
                        // selected.length>0 && setSelected([])
                    }}
                >
                    <p className={classNames(
                        allSelected && 'text-gray-400'
                    )}>{allSelected ? 'Seçilenleri Kaldır': `Hepsini Seç`}</p>
                    {allSelected ? <FiMinusCircle className='text-gray-400' /> : <FiPlusCircle className='text-gray-700' />}
                    
                </li>
                {data.map((item:any,i:number)=>{
                    const select = selected.find((s:any)=>s.id===item.id)

                    return (
                    <li 
                        key={`select-${i}`}
                        className={classNames(
                            'px-3 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-50',
                            select ? 'text-gray-400' : 'text-gray-700'
                        )}
                        onClick={()=>{
                            console.log(scrollRef.current?.scrollWidth)
                            if(!select){
                                const newSelected:any = [item, ...selected];
                                setSelected(newSelected)
                            }else{
                                const newSelected:any = selected.filter((s:any)=>s.id != item.id);
                                setSelected(newSelected)
                            }
                        }}
                    >
                        <p className=''>{item.value}</p>
                        {select ? <FiMinusCircle className='text-gray-400' /> : <FiPlusCircle className='text-gray-700' />}
                        
                    </li>
                    )
                })}
                </SimpleBar>
            </ul>
            
          </Outside>
      </div>
    );
} 

/**
 * Appdendix of input 
 * @param type
 * @returns callback
 */
 export const InputAppend = ({
  status,
  onClick
}:any) =>{

  return (
    <React.Fragment> 
        <div 
            onClick={onClick}
        className="cursor-pointer w-22
        absolute top-0 bottom-0 z-30
         h-full bg-blue-500- flex items-center justify-center pl-2 pr-4">
      
           {status ? (
            <ChevronDown
                className={classNames(
                "icon h-4 top-[30%] icon-gray stroke-slate-500 right-4",
                )} 
            />
           ):(
            <ChevronRight
              className={classNames(
                "icon h-4 top-[30%] icon-gray stroke-slate-500 right-4",
              )} 
            />
           )}

        </div>
    </React.Fragment>

  )
}

