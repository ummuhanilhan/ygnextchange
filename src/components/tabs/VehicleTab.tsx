import { VehicleRoute, vehicleTabMenu } from "@utils/mock"
import classNames from "classnames"
import { useRouter } from "next/router"
import React from "react"
 
export const VehicleTab = ({selected, setSelected, change}:any) => {

    const router = useRouter();
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 vehicle-tab tabs">
            {vehicleTabMenu.map((item:any, i:number)=>(
                <li 
                key={`vehicle-menu-${i}`} 
                className={classNames({active:(selected == VehicleRoute[item.slug]) },`
                text-md flex flex-center items-center 
                border border-transparent border-b-2
              bg-white p-3 rounded-md
                cursor-pointer my-3
                `)} 
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
