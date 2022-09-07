import { cargoTabMenu } from "@utils/mock"
import classNames from "classnames"
import { useRouter } from "next/router"
import React from "react"


export const CargoTab = ({selected, setSelected, change}:any) => {

    const router = useRouter();
    return (
        <ul className="grid grid-cols-5 gap-3 cargo-tab">
            {cargoTabMenu.map((item:any, i:number)=>(
                <li 
                key={`cargo-menu-${i}`} 
                className={classNames({active:(router.pathname == item.path) },`
                text-md flex flex-center items-center border border-transparent border-b-4 bg-white p-3 rounded-md
                cursor-pointer mb-3
                `)} 
                onMouseDown={(e:any)=>{
                    if(e.button === 1 )
                        window.open(item.path, "_blank")    
                }}
                onClick={()=>{
                    setSelected(item.id)
                    router.push(item.path,  undefined, { shallow: true })
                }} >
                    {item.icon}
                    {item.title}
                </li>
            ))}
        </ul>
    )
}
