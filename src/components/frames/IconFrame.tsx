import classNames from "classnames"
import React from "react"
import { FiChevronDown, FiChevronRight } from "react-icons/fi"

export const IconFrame = ({title, icon}:any) => {
    return(
        <div className="title flex flex-start items-center pb-1">
            {icon}<p className=''>{title}</p>
        </div>   
    )
}

 
export const IconFrameDropdown = ({title, icon, status,setStatus, path}:any) => {

    return(
        <div className="centerize flex items-center mb-3 mt-1 justify-start cursor-pointer" onClick={()=>setStatus(!status)}>
            {icon} <p className="pr-2">{title}</p> {!status ? <FiChevronRight size={15} /> : <FiChevronDown size={15} />}    
        </div>
    )
}


export const TitleFrameDropdown = ({ title, icon, nomargin }:any) => {

    return(
        <div className={classNames(
            "centerize flex items-center justify-between w-full",
            "cursor-pointer text-md mb-2",
            nomargin ?? 'mt-4'
        )}>
            {icon} <p className="pr-2 text-black">{title}</p> 
            <FiChevronDown size={23} className='text-gray-500' />
        </div>
    )
}

 
export const IconFrameCovered = ({children, open, ...rest}:any) => {
    const [status, setStatus] = React.useState(open||true);

    return(
        <div className='my-4'>
             <IconFrameDropdown 
               onClick={()=>setStatus(!status)}
               {...rest}
               status={status}
               setStatus={setStatus}
            />
            <div className={classNames({'hidden':!status})}>
                {children}
            </div>
        </div>
    )
}


export const IconDropdown = ({status, setStatus, title, icon}:any) => {
    
    return(
        <div className="flex items-center justify-between p-2 py-3 hover:bg-gray-100 rounded-md" onClick={()=>setStatus(!status)}>
            <div className="centerize flex items-center justify-start cursor-pointer" >
                {icon} <p className="pl-2">{title}</p>  
            </div>
            <div>
                {!status ? <FiChevronRight className="text-gray-400" size={19} /> : <FiChevronDown size={19} className="text-gray-400" />}   
            </div>
        </div>
    )
  }


