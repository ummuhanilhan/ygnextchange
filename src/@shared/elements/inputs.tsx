import { ArrowClockwise, CheckCircle, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React, { createRef, useRef } from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";
import rawCountries from "@utils/dummy/rawCountries";
import tr from "@utils/dummy/countries/tr.json";
import classNames from "classnames";

export interface FloatInputProps {
  /**
   * FloatInput placeholder
   */
   value: string;
   /**
    * Input contents
    */
   placeholder: string;
   /**
   * Unique input name
   */
   name?: string;
   /**
    * Special height 
    */
   height?: string;
   /**
    * Narrow height 
   */
   mini?: boolean;
   /**
   * What background color to use
   */
   backgroundColor?: string;
   /**
   * Verification icon
   */
   verified?: boolean;
  /**
   * Verification icon status
   */
   verifiable?: boolean;
   /**
   * How large should the FloatInput be?
   */
  size?: 'mini' | 'small' | 'medium' | 'large';
  /**
   * Click handler
  */
  onChange: (value:string) => Function|void;
  /**
   * Optional click handler
   */
  onClick?: (callback:Function) => Function;
  /**
   * Optional blur handler
  */
  onBlur?: () => void;
  /**
   * Error Message
  */
  error?: string|object;
  /**
   * Input type 
  */
  type?: string;
  /**
   * Optional border
  */
  border?: boolean;
  /**
   * append icons 
  */
  apendix?: boolean;
  /**
   * Show users to valid types. It will be shown in when clicked
   * If leave empty it's do nothing
  */
  example?: string;
  /**
   * Options
  */
  className?: string;

}


export const FloatingLabelInput = ({ 
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
  backgroundColor,
  error 
}:FloatInputProps) => {
  const [value, setValue] = React.useState('')
  const onChange = (val:string) => setValue(val)
  
    const [active, setActive] = React.useState(false);
    const [hide, setHide] = React.useState(true);
    const inputRef = createRef<HTMLInputElement>();

    function handleActivation(e:any) {
      setActive(!!e.target.value);
      onChange(e.target.value);
    }
    function handleLabel(e:any) {
      const node = inputRef.current;
      node && node.focus()
    }

    React.useEffect(()=>{
      if(value)
        setActive(true)
      else
        setActive(false)
    },[value])


    const isActive = value || active;
    return (
      <div className={classnames(
        'w-full floatinglabel-input', 
        className,
        size||'medium',
       backgroundColor||'bg-white',
       {'error': error},
      )}>
          <div className={classNames(
          "relative border rounded-md w-full border-gray-300 border-opacity-25",
          'flex items-center justify-end',
            // !height && 'h-[4em]',
            // height && `h-[${height}]`,
            size=='small' && 'h-[55px] ',
            size=='medium' && 'h-[4em]',
            size=='large' && 'h-[4em]',
            {'active':active},
            {'passive':!active},
          )}
          >
            <input  
              className={classNames(
                "p-2 pr-10 outline-none w-full h-full border border-gray-300 rounded bg-transparent transition-all duration-200 ease-in-out",
                active ? "text-gray-500 " : "",
                // size=='mini' || (active ? '' : '') || '',
                size=='small' ? (active ? 'pt-6' : 'pt-2') : '',
                size=='medium' ? (active ? 'pt-7 text-md' : 'pt-2') : '',
                size=='large' ? (active ? 'pt-6' : 'pt-2') : '',

              )}
              id={name}
              value={value}
              type={type=='password'? (!hide?'text':type) : type }
              onTouchMove={handleActivation}
              onChange={handleActivation}
            />
            <label
              className={classNames(
                "p-2 absolute top-0 left-0 flex items-center transition-all duration-200 ease-in-out",
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
              hide={hide}
              value={value}
              onChange={onChange}
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
  size,
  type,
  name,
  placeholder,
  // value,
  // onChange,
  onBlur,
  error, 
  mini,
  className,
  backgroundColor,
  border,
  height,
 }:any) => {
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
    <div className={classnames(
      'w-full floatinglabel-phone', 
      className,
      size||'medium',
      backgroundColor||'bg-white',
      {'error': error},
    )}>
        <div className={classNames(
            "relative border rounded bg-white- w-full",
            'flex items-center justify-end',
             size=='small' && 'h-[55px] ',
             size=='medium' && 'h-[4em]',
             size=='large' && 'h-[4em]',
             {'active':active},
             {'passive':!active},
        )}
       >
        {active && (
            <div className={classNames(
              'country-code flex items-center absolute left-[.5rem]',
              size=='small' && 'top-[1.6rem]',
              size=='medium' && ' top-[1.8rem] ',
              size=='large' && ' top-[1.9rem] ',
            )}>
                <CountryCodeDropdown 
                  status={status}
                  setStatus={setStatus}
                  handleCode={handleCode}
                />
                <p className="font-bold ml-1 text-sm">+{code.countryCode||'90'}</p>
            </div>
          )}
          <input  
            className={classNames(
              "p-2 pr-10 outline-none w-full h-full rounded bg-transparent transition-all duration-200 ease-in-out",
              border && 'border-gray-300 border-opacity-25',
              active ? "text-gray-500 pl-[4rem]" : "",
              size=='small' ? (active ? 'text-base pt-6' : 'pt-2') : '',
              size=='medium' ? (active ? 'text-base pt-6' : 'pt-2') : '',
              size=='large' ? (active ? 'text-base pt-6' : 'pt-2') : '',
              code.countryCode?.length == 3 && 'pl-[4.5rem]',
              code.countryCode?.length == 4 && 'pl-[4.8rem]'

            )}
            id={name}
            value={value}
            type="text"
            onTouchMove={handleActivation}
            onChange={handleActivation}
            
          />
          <label
            className={classNames(
              "p-2 absolute top-0 left-0 flex items-center text-opacity-50 transition-all duration-200 ease-in-out",
              active ? "font-medium" : "text-gray-800",
              size=='small' ? (active ? 'text-xs ' : 'text-base pt-4') : '',
              size=='medium' ? (active ? 'text-xs pt-3' : 'pt-5') : '',
              size=='large' ? (active ? 'text-sm' : 'pt-5 ') : '',
            )}
            htmlFor={name}
          >
            {placeholder}
           </label>
           <InputAppend 
             type={type}
             active={active}
             color={!!error?'fill-red-500':'fill-gray-500'}
             hide={hide}
             value={value}
             onChange={onChange}
             setActive={setActive}
             toggle={()=>setHide(!hide)}
             status={false}
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
  status
}:any) =>{

  return (
    <React.Fragment> 
        <div className=" cursor-pointer w-22
        absolute top-0 bottom-0
         h-full bg-blue-500- flex items-center justify-center pl-2 pr-4">
        {verifiable && (
            <div className='verification absolute- right-10 top-[30%] mr-2'>
                {false && <CheckCircle width='15' className='fill-yg-green' /> }
                {true && <p className='text-yg-green text-sm'>Doğrulandı</p> }
            </div>
        )}
            {type=='password' && (
              hide ? <EyeSlash className={[
                "icon h-4  icon-gray absolute- right-4",
                color,
                active ? "top-[30%]" : "top-[30%]"
            ].join(' ')}  onClick={toggle} /> :
            <Eye className={[
                "icon h-4 icon-gray absolute- right-4",
                color,
                active ? "top-[30%]" : "top-[30%]"
            ].join(' ')} onClick={toggle} />
            )}
            {status && !value && type!='password' && (
              <ArrowClockwise
              onClick={()=>setActive(!active)} 
              className={[
                "icon h-4 icon-gray absolute- right-4",
                color,
                active ? "top-[30%]" : "top-[30%]",
                {'hidden': !status}
            ].join(' ')} />
            )}
            {value && type!='password' && (
              <XCircle 
                onClick={()=>{onChange(''); setActive(false);}}  
                className={[
                  "icon h-4 icon-gray absolute- right-4",
                  color,
                  active ? "top-[30%]" : "top-[30%]"
                ].join(' ')} />
            )}
        </div>
    </React.Fragment>

  )
}

    /**
* Input group dropdown for select country
* @param status
* @returns country code 
*/
export const CountryCodeDropdown = ({status, setStatus, handleCode}:{status:boolean, setStatus:Function, handleCode:Function, }) =>{
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
