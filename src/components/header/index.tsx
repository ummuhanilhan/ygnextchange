import Outside from "@utils/useoutside"
import { Bell, Heart, Packet, PlusCircle, Share, Truck } from "@yukgetir-icons"
import classNames from "classnames"
import { useRouter } from "next/router"
import React from "react"
import { useState } from "react"
import { NotificationList, NotificationMini } from "@components/notification"
import { FiMenu } from 'react-icons/fi' 

const profileMenu = [
    {id:1, title:'Hesabım', path:'/account'},
    {id:2, title:'Ayarlar', path:'/account/settings'},
    {id:3, title:'Favorilerim', path:'/account/favorites'},
]

export const Header = ({mobile, setMobile}:any) =>{
    const [open, setOpen ] = useState(false)
    const [bellStatus, setBellStatus ] = useState(false)

    const router = useRouter()
    return (
        <div id="header" className="flex justify-end md:justify-between ">
            <ul className={classNames(
                "actions md:flex justify-between flex-row",
                "hidden md:block",
                {hidden: !mobile}
            )}>
                <li className="flex items-center" onClick={()=>router.push('/cargo/create', undefined, { shallow: true })}>
                    <Packet className="menu-icon orange" /> <p className="ml-2 hidden sm:block">Yüküm Var</p> </li>
                <li className={classNames(
                    "flex items-center border-l-[.4rem] border-yg-orange",
                {hidden: !mobile}
                )} 
                onClick={()=>router.push('/vehicles/create', undefined, 
                { shallow: true })}>
                    <Truck className="menu-icon orange" /> <p className="ml-2 hidden sm:block">Aracım Var</p> </li>
            </ul>
            <div className="profile ">
                <ul className="">
                    <li className="relative hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Share className="menu-icon" />
                        {/** <p>Davet Et</p> **/}
                    </li>
                    <li className="relative- hover:bg-gray-100 rounded-full mx-1- w-12 h-12 flex items-center justify-center" onClick={()=>setBellStatus(!bellStatus)} >
                    <Outside cb={()=>setBellStatus(false)}>
                        <div className='relative'>
                            <Bell className="menu-icon" />
                            <span className="flex h-3 w-3 absolute top-[0rem] right-[-.1rem]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                        </div>
                        { bellStatus && <NotificationDropdown status={bellStatus} setStatus={setBellStatus} />}
                        {/**  <p>Bildiriler</p> **/}
                     </Outside>
                    </li>
                    <li className="relative hover:bg-gray-100 rounded-full mr-1 w-12 h-12 flex items-center justify-center"
                     onClick={()=>router.push('/account/favorites', undefined, { shallow: true })}>
                        <Heart className="menu-icon orange" />
                        {/**  <p>Favorilerim</p **/} 
                    </li>
                </ul>
                <div className="profile-dropdown relative">
               
                <Outside cb={()=>setOpen(false)}>
                    <button 
                    onClick={()=>setOpen(!open)}
                    className="flex text-sm
                    rounded-full md:mr-0 focus:ring-4 focus:ring-gray-100
                    " type="button">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-12 h-12 rounded-full" src="/assets/default.png" alt="avatar" />
                    </button>
                    <div className={classNames(
                        "z-40 w-44 bg-white absolute right-0 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600",
                        {'hidden':!open},
                    )}>
                    <div className=" py-3 px-4 text-sm text-gray-900 dark:text-white">
                        <div>Tester Test</div>
                        <div className="font-medium truncate">test@test.com</div>
                        </div>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" >
                        {profileMenu.map((item, i:number)=>(
                            <li key={`profile-menu-${i}`}>
                                <div onClick={()=>router.push(item.path)} className="relative cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    {item.title}
                                </div>
                            </li>
                        ))}
                    
                        </ul>
                        <div className="py-1">
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Güvenli Çıkış
                        </a>
                        </div>
                    </div>

                </Outside>

                </div>
                <div className="mx-2 cursor-pointer lg:hidden" onClick={()=>setMobile(!mobile)} >
                    <FiMenu size={25} className="text-gray-500" />
                </div>
            </div>
        </div>
    )
}

export const NotificationDropdown = ({status, setBellStatus}:any) => {
 
    return (
        <React.Fragment>
            <div id="dropdownNotification" className={classNames(
                "notifications-mini absolute right-0 top-[5rem] p-3 z-20 w-96 max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700",
                {'hidden':!status}
            )} >

           <NotificationMini />

            </div>
        </React.Fragment>
    )
}

export const NotificationDropdown2 = ({status, setBellStatus}:any) => {
    const router = useRouter()

    return (
        <React.Fragment>
            <div id="dropdownNotification" className={classNames(
                "absolute right-0 top-8 z-20 w-80 max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700",
                {'hidden':!status}
            )} >
            <div className="block py-2 px-4 font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white">
                Bildirimler
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              
                <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex-shrink-0">
                    <img className="w-11 h-11 rounded-full" src="/assets/default.png" alt="" />
                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-800">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                    </div>
                </div>
                <div className="pl-3 w-full">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span className="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                </div>
                </a>
                <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex-shrink-0">
                    <img className="w-11 h-11 rounded-full" src="/assets/default.png" alt="" />
                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-800">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                    </div>
                </div>
                <div className="pl-3 w-full">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span className="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
                </div>
                </a>
                <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex-shrink-0">
                    <img className="w-11 h-11 rounded-full" src="/assets/default.png" alt="" />
                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-800">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </div>
                </div>
                <div className="pl-3 w-full">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span className="font-medium text-blue-500" >@bonnie.green</span> what do you say?</div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">1 hour ago</div>
                </div>
                </a>
            </div>
            <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                <div className="inline-flex items-center ">
                <svg className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                    Hepsini gör
                </div>
            </a>
            </div>
        </React.Fragment>
    )
}

