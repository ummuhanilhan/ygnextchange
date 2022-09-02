import { profileTabMenu } from "@utils/mock"
import classNames from "classnames"


export const ProfileTab = ({selected, setSelected}:any) => {
    return (
        <div>
            <ul className="grid grid-cols-5 gap-3 profile-tab">
                {profileTabMenu.map((item:any, i:number)=>(
                    <li 
                    key={`profile-menu-${i}`} 
                    className={classNames({active:selected==item.id},`
                    text-md flex flex-center items-center border border-transparent border-b-4  bg-white p-3 rounded-md
                    cursor-pointer mb-3
                    `)} 
                    onClick={()=>setSelected(item.id)} >
                        {item.icon}
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}