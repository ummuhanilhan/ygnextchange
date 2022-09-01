import { useState } from "@storybook/addons"
import { profileTabMenu } from "@utils/mock"
import classNames from "classnames"


export const ProfileTab = ({}:any) => {
    const [selected, setSelected] = useState(null)
    return (
        <div>
            <ul>
                {profileTabMenu.map((item:any, i:number)=>(
                    <li 
                    key={`profile-menu-${i}`} 
                    className={classNames({active:selected==item.id})} 
                    onClick={()=>setSelected(item.id)} >
                        {item.icon}
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}