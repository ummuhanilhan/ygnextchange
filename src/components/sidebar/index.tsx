import { menuItems } from "@utils/mock"
import { BoxArrowRight } from "@yukgetir-icons"
import { useRouter } from "next/router"

export const Sidebar = () =>{
    const router = useRouter();

    return (
       <div className="wrapper fixed h-screen p-6">
         <div id="sidebar">
            <img src="/logo.png" alt="yukgetir logo" className="logo" height={150} />
            <ul className="menu">
                {menuItems.map((item, key:number)=>(
                    <li 
                        key={`menu-item-${key}`} 
                        className={key==0?`active`:''}
                        onClick={()=>{
                            router.push(item.path)
                        }}
                    >
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
       </div>
    )
}