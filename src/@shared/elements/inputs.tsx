import { ArrowClockwise, CheckCircle, ChevronDown, ChevronRight, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React, { createRef, useRef } from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";
import rawCountries from "@utils/dummy/rawCountries";
import tr from "@utils/dummy/countries/tr.json";
import classNames from "classnames";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Select } from "./selects";

export interface FloatInputProps {
  /**
   * FloatInput placeholder
   */
    value: string|number;
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
   * Input status
   */
      disabled?: boolean;
   /**
   * How large should the FloatInput be?
   */
     size?: 'small' | 'medium' | 'large';
  /**
   * Click handler
  */
     onChange: (value:any) => Function|void;
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
     error?: string|object|boolean;
  /**
   * Success Message
  */
     success?: boolean;
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
      appendix?: boolean;
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

export const FloatingInput = ({ 
  size,
  type,
  name,
  height,
  placeholder,
  example='',
  border,
  disabled,
  className,
  verifiable,
  verified,
  mini,
  value,
  onChange,
  onBlur,
  appendix,
  backgroundColor,
  error, 
  success
}:FloatInputProps) => {
    // const [value, setValue] = React.useState('')
    // const onChange = (val:string) => setValue(val)

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
      if(value==undefined || value==null || !value)
        setActive(false)
      else
        setActive(true)
    },[value])

    return (
      <div className={classnames(
      'w-full flashback floatinglabel-input rounded-md ', 
       className,
       size||'medium',
       backgroundColor||'bg-white',
       {'disabled bg-gray-200': disabled},
       {'error': error},
      {'success': success},
      )}>
          <div className={classNames(
          "input relative rounded-md w-full",
          border && 'border',
          'flex items-center justify-end',
            size=='small' && 'h-[50px] ',
            size=='medium' && 'h-[4em]',
            size=='large' && 'h-[4em]',
            {'active':active},
            {'passive':!active},
          )}
          >
            <input  
              className={classNames(
                "p-2 pr-10 outline-none w-full h-full rounded-md bg-transparent transition-all duration-200 ease-in-out",
                active ? "text-gray-500 " : "",
                border && 'border-gray-300 border-opacity-25',
                size=='small' ? (active ? 'pt-6' : 'pt-3') : '',
                size=='medium' ? (active ? 'pt-6 text-base' : 'pt-2') : '',
                size=='large' ? (active ? 'pt-6' : 'pt-2') : '',

              )}
              id={name}
              value={value}
              disabled={disabled}
              ref={inputRef}
              type={type=='password'? (!hide?'text':type) : type }
              onTouchMove={handleActivation}
              onChange={handleActivation}
            />
            <label
              className={classNames(
                "p-2 absolute top-0 left-0 flex items-center transition-all duration-200 ease-in-out",
                active ? "font-medium " : " text-gray-500 ",
                size=='small' ? (active ? 'text-xs' : 'text-sm pt-5') : '',
                size=='medium' ? (active ? 'text-xs pt-3' : 'text-base pt-5') : '',
                size=='large' ? (active ? 'text-sm' : 'text-base pt-5') : '',
              )}
              htmlFor={name}
              onClick={handleLabel}
              onTouchMove={handleLabel}
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
              status={appendix}
              verifiable={verifiable}
              verified={verified}
          />
          </div>
          {false && error && (
            <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oh, snapp!</span> Some error message. </p>
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
        {verifiable && (
            <div className='verification absolute- cursor-pointer right-10 top-[30%] mr-2'>
                {false && <CheckCircle width='15' className='fill-yg-green' /> }
                {verified && <p className='text-yg-green text-sm'>Doğrulandı</p> }
                {!verified && <p className='text-yg-orange text-sm'>Doğrula</p> }
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
            {value!=null || value!=undefined && type!='password' && (
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

