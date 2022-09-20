import React from "react"
import classnames from "classnames";
import Outside from "@utils/useoutside";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { TagAppend } from "./tags";
import slugify from "slugify";
import classNames from "classnames";

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
  removable,
  backgroundColor,
  error, 
  items, 
  id,
  searchable,
  success
}:any) => {
   const [value, setValue] = React.useState('')
   const onChange = (val:string) => setValue(val)
  
    const [selected, setSelected] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(items);
    const [query, setQuery] = React.useState('')
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
          'flex items-center justify-end ',
            height ? `h-[${height}]` :'h-[4em]',
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
                  placeholder={data.find((f:any)=>f[id||'slug']===selected)?.value}
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

            <TagAppend 
               color={!!error?'fill-red-500':'fill-gray-500'}
               status={open}
               removable={removable}
               setValue={setSelected}
               setOpen={()=>setOpen(!open)}
               value={selected}
          />
          </div>

            <ul className={classNames(
              'select-dropdown absolute top-16 mt-1 right-0',
              'bg-white h-auto z-30 rounded-md w-full',
              'drop-shadow-md overflow-hidden',
              {'hidden':!open}
            )}>
                <Searcher 
                  status={searchable}
                  query={query}
                  setQuery={setQuery}
                />
               <SimpleBar style={{ maxHeight: '200px' }}>
                {data
                .filter((f:any)=>{
                  const isValue = slugify(f.value, {lower:true}).includes(query)
                  const lower = f.value.toLowerCase().includes(query)
                  const isLabel = slugify(f.label, {lower:true}).includes(query)
                  const capitalizedLetter = f.value.includes(query)
                  const capitalized = f.label.includes(query)
                  return lower || isValue || isLabel||capitalizedLetter||capitalized;
                })
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
                size=='small' ? (selected ? 'text-sm pt-2' : 'text-base pt-5') : '',
                size=='medium' ? (selected ? ( mini ? 'text-base pt-7' : 'text-base pt-5') : 'text-base pt-5') : '',
          )}
          htmlFor={name}
          >
          {placeholder}
      </label>
  )
}

const Searcher = ({data, status, query, setQuery}:any) =>{

  return (
      <div id="dropdownUsers" className={`${status?'':'hidden'} 
  bg-white rounded shadow dark:bg-gray-700 `}>
          <div className="p-3">
              <label htmlFor="input-group-search" className="sr-only">Ara</label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="input-group-search"
                onChange={(e:any)=>setQuery(e.target.value)}
                value={query}
                  className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder='Ara..' />
              </div>
          </div>
    </div>
  )
}
