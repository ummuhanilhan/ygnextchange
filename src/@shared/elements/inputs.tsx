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
      <div className={classnames({
        'error': error
      }, 'w-full')}>
          <div className=" relative border rounde bg-white- w-full mb-2 h-[55px] border-gray-300 border-opacity-25">
            <input  
              className={[
                "outline-none w-full h-full border border-gray-300 rounded bg-transparent text-sm pr-10 transition-all duration-200 ease-in-out p-2",
                active ? "pt-6 text-gray-500" : "pt-2"
              ].join(" ")}
              id={name}
              value={value}
              type={type=='password'? (!hide?'text':type) : type }
              onTouchMove={handleActivation}
              onChange={handleActivation}
            />
            <label
              className={[
                "absolute top-0 left-0 flex items-center p-2 transition-all duration-200 ease-in-out",
                active ? "text-xs font-medium" : "text-sm text-gray-500 pt-4"
              ].join(" ")}
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

export const FloatingLabelPhone = ({ type, name, placeholder, value, onChange, onBlur, error }:any) => {
  const [active, setActive] = React.useState(false);
  const [hide, setHide] = React.useState(true);
  const [code, setCode] = React.useState('tr');
  const [status, setStatus] = React.useState(false);

  function handleActivation(e:any) {
    setActive(!!e.target.value);
    onChange(e.target.value);
  }


  return (
    <div className={classnames({
      'error': error
    }, 'w-full')}>
        <div className="relative border rounded bg-white- w-full mb-2 h-[55px] border-gray-300 border-opacity-25">
          {active && (
              <div className="flex items-center mt-[1.44rem] absolute left-[.5rem] top-[.1rem]">
                <div className="relative">
                  <TR width={23} onClick={()=>setStatus(!status)}  />
                  <div id="dropdownUsers" className={`${status?'':'hidden'} absolute left-[-.7rem] top-8 z-10 
                  w-44 bg-white rounded shadow dark:bg-gray-700 `}>
                      <ul className="overflow-y-auto py-1 h-auto text-gray-700 dark:text-gray-200
                      flex items-center flex-col justify-start scroll-auto	max-h-44" aria-labelledby="dropdownUsersButton">
                         {Array.from(Array(30)).map((item, key:number)=>(
                           <li key={`country-code-${key}`} onClick={()=>setStatus(false)}>
                              <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                  <img className="mr-2 w-6 h-6 rounded-full" src="/assets/flags/tr.svg" alt="+90" />
                                  Türkiye (+90)
                              </a>
                            </li>
                         ))}
                        
                      </ul>
                  </div>

                </div>
                <p className="font-bold ml-1 text-sm">+90</p>
              </div>
            )}
          <input  
            className={[
              "outline-none w-full h-full rounded bg-transparent text-sm pr-10 transition-all duration-200 ease-in-out p-2",
              active ? "pt-6 text-gray-500 pl-[3.8rem]" : "pt-2"
            ].join(" ")}
            id={name}
            value={value}
            type="text"
            onTouchMove={handleActivation}
            onChange={handleActivation}
            
          />
          <label
            className={[
              "absolute top-0 left-0 flex items-center text-opacity-50 p-2 transition-all duration-200 ease-in-out",
              active ? "text-xs font-medium" : "text-sm text-gray-800 pt-4"
            ].join(" ")}
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
    </div>
  );
}

const InputAppend = ({active,type, value, onChange, color, hide, toggle, setActive}:any) =>{
     

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