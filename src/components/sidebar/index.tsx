import { menuItems } from "@utils/mock"

export const Sidebar = () =>{

    return (
        <div id="sidebar">
            <img src="/logo.png" alt="yukgetir logo" className="logo" height={150} />
            <ul>
                {menuItems.map((item, key:number)=>(
                    <li key={`menu-item-${key}`}>
                        {item.icon}
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>  
    )
}