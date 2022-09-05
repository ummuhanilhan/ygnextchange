import React from "react"
import { FiChevronDown, FiChevronRight } from "react-icons/fi"



export const IconFrame = ({title, icon}:any) => {
    return(
        <div className="title flex flex-start items-center pb-1">{icon}<p>{title}</p></div>   
    )
}

 
export const IconFrameDropdown = ({title, icon, status,setStatus, path}:any) => {

    return(
        <div className="centerize flex items-center mb-3 mt-1 justify-start cursor-pointer" onClick={()=>setStatus(!status)}>
            {icon} <p className="pr-2">{title}</p> {!status ? <FiChevronRight size={15} /> : <FiChevronDown size={15} />}    
        </div>
    )
  }

