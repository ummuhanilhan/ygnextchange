import { ArrowClockwise, CheckCircle, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React, { createRef, useRef } from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";
import rawCountries from "@utils/dummy/rawCountries";
import tr from "@utils/dummy/countries/tr.json";
import classNames from "classnames";
import { FloatInputProps, InputAppend } from "./inputs";

export const Textarea = ({ 
  size,
  type,
  height,
  name,
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
  
    const [active, setActive] = React.useState(false);
    const [hide, setHide] = React.useState(true);
    const textareaRef = createRef<HTMLTextAreaElement>();

    function handleActivation(e:any) {
      setActive(!!e.target.value);
      onChange(e.target.value);
    }
    function handleLabel(e:any) {
      const node = textareaRef.current;
      node && node.focus()
    }

    React.useEffect(()=>{
      if(value)
        setActive(true)
      else
        setActive(false)
    },[value])

    return (
      <div className={classnames(
        ' floatinglabel-textarea flashback rounded-md ', 
        className,
        size||'medium',
        backgroundColor||'bg-white',
        {'error': error},
       {'success': success},
      )}>
          <div className={classNames(
            "input relative rounded-md",
            border && 'border',
            height? `h-[${height}]` : 'h-[8em]',
            {'active':active},
            {'passive':!active},
          )}
          >
            <textarea  
              className={classNames(
                'p-2 pr-10 outline-none h-full rounded-md bg-transparent',
                'transition-all duration-200 ease-in-out w-full',
                active ? "text-gray-500 " : "",
                border && 'border-gray-300 border-opacity-25',
                active ? 'pt-5 text-base' : 'pt-2',

              )}
              id={name}
              value={value}
              ref={textareaRef}
              onTouchMove={handleActivation}
              onChange={handleActivation}
            /> 
            <label
              className={classNames(
                "p-2 absolute top-0 left-0 flex items-center transition-all duration-200 ease-in-out",
                active ? "font-medium " : " text-gray-500 ",
                active ? 'text-xs pt-2' : 'text-base pt-2',
              )}
              htmlFor={name}
              onClick={handleLabel}
              onTouchMove={handleLabel}
            >
              {placeholder}
            </label>
          </div>
      </div>
    );
}
