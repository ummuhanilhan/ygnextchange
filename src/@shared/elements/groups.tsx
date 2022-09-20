
import { ChevronDown, ChevronRight } from "@yukgetir-icons"
import React from "react"
import classnames from "classnames";
import classNames from "classnames";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Outside from "@utils/useoutside";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

export const InputGroup = ({
border,
items,
}:any) => {
    const [value, setValue] = React.useState('');
    return (
        <div className={classNames(
            'bg-white rounded-md h-[4em] pr-4',
            border && 'border'
        )}>
            <div className="items-center h-full grid grid-cols-4 
            gap-2 px-2">
            <Bordered 
                placeholder='Uzunluk'
            />
            <Bordered 
                placeholder='Genişlik'
            />
            <Bordered 
                placeholder='Yükseklik'
            />
        
            <div className='pl-3 border-transparent border-l-[1px] border-gray-100'>
                    <Select
                        value={value}
                        placeholder=''
                        id='label'
                        items={items}
                        onChange={(e:string)=>setValue(e)}
                    />
                </div>
            </div>
        
        </div>
    )
}

export const Bordered = ({
placeholder
}:any) => {

return (
    <div className="relative z-0 w-full pb-0">
    <input 
        type="text" 
        id="default_standard" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 
        bg-transparent border-0 border-b-[1px] border-gray-300
        appearance-none dark:text-white dark:border-gray-600 
        dark:focus:border-blue-500 focus:outline-none focus:ring-0 
        focus:border-blue-600 peer" 
        placeholder=" " 
    />
    <label 
        htmlFor="default_standard" 
        className="absolute text-sm text-gray-500 dark:text-gray-400
        duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
        origin-[0] peer-focus:left-0 peer-focus:text-blue-600 
        peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
        peer-focus:-translate-y-6"
    >
        {placeholder}
    </label>
</div>
)
} 
  
export const Append = ({status, setOpen}:any) => {
    return (
        <div className=''>
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
    )
}




export const Input = ({
    border,
    placeholder,
    error,
    items,
  }:any) => {
    const [value, setValue] = React.useState('');
    return (
      <div className={classNames(
          'bg-white rounded-md h-[4em] flex items-center', 
          'pl-3 relative justify-between w-full',
          border && 'border'
        )}>
          <input 
            type="text" 
            placeholder={placeholder} 
            className="block py-2.5 px-0 w-full text-base 
            text-gray-900 bg-transparent appearance-none 
            dark:text-white peer h-full outline-none" 
          />
        
         <div className='pl-3 border-transparent border-l-[1px] border-gray-100'>
            <Select
                value={value}
                placeholder=''
                id='label'
                items={items}
                onChange={(e:string)=>setValue(e)}
            />
         </div>
      </div>
    )
}

export const Select = ({ 
    name,
    placeholder,
    border,
    error, 
    items, 
    id,
    success
  }:any) => {
    const [value, setValue] = React.useState('')
    const onChange = (val:string) => setValue(val)
      const [selected, setSelected] = React.useState(items[0][id]);
      const [active, setActive] = React.useState(false);
      const [open, setOpen] = React.useState(false);
      const [data, setData] = React.useState(items);
      return (
        <div className={classnames(
        'w-full flashback floatinglabel-selects rounded-md relative', 
         'medium w-20',
         {'error': error},
        {'success': success},
        )}>
            <Outside cb={()=>setOpen(false)}>
            <div 
            className={classNames(
            "select relative rounded-md w-full cursor-pointer",
            'flex items-center justify-end h-[55px]',
              border && 'border',
              {'active':active},
              {'passive':!active},
            )}
            >
            {selected ?
            <Label 
                open={open}
                size='medium'
                selected={selected}
                placeholder={data.find((f:any)=>f[id||'slug']===selected)?.value}
                name={name}
            />: 
                <Label 
                open={open}
                size='medium'
                selected={selected}
                placeholder={placeholder}
                name={name}
            />}
         
              <Appendix 
                 color={!!error?'fill-red-500':'fill-gray-500'}
                 status={open}
                 removable
                 setValue={setSelected}
                 setOpen={()=>setOpen(!open)}
                 value={selected}
            />
               
            <div className="lay absolute left-0 right-0 bottom-0 top-0" 
            onClick={()=> setOpen(!open)}></div>

            </div>
              <ul className={classNames(
                'select-dropdown absolute top-16 mt-1 right-0',
                'bg-white h-auto z-30 rounded-md w-full',
                'drop-shadow-md overflow-hidden',
                {'hidden':!open}
              )}>
                  
                 <SimpleBar style={{ maxHeight: '200px' }}>
                  {data
                  ?.map((item:any,i:number)=>(
                      <li key={`select-item-${i}`} 
                      className={classNames(
                        'px-4 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-50',
                      )}
                      onClick={()=>{
                        setSelected(item[id||'slug'])
                        setOpen(false)
                      }}
                    >
                        <p className={classNames(
                            selected===item[id||'slug'] ? 'text-gray-400' : 'text-gray-700'
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
                  size=='medium' ? (selected ? 'text-base pt-4' : 'text-base pt-4') : '',
            )}
            htmlFor={name}
            >
            {placeholder}
        </label>
    )
}
  
  /**
 * Appdendix of input 
 * @param type
 * @returns callback
 */
 export const Appendix = ({
    status,
    removable,
    value,
    setValue,
    setOpen,
  }:any) =>{
      
    return (
      <React.Fragment> 
          <div 
          className="cursor-pointer w-22
          absolute top-0 bottom-0 
           h-full bg-blue-500- flex items-center justify-center pl-2 pr-4">
  
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
  