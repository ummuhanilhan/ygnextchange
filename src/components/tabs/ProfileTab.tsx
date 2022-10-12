import { profileTabMenu } from "@utils/mock"
import classNames from "classnames"
import { useRouter } from "next/router"
import React from "react"


export const ProfileTab = ({change}:any) => {
    const [selected, setSelected] = React.useState<number>(1)

    const router = useRouter();
    return (
        <ul className="grid grid-cols-1 gap-2
        lg:grid-cols-3
        xl:grid-cols-5 xl:gap-3 
        profile-tab tabs">
            {profileTabMenu.map((item:any, i:number)=>(
                <li 
                key={`profile-menu-${i}`} 
                className={classNames({active:(router.pathname == item.path) },`
                text-md flex flex-center items-center border border-transparent border-b-4 bg-white p-3 rounded-md
                cursor-pointer xl:mb-0
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
