import { menuItems } from "@utils/mock"
import useDimensions from "@utils/useDimensions";
import { BoxArrowRight } from "@yukgetir-icons"
import { useRouter } from "next/router"
import { useRef } from "react";
import { FiX } from "react-icons/fi";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

export const Sidebar = ({mobile, setMobile}:any) =>{
    const router = useRouter();
    const {pathname} = router;
    const [ref, { height }]:any = useDimensions();

    const logo = (
    <img 
        src="/logo.png" 
        alt="yukgetir logo" 
        className="logo cursor-pointer" 
        height={150} 
        onClick={()=>router.push('/', undefined, { shallow: true })}
    />
    )
    return (
            <div id="sidebar" className="transitionable" ref={ref} >
                {!mobile ? logo : (
                    <div className="flex justify-between items-start w-full">
                        {logo}
                        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200 flex items-center justify-center"  onClick={()=>setMobile(false)} >
                            <FiX 
                                size={23} 
                                className="text-gray-500" 
                            />
                        </div>
                    </div>
                )}

                <ul className="menu">
                 <SimpleBar style={{ maxHeight: height-260||400 }}>
                    {menuItems.map((item, key:number)=>(
                        <MenuItem item={item} key={`menu-item-${key}`} pathname={pathname}  />
                    ))}
                  </SimpleBar>
                </ul>

                <ul className="footer">
                    <li className="justify-center">
                        <BoxArrowRight className="menu-icon" />
                        <p className="text-yg-gray">Çıkış Yap</p>
                    </li>
                </ul>
                <p className="text-yg-gray text-xs text-center my-2">©️ 2020 - 2022 Bilinova Bilişim A.Ş.</p>
            </div>  
    )
}

export const MenuItem = ({item, pathname}:any) => {
    const router = useRouter();
    const ref = useRef(null);
    return(
        <li 
            ref={ref}
            className={`${item.path==pathname?`active`:''} text`}
            onClick={()=>{
                router.push(item.path, undefined, { shallow: true })
            }}
            onMouseDown={(e:any)=>{
                e.preventDefault()
                if(e.button === 1 )
                    window.open(item.path, "_blank")    

                if(e.which === 3)
                    window.open(item.path, "_blank")       
            }}
        >
            {item.icon}
            <p>{item.title}</p>
        </li>
    )
}