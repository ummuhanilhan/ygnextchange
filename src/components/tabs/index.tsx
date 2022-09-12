import TabLayout, { TabProps } from "@layouts/TabLayout"
import classNames from "classnames"
import { useRouter } from "next/router"
import React from "react"

export const Tabs = ({
    selected,
    setSelected,
    type,
    data,
    routes,
    numeric
}:TabProps) => {

    const router = useRouter();
    return (
        <ul className={classNames(
            'grid tabs',
            `grid-cols-${data?.length} gap-${data?.length}`,
            `${type}-tab`
        )}>
            {data?.map((item:any, i:number)=>(
                <li 
                key={`${type}-menu-${i}`} 
                className={classNames({active:( selected == (numeric ? item.id : String(routes[item.slug])) ) },`
                text-md flex flex-center items-center border border-transparent border-b-2 bg-white p-3 rounded-md
                cursor-pointer mb-3
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


export default Tabs