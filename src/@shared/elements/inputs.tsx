import { ArrowClockwise, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import classnames from "classnames";
import React from "react"
import TR from '../../../public/assets/flags/tr.svg'

export const FloatingLabel = ({ type, name, children }:any) => {
const [active, setActive] = React.useState(false);

function handleActivation(e:any) {
    setActive(!!e.target.value);
}

return (
    <div className="relative border rounded bg-white w-full mb-2 border-gray-300 border-opacity-25">
    <input
        className={[
        "outline-none w-full rounded bg-transparent text-sm pr-10 transition-all duration-200 ease-in-out p-2",
        active ? "pt-6 text-gray-500" : ""
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
        active ? "text-xs font-medium" : "text-sm text-gray-800"
        ].join(" ")}
        htmlFor={name}
    >
        {children}
    </label>
    <div className="pl-2 cursor-pointer">
        {type=='password' && (
            true ? <EyeSlash className={[
            "icon h-4 fill-gray-500 icon-gray absolute right-4",
            active ? "top-[1.15rem]" : "top-[.6rem]"
        ].join(' ')} /> :
        <Eye className={[
            "icon h-4 fill-gray-500 icon-gray absolute right-4",
            active ? "top-[1.15rem]" : "top-[.6rem]"
        ].join(' ')} />
        )}
        {type!='password' && (
            <ArrowClockwise className={[
            "icon h-4 fill-gray-500 icon-gray absolute right-4",
            active ? "top-[1.15rem]" : "top-[.6rem]"
        ].join(' ')} />
        )}
        
    </div>
    </div>
);
}


export const FloatingLabelInput = ({ type, name, children }:any) => {
    const [active, setActive] = React.useState(false);
  
    function handleActivation(e:any) {
      setActive(!!e.target.value);
    }
  
    return (
      <div className="relative border rounded bg-white w-full mb-2 h-[55px] border-gray-300 border-opacity-25">
        <input  
          className={[
            "outline-none w-full h-full rounded bg-transparent text-sm pr-10 transition-all duration-200 ease-in-out p-2",
            active ? "pt-6 text-gray-500" : "pt-2"
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
    );
}
  

export const FloatingLabelPhone = ({ name, children }:any) => {
  const [active, setActive] = React.useState(false);

  function handleActivation(e:any) {
    setActive(!!e.target.value);
  }

  return (
    <div className="relative border rounded bg-white w-full mb-2 h-[55px] border-gray-300 border-opacity-25">
   

        <div className={classnames({
          "flex items-start ml-2 mt-1": active,
          "mt-2 pl-1": !active
        })}>
        {active && (
            <div className="flex items-center mt-[1.44rem]">
              <TR width={23} />
              <p className="font-bold ml-1 text-sm">+90</p>
            </div>
          )}
          <input  
            className={[
              "outline-none pl-1 w-full h-full rounded bg-transparent text-sm pr-10 transition-all duration-200 ease-in-out p-2",
              active ? "pt-6 text-gray-500" : "pt-2"
            ].join(" ")}
            id={name}
            name={name}
            type="number"
            onTouchMove={handleActivation}
            onChange={handleActivation}
          />
      </div>
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
        type="phone"
        active={active}
     />
    </div>
  );
}



  const InputAppend = ({active,type}:any) =>{

    return (
      <div className="pl-2 cursor-pointer">
          {type=='password' && (
            true ? <EyeSlash className={[
              "icon h-4 fill-gray-500 icon-gray absolute right-4",
              active ? "top-[1.15rem]" : "top-[1.15rem]"
          ].join(' ')} /> :
          <Eye className={[
              "icon h-4 fill-gray-500 icon-gray absolute right-4",
              active ? "top-[1.15rem]" : "top-[1.15rem]"
          ].join(' ')} />
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