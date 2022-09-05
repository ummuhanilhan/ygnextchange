import { ArrowClockwise, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";
import rawCountries from "@utils/dummy/rawCountries";
import tr from "@utils/dummy/countries/tr.json";
import classNames from "classnames";

export const FloatingLabelInput = ({ 
   type,
   name,
   placeholder,
   example='',
   value,
   textarea,
   onChange,
   onBlur,
   error 
}:any) => {
    const [active, setActive] = React.useState(false);
    const [hide, setHide] = React.useState(true);
  
    function handleActivation(e:any) {
      setActive(!!e.target.value);
      onChange(e.target.value);
    }
  
    return (
      <div className={classnames({'error': error}, 'w-full')}>
          <div className=" relative border rounde bg-white- w-full mb-1- h-[65px] border-gray-300 border-opacity-25">
            <input  
              className={[
                "outline-none w-full h-full border border-gray-300 rounded bg-transparent text-lg pr-10 transition-all duration-200 ease-in-out p-2",
                value || active ? "pt-6 text-gray-500" : "pt-2"
              ].join(" ")}
              id={name}
              value={value}
              placeholder={!value&& active ?  ( example ? example : 'Boş bırakılamaz'
               ) : ''}
              type={type=='password'? (!hide?'text':type) : type }
              onTouchMove={handleActivation}
              onChange={handleActivation}
            />
            <label
              className={[
                "absolute top-0 left-0 flex items-center p-2 transition-all duration-200 ease-in-out ",
                value || active ? "text-md font-medium" : "text-lg text-gray-500 pt-4"
              ].join(" ")}
              htmlFor={name}
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
              toggle={()=>setHide(!hide)}
          />
          </div>
          {false && error && (
            <p className="mb-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Some error message. </p>
          )}
      </div>
    );
}

export const FloatingLabelPhone = ({ 
  type,
  name,
  placeholder,
  example='',
  value,
  onChange,
  onBlur,
  error }:any) => {
  const [active, setActive] = React.useState(value);
  const [hide, setHide] = React.useState(true);
  const [status, setStatus] = React.useState(false);
  const [code, setCode] = React.useState<any>({});

  React.useEffect(()=>{
    setCode({country:'', countryCode:''});
  },[active])

  function handleActivation(e:any) {
    setActive(!!e.target.value);
    onChange(e.target.value);
  }

  function handleCode(data:any){
    setCode(data)
  } 

  return (
    <div className={classnames({
      'error': error
    }, 'w-full')}>
        <div className="relative border rounded bg-white-
         mb-1- h-[55px] border-gray-500 border-opacity-25">
          {active && (
              <div className="flex items-center mt-[1.44rem] absolute left-[.5rem] top-[.1rem]">
                <CountryCodeDropdown 
                  status={status}
                  setStatus={setStatus}
                  handleCode={handleCode}
                />
                <p className="font-bold ml-1 text-sm">+{code.countryCode||'90'}</p>
              </div>
            )}
          <input  
            className={[
              "outline-none w-full h-full rounded bg-transparent text-sm pr-10 transition-all duration-200 ease-in-out p-2",
              value || active ? "pt-6 text-gray-500 pl-[3.8rem]" : "pt-2", 
              active && code.countryCode?.length > 2 ? 'pl-[4.5rem]' : '',
              active && code.countryCode?.length == 4 ? 'pl-[4.8rem]' : '',
            ].join(" ")}
            id={name}
            value={value}
            type="text"
            onTouchMove={handleActivation}
            onChange={handleActivation}
            
          />
          <label
            className={[
              "absolute top-0 left-0 flex items-center p-2 transition-all duration-200 ease-in-out",
              value || active ? "text-xs font-medium " : "text-sm text-gray-500 pt-4"
            ].join(" ")}
            htmlFor={name}
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
             toggle={()=>setHide(!hide)}
        />
        </div>
    </div>
  );
}

/**
 * Appdendix of input 
 * @param type
 * @returns callback
 */
const InputAppend = ({type, value, onChange, color, hide, toggle, active, setActive}:any) =>{

    return (
      <div className="pl-2 cursor-pointer">
          {type=='password' && (
            hide ? <EyeSlash className={[
              "icon h-4  icon-gray absolute right-4",
              color,
              active ? "top-[1.15rem]" : "top-[1.15rem]"
          ].join(' ')}  onClick={toggle} /> :
          <Eye className={[
              "icon h-4 icon-gray absolute right-4",
              color,
              active ? "top-[1.15rem]" : "top-[1.15rem]"
          ].join(' ')} onClick={toggle} />
          )}
          {!value && type!='password' && (
            <ArrowClockwise
            onClick={()=>setActive(!active)} 
            className={[
              "icon h-4 icon-gray absolute right-4",
              color,
              active ? "top-[1.15rem]" : "top-[1.15rem]"
          ].join(' ')} />
          )}
           {value && type!='password' && (
            <XCircle 
              onClick={()=>{onChange(''); setActive(false);}}  
              className={[
                "icon h-4 icon-gray absolute right-4",
                color,
                active ? "top-[1.15rem]" : "top-[1.15rem]"
              ].join(' ')} />
          )}
          
      </div>
    )
  }

/**
 * Input group dropdown for select country
 * @param status
 * @returns country code 
 */
const CountryCodeDropdown = ({status, setStatus, handleCode}:{status:boolean, setStatus:Function, handleCode:Function, }) =>{
    const [query, setQuery] = React.useState('');
    const [data, setData] = React.useState(rawCountries)
    const [code, setCode] = React.useState<any>({
      country:'',
      countryCode:'',
    });
    console.log(code)
    const defaultFlag = <TR width={23} onClick={()=>setStatus(!status)}  className="mt-[-4px] cursor-pointer"  />;

    return (
      <div className="relative flags">
      
                  {!code.country &&  defaultFlag }
                  {code.country.toLowerCase() =='tr' &&  defaultFlag }
                   {code.country!='tr' && code.country && (
                    <div className={classNames('flag placeholder cursor-pointer', code.country||'tr')} onClick={()=>setStatus(!status)} ></div>
                  )}

                  <div id="dropdownUsers" className={`${status?'':'hidden'} absolute left-[-.7rem] top-8 z-10 
                  w-72 bg-white rounded shadow dark:bg-gray-700 `}>
                    

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
                           placeholder="Ülke kodu seç" />
                        </div>
                    </div>
                      

                      <ul className="overflow-y-auto py-1 h-auto text-gray-700 dark:text-gray-200
                      flex items-start flex-col justify-center scroll-auto
                      md:max-h-44 lg:max-h-56  pt-4" aria-labelledby="dropdownUsersButton">
                        
                        {data
                        .sort((a:any, b:any) => {
                            return a[0].localeCompare(b[0]);
                        })
                        .filter((f:any)=>{
                            const org = f[0]
                            // @ts-ignore
                            const name = tr[f[2]]
                            const country = f[2]
                            const code = f[3]

                            const isOrg = org.toLowerCase().includes(query)
                            const isName = name.toLowerCase().includes(query)
                            const isCode = code.toLowerCase().includes(query)
                            const isCountry = country.toLowerCase().includes(query)
                            return  isName || isCode || isCountry || isOrg;
                          

                        })
                     
                        .map((item, key:number)=>{
                          const org = item[0];
                            // @ts-ignore
                          const name = tr[item[2]];
                          const country = item[2]
                          const countryCode = item[3]
                          const flag = item[2];
                          return(
                            <li key={`country-code-${key}`} onClick={()=>{
                              setStatus(false)
                              setCode({ country, countryCode })
                              handleCode({ country, countryCode })
                            }} 
                              className="w-full"
                            >
                              <a href="#" className="flex items-center py-2 px-4
                               hover:bg-gray-100 dark:hover:bg-gray-600
                                dark:hover:text-white w-full">
                                  <div className={classNames('flag', flag)}></div>
                                  <p className="text-md ml-2"> {name} (+{countryCode}) </p>
                              </a>
                            </li>
                          )
                        })}
                         
                        
                      </ul>
                  </div>
                </div>
    )
}


 