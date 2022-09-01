import { Bell, Heart, PlusCircle, Share, Truck } from "@yukgetir-icons"
import classNames from "classnames"
import { useRouter } from "next/router"
import { useState } from "react"
import { FiMenu } from 'react-icons/fi' 
export const Header = ({mobile, setMobile}:any) =>{
    const [open, setOpen ] = useState(false)

    const router = useRouter()
    return (
        <div id="header" className="flex justify-end md:justify-between ">
            <ul className={classNames(
                "actions md:flex justify-between flex-row",
                "hidden md:block",
                {hidden: !mobile}
            )}>
                <li className="flex items-cente" onClick={()=>router.push('/cargo/create', undefined, { shallow: true })}>
                    <PlusCircle className="menu-icon " /> <p className="hidden sm:block">Yüküm Var</p> </li>
                <li className={classNames(
                    "flex items-center",
                {hidden: !mobile}
                )} 
                onClick={()=>router.push('/account/vehicles/create', undefined, 
                { shallow: true })}>
                    <Truck className="menu-icon" /> <p className="hidden sm:block">Aracım Var</p> </li>
            </ul>
            <div className="profile ">
                <ul className="">
                    <li>
                        <Share className="menu-icon" />
                        {/** <p>Davet Et</p> **/}
                    </li>
                    <li onClick={()=>router.push('/notifications', undefined, { shallow: true })}>
                        <Bell className="menu-icon" />
                        {/**  <p>Bildiriler</p> **/}
                    </li>
                    <li onClick={()=>router.push('/account/favorites', undefined, { shallow: true })}>
                        <Heart className="menu-icon orange" />
                        {/**  <p>Favorilerim</p **/}
                    </li>
                </ul>
                <div className="profile-dropdown relative">
                
                <button 
                onClick={()=>setOpen(!open)}
                className="flex text-sm
                rounded-full md:mr-0 focus:ring-4 focus:ring-gray-100
                " type="button">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-12 h-12 rounded-full" src="/assets/default.png" alt="user photo" />
                </button>
                <div className={classNames(
                    "z-10 w-44 bg-white absolute right-0 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600",
                    {'hidden':!open},
                )}>
                <div className=" py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div>Tester Test</div>
                    <div className="font-medium truncate">test@test.com</div>
                    </div>
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Hesabım
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Ayarlar
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Favorilerim
                        </a>
                    </li>
                    </ul>
                    <div className="py-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Güvenli Çıkış
                    </a>
                    </div>
                </div>


                </div>
                <div className="mx-2 cursor-pointer lg:hidden" onClick={()=>setMobile(!mobile)} >
                    <FiMenu size={25} className="text-gray-500" />
                </div>
            </div>
        </div>
    )
}