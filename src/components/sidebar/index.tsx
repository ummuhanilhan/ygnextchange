import { menuItems } from "@utils/mock"
import { BoxArrowRight } from "@yukgetir-icons"
import { useRouter } from "next/router"

export const Sidebar = () =>{
    const router = useRouter();

    return (
       <div className="wrapper fixed h-screen p-4">
         <div id="sidebar">
            <img 
                src="/logo.png" 
                alt="yukgetir logo" 
                className="logo" 
                height={150} 
                onClick={()=>router.push('/', undefined, { shallow: true })}
            />
            <ul className="menu">
                {menuItems.map((item, key:number)=>(
                    <li 
                        key={`menu-item-${key}`} 
                        className={`${key==0?`active`:''} text`}
                        onClick={()=>{
                            router.push(item.path, undefined, { shallow: true })
                        }}
                    >
                        {item.icon}
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
            <ul className="footer">
                <li className="justify-center">
                    <BoxArrowRight className="menu-icon" />
                    <p className="text-yukgetir-gray">Çıkış Yap</p>
                </li>
            </ul>
            <p className="text-yukgetir-gray text-xs text-center my-2">©️ 2020 - 2022 Bilinvoa Bilişim A.Ş.</p>
        </div>  
       </div>
    )
}