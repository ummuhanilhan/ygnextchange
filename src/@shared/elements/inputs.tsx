import { ArrowClockwise, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";

export const FloatingLabelInput = ({ type, name, placeholder, value, onChange, onBlur, error }:any) => {
    const [active, setActive] = React.useState(false);
  
    function handleActivation(e:any) {
      setActive(!!e.target.value);
      onChange(e.target.value);
    }
  
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
              type={type}
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
          />
          </div>
          {error && (
            <p className="mb-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Some error message. </p>
          )}
      </div>
    );
}

export const FloatingLabelPhone = ({ type, name, children }:any) => {
  const [active, setActive] = React.useState(false);
  const [code, setCode] = React.useState('tr');
  const [status, setStatus] = React.useState(false);

  function handleActivation(e:any) {
    setActive(!!e.target.value);
  }

  return (
    <div className="w-full">
        <div className="error relative border rounded bg-white- w-full mb-2 h-[55px] border-gray-300 border-opacity-25">
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
            name={name}
            type={type}
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
            {children}
          </label>
        <InputAppend 
            type={type}
            active={active}
        />
        </div>


    </div>
  );
}

const InputAppend = ({active,type}:any) =>{
    const [pass, setPass] = React.useState(false);
    const changePass = () => setPass(!pass);

    return (
      <div className="pl-2 cursor-pointer">
          {type=='password' && (
            pass ? <EyeSlash className={[
              "icon h-4 fill-gray-500 icon-gray absolute right-4",
              active ? "top-[1.15rem]" : "top-[1.15rem]"
          ].join(' ')}  onClick={changePass} /> :
          <Eye className={[
              "icon h-4 fill-gray-500 icon-gray absolute right-4",
              active ? "top-[1.15rem]" : "top-[1.15rem]"
          ].join(' ')} onClick={changePass} />
          )}
          {type!='password' && (
            <ArrowClockwise className={[
              "icon h-4 fill-gray-500 icon-gray absolute right-4",
              active ? "top-[1.15rem]" : "top-[1.15rem]"
          ].join(' ')} />
          )}
          
      </div>
    )
  }