import { menuItems } from "@utils/mock"

export const Sidebar = () =>{

    return (
        <div id="sidebar">
            <img src="/logo.png" alt="yukgetir logo" className="logo" height={150} />
            <ul>
                {menuItems.map((item, key:number)=>(
                    <li key={`menu-item-${key}`} className={key==0?`active`:''}>
                        {item.icon}
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
        </div>  
    )
}