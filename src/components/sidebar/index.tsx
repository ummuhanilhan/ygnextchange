import { menuItems } from "@utils/mock"
import { BoxArrowRight } from "@yukgetir-icons"

export const Sidebar = () =>{

    return (
        <div id="sidebar">
            <img src="/logo.png" alt="yukgetir logo" className="logo" height={150} />
            <ul className="menu">
                {menuItems.map((item, key:number)=>(
                    <li key={`menu-item-${key}`} className={key==0?`active`:''}>
                        {item.icon}
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
            <ul className="footer">
                <li>
                    <BoxArrowRight className="menu-icon" />
                    <p>Çıkış Yap</p>
                </li>
            </ul>
            <p></p>
        </div>  
    )
}