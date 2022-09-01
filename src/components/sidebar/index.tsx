import { menuItems } from "@utils/mock"
import { BoxArrowRight } from "@yukgetir-icons"
import { useRouter } from "next/router"
import { FiX } from "react-icons/fi";

export const Sidebar = ({mobile, setMobile}:any) =>{
    const router = useRouter();

    const logo = (
    <img 
        src="/logo.png" 
        alt="yukgetir logo" 
        className="logo" 
        height={150} 
        onClick={()=>router.push('/', undefined, { shallow: true })}
    />
    )
    return (
         <div id="sidebar" >
            {!mobile ? logo : (
                <div className="flex justify-between items-start w-full">
                    {logo}
                    <FiX 
                    onClick={()=>setMobile(false)}
                    size={23} 
                    className="mr-2 mt-2 text-gray-500 cursor-pointer" />
                </div>
            )}
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
    )
}