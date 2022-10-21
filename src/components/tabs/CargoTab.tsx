import { CargoCreateRoute, cargoCreateTabMenu, cargoTabMenu } from "@utils/mock"
import classNames from "classnames"
import { useRouter } from "next/router"
import React from "react"

export enum route {
    'rent' = 1,
}

export const CargoTab = ({
    selected, 
    setSelected, 
    change, 
    data, 
    routes,
    name
}:{
    selected:string,
    setSelected:Function,
    change?:Function,
    data:object[],
    routes:object[],
    name?:string,
}) => {

    const router = useRouter();
    return (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3
         sm:gap-3 cargo-tab tabs">
            {cargoCreateTabMenu.map((item:any, i:number)=>(
                <li 
                key={`cargo-menu-${i}`} 
                className={classNames({active:(selected == CargoCreateRoute[item.slug]) },`
                text-md flex flex-center items-center border border-transparent border-b-2 bg-white p-3 rounded-md
                cursor-pointer mb-0`)} 
                onMouseDown={(e:any)=>{
                    if(e.button === 1 )
                        window.open(item.path, "_blank")    
                }}
                onClick={()=>{
                    setSelected(item.id)
                }} >
                    {item.icon}
                    {item.title}
                </li>
            ))}
        </ul>
    )
}
