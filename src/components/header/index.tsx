import { Bell, Heart, PlusCircle, Share, Truck } from "@yukgetir-icons"
import classNames from "classnames"
import { useRouter } from "next/router"
import { FiMenu } from 'react-icons/fi' 
export const Header = ({mobile, setMobile}:any) =>{
    const router = useRouter()
    return (
        <div id="header" className="flex justify-end md:justify-between ">
            <ul className={classNames(
                "actions md:flex justify-between flex-row",
                "hidden md:block",
                {hidden: !mobile}
            )}>
                <li className="flex items-cente" onClick={()=>router.push('/cargo/create', undefined, { shallow: true })}>
                    <PlusCircle className="menu-icon " /> <p>Yüküm Var</p> </li>
                <li className={classNames(
                    "flex items-center",
                {hidden: !mobile}
                )} 
                onClick={()=>router.push('/account/vehicles/create', undefined, 
                { shallow: true })}>
                    <Truck className="menu-icon" /> <p>Aracım Var</p> </li>
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
                <div className="profile-dropdown">
                    <img src="/assets/default.png" 
                    className=""
                    alt="profile image" 
                    width={45} 
                    onClick={()=>router.push('/account/profile', undefined, { shallow: true })} 
                    />
                </div>
                <div className="mx-2 cursor-pointer lg:hidden" onClick={()=>setMobile(!mobile)} >
                    <FiMenu size={25} className="text-gray-500" />
                </div>
            </div>
        </div>
    )
}