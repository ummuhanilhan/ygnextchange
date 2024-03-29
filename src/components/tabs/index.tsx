import TabLayout, { TabProps } from "@layouts/TabLayout"
import classNames from "classnames"
import { useRouter } from "next/router"
import React from "react"

export const Tabs = ({
    selected,
    setSelected,
    type,
    data,
    filterize,
    routes,
    numeric
}:TabProps) => {

    const router = useRouter();
    return (
        <ul className={classNames(
            'grid tabs my-4',
            `grid-cols-1 lg:grid-cols-${data?.length} gap-3
            lg:gap-${data?.length}`,
            `${type}-tab`
        )}>
            {data?.map((item:any, i:number)=>(
                <li 
                key={`${type}-menu-${i}`} 
                className={classNames({active: (filterize ? selected?.filter : selected) == item.id },`
                text-md flex flex-center items-center border border-transparent border-b-2 bg-white p-3 rounded-md
                cursor-pointer mb-3-
                `)} 
                onMouseDown={(e:any)=>{
                    if(e.button === 1 )
                        window.open(item.path, "_blank")    
                }}
                onClick={()=>{
                    filterize && setSelected({tab:item.id,filter:item.id})
                    !filterize && setSelected(item.id)
                }} >
                    {item.icon}
                    {item.title} {item.count && `(${item.count})` }
                </li>
            ))}
        </ul>
    )
}


export default Tabs