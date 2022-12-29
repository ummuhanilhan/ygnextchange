import React from "react"
import classnames from "classnames";
import Outside from "@utils/useoutside";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { TagAppend } from "./tags";
import classNames from "classnames";
import { slugify } from "@utils/helper";

export const Select = ({ 
  size,
  name,
  height,
  placeholder,
  border,
  className,
  mini,
  removable,
  backgroundColor,
  error, 
  items, 
  id,
  label,
  searchable,
  success,
  type,
  example='',
  verifiable,
  verified,
  value,
  onChange,
  disabled,
  onBlur,
  appendix,
}:any) => {
   const lower = {lower:true};
   const select = (val:string) => {
      const item = data.find((f:any)=> {
      return slugify(f[id]) 
      ==
      slugify(val) 
      }
    )
    return item ? item[label] : null;
   }

   const [active, setActive] = React.useState(false);
   const [open, setOpen] = React.useState(false);
   const [data, setData] = React.useState(items);
   const [query, setQuery] = React.useState('')
   const [selected, setSelected] = React.useState(
    value ? select(value) : null
   );
   React.useEffect(()=>{
    setSelected(select(value))
   },[value])


    return (
      <div className={classnames(
      'w-full flashback floatinglabel-selects rounded-md relative', 
       className,
       disabled && 'disabled bg-gray-200',
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
         
            {!mini  && (
              selected ?
              <Label 
                  open={open}
                  size={size}
                  selected={selected}
                  placeholder={select(value)}
                  name={name}
              />: 
                <Label 
                  open={open}
                  size={size}
                  selected={selected}
                  placeholder={placeholder}
                  name={name}
              />
            )}

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
                  placeholder={data.find((f:any)=>f[id]===value||{})[label]}
                  name={name}
                  color='text-gray-700'
                />
                
              </React.Fragment>
            )}
            
            <div className="lay absolute left-0 right-0 bottom-0 top-0" 
            onClick={()=> !disabled && setOpen(!open)}></div>

           {!disabled && (
             <TagAppend 
              color={!!error?'fill-red-500':'fill-gray-500'}
              status={open}
              removable={removable}
              setSelected={setSelected}
              onChange={onChange}
              setOpen={()=>setOpen(!open)}
              value={selected?.length}
            />
           )}
          </div>

            <ul className={classNames(
              'select-dropdown absolute top-16 mt-1 right-0',
              'bg-white h-auto z-50 rounded-md w-full',
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
                  if(!f) return;  
                  const isValue = slugify(f[label]).includes(query)
                  const lower = slugify(f[label]).includes(query)
                  const isLabel = slugify(f[label]).includes(query)
                  const capitalizedLetter = slugify(f[label]).includes(query)
                  const capitalized = slugify(f[label]).includes(query)
                  return lower || isValue || isLabel||capitalizedLetter||capitalized;
                })
                ?.map((item:any,i:number)=>{

                const selectedValue = slugify(item[id]);
                return (
                    <li key={`select-item-${i}`} 
                    className={classNames(
                      'px-4 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-50',
                    )}
                    onClick={()=>{
                      setSelected(selectedValue)
                      onChange(selectedValue) // or give an  _id if there is not have any slug by the direction
                      setOpen(false)
                    }}
                  >
                      <p className={classNames(
                          selected===selectedValue ? 'text-gray-400' : 'text-gray-700'
                      )}>{item[label]}</p>
                    </li>
                  )})}
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
                size=='medium' ? (selected ? ( mini ? 'text-base pt-7' : 'text-base pt-4') : 'text-base pt-5') : '',
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
