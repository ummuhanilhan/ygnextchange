import { ArrowClockwise, CheckCircle, ChevronDown, ChevronRight, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React, { createRef, useEffect, useRef } from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";
import rawCountries from "@utils/dummy/rawCountries";
import tr from "@utils/dummy/countries/tr.json";
import classNames from "classnames";
import { FloatInputProps } from "./inputs";
import Outside from "@utils/useoutside";
import { FiMinimize, FiMinusCircle, FiPlusCircle, FiX } from "react-icons/fi";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

export const Tag = ({ 
  size,
  name,
  placeholder,
  border,
  className,
  mini,
  value,
  onChange,
  items,
  backgroundColor,
  error, 
  rotation,
  success,
  id,
  label,
  type,
  height,
  verifiable,
  verified,
  onBlur,
  appendix,
}:any) => {
    const select = (val:string) => {
        return items.find((f:any)=> f[id] === val )||null
    }
    const selections = (vals:any) => {
        let selects:any = []
        vals?.length>0 && vals?.map((slugId:any)=>{
            let item = select(slugId);

            if(item?.name) selects.push(item)
        })
        return selects || [];
    }
    const toSlug = (items:any) => {
        let vals:any = []
        items?.length>0 && items?.map((item:any)=>{
            vals.push(item._id)
        })
        return vals || [];
    }
    const save = (data:string[]) => {
        let values:string[] = [];
        if(values.length>0){
            data.map(d=> values.push(d[id]) )
        }

       // if(onChange) onChange(toSlug(selected))
    }
    const scrollRef = useRef<HTMLUListElement>(null)
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(items);
    const [selected, setSelected] = React.useState(selections(value));
    const allSelected = selected.length == data.length;

   useEffect(()=>{
       if(onChange) onChange(toSlug(selected))
   },[selected])

    return (
      <div className={classnames(
          {'error': error},
      'w-full flashback floatinglabel-selects rounded-md relative', 
       className,
       size||'medium',
      {'success': success},
      )}>
          <Outside cb={()=>setOpen(false)} >

          <div 
          className={classNames(
          "select relative rounded-md w-full cursor-pointer",
          backgroundColor||'bg-white',
          border && 'border',
          'flex items-center justify-end',
            size=='medium' && 'h-[4em]',
            size=='small' && 'h-[4em]',
            {'active':open},
            {'passive':!open},
          )}
          >
            <div className="flex items-start w-full">
                
                {mini ? (
                   <TagLabel 
                    open={open}
                    size={size}
                    selected={selected}
                    placeholder={placeholder}
                    name={name}
                /> 
                ) : (
                selected.length<=0 && <TagLabel 
                    open={open}
                    size={size}
                    selected={selected}
                    placeholder={placeholder}
                    name={name}
                />
                )}

                
                <ul 
                    ref={scrollRef}
                    className={classNames(
                        'w-[87%] px-3 z-20 overflow-x-hidden',
                        'flex items-start',
                         mini && 'pt-6 pl-1'
                    )}
                >
                   
                    {selected.map((item:any,i:number)=>{

                        const el = (
                            <li 
                                key={`selected-${i}`}
                                className='float-left mr-1 z-20 flex items-center bg-gray-50 rounded-md p-1 px-2'>
                                <p
                                onClick={()=>setOpen(!open)}
                                className='w-max text-gray-400 pr-1 text-sm'>{item[label]}</p>
                                <FiMinusCircle
                                onClick={()=>{
                                    const newSelected:any = selected.filter((s:any)=>s[id]!=item[id])
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
            {false && selected.length>2 && (
                <div 
                onClick={()=>setOpen(!open)}
                className='absolute right-10 top-[1.25rem] text-gray-700 text-base'>
                {selected.length}</div>
            ) }
            <TagAppend 
                color={!!error?'fill-red-500':'fill-gray-500'}
                status={open}
                setOpen={setOpen}
             />
         </div>
            <ul className={classNames(
              'select-dropdown absolute mt-2',
              'bg-white h-auto z-20 rounded-md w-full',
              'drop-shadow-md overflow-hidden right-0',
               rotation ?  rotation :'top-16',
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
                            if(onChange) onChange()
                        }else{
                            // @ts-ignore
                            setSelected(data)
                            save([])
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
                    const select = selected.find((s:any)=>s[id]===item[id])

                    return (
                    <li 
                        key={`select-${i}`}
                        className={classNames(
                            'px-3 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-50',
                            select ? 'text-gray-400' : 'text-gray-700'
                        )}
                        onClick={()=>{
                            if(!select){
                                const newSelected:any = [item, ...selected];
                                setSelected(newSelected);
                                save(newSelected);
                            }else{
                                const newSelected:any = selected.filter((s:any)=>s[id] != item[id]);
                                setSelected(newSelected);
                                save(newSelected);
                            }
                        }}
                    >
                        <p className=''>{item[label]}</p>
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
 export const TagAppend = ({
  status,
  removable,
  value,
  setValue,
  onChange,
  setOpen,
}:any) =>{
    
  return (
    <React.Fragment> 
        <div 
        className="cursor-pointer w-22
        absolute top-0 bottom-0 
         h-full bg-blue-500- flex items-center justify-center pl-2 pr-4">
           {value && removable && (
                <div
                    onClick={()=>{setValue(); typeof onChange != undefined && onChange()}}
                >
                        <FiX
                            className={classNames(
                            "icon h-4 top-[30%] icon-gray stroke-gray-700 right-4 mr-1",
                            )} 
                        />

                </div>
           )}

           {status ? (
            <ChevronDown
                onClick={()=>setOpen && setOpen(false)}
                className={classNames(
                "icon h-4 top-[30%] icon-gray stroke-slate-500 right-4",
                )} 
            />
           ):(
            <ChevronRight
              onClick={()=>setOpen && setOpen(false)}
              className={classNames(
                "icon h-4 top-[30%] icon-gray stroke-slate-500 right-4",
              )} 
            />
           )}

        </div>
    </React.Fragment>

  )
}



const TagLabel = ({open,size,selected, placeholder, name}:any) => {

    return(
        <label
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
        </label>
    )
}